import {
  Column,
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { ArrowsDownUp, ArrowUp, ArrowDown } from "@phosphor-icons/react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Lounge } from "@/data/api/documentation";
import getGooglePlaceDetails from "@/data/lounge/getGooglePlaceDetails";
import { GooglePlace } from "@/types/googlePlaces/types";

const useAllLoungesTable = <T,>(data: T[]) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

  enum ColAccessors {
    lounge = "attributes",
    airport = "attributes.airport.data.attributes.code",
    terminal = "attributes.terminal",
    isOpen = "attributes.googlePlaceId"
  }

  const BasicSorting = (column: Column<T, unknown>): JSX.Element => {
    return (
      <>
        {column.getIsSorted() === false && (
          <ArrowsDownUp className="pl-1" size={16} />
        )}
        {column.getIsSorted() === "asc" ? (
          <ArrowUp className="pl-1" size={16} />
        ) : null}
        {column.getIsSorted() === "desc" ? (
          <ArrowDown className="pl-1" size={16} />
        ) : null}
      </>
    );
  };

  const columns: ColumnDef<T>[] = [
    {
      id: ColAccessors.lounge,
      meta: {
        name: "Lounge"
      },
      accessorKey: ColAccessors.lounge,
      enableSorting: true,
      sortingFn: (rowA, rowB) => {
        // this typecasting is ugly, there a better way to do?
        const numA = (rowA.getValue(ColAccessors.lounge) as Lounge)
          .name as string;
        const numB = (rowB.getValue(ColAccessors.lounge) as Lounge)
          .name as string;

        return numA < numB ? 1 : numA > numB ? -1 : 0;
      },
      header: ({ column }) => {
        return (
          <Button
            className="p-0"
            variant="light"
            onClick={() => column.toggleSorting()}
          >
            Lounge
            <BasicSorting {...column} />
          </Button>
        );
      },
      cell: ({ row }) => {
        const lounge: Lounge = row.getValue(ColAccessors.lounge);
        return (
          <Link
            color="foreground"
            href={`/lounges/${row.getValue(ColAccessors.airport)}/${lounge.slug}`}
            className="font-semibold"
          >
            {lounge.name} - {lounge.terminal}
          </Link>
        );
      }
    },
    {
      id: ColAccessors.airport,
      accessorKey: ColAccessors.airport,
      meta: {
        name: "Airport"
      },
      enableSorting: true,
      header: ({ column }) => {
        return (
          <Button
            className="p-0"
            variant="light"
            onClick={() => column.toggleSorting()}
          >
            Airport
            <BasicSorting {...column} />
          </Button>
        );
      },
      cell: ({ row }) => {
        return (
          <Link
            color="foreground"
            href={`/lounges/${row.getValue(ColAccessors.airport)}`}
            className="font-semibold"
          >
            {row.getValue(ColAccessors.airport)}
          </Link>
        );
      }
    },
    {
      id: ColAccessors.isOpen,
      accessorKey: ColAccessors.isOpen,
      enableSorting: false,
      header: () => {
        return <Button variant="light">Open Now?</Button>;
      },
      cell: async ({ row }) => {
        const isOpen = useMemo(async () => {
          const open = await getGooglePlaceDetails(
            row.getValue(ColAccessors.isOpen),
            true
          );
          return open;
        }, []);

        const openStatus = async (isOpen: Promise<GooglePlace>) => {
          const open = await isOpen;
          if (open.currentOpeningHours) {
            return open.currentOpeningHours?.openNow ? "Yes" : "No";
          } else {
            return "Unavailable";
          }
        };

        return <div className="font-semibold">{await openStatus(isOpen)}</div>;
      }
    }
    // {
    //   id: ColAccessors.isOpen,
    //   accessorKey: ColAccessors.isOpen,
    //   enableSorting: true,
    //   header: ({ column }) => {
    //     return (
    //       <Button variant="ghost" onClick={() => column.toggleSorting()}>
    //         Open
    //         <BasicSorting {...column} />
    //       </Button>
    //     );
    //   },
    //   cell: ({ row }) => {
    //     return (
    //       <div className="font-semibold">
    //         {row.getValue(ColAccessors.airport)}
    //       </div>
    //     );
    //   }
    // }
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
      pagination
    }
  });

  return {
    columns,
    sorting,
    setSorting,
    setPagination,
    table
  };
};

export default useAllLoungesTable;
