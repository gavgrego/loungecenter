import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowsDownUp,
  ArrowUp,
  ArrowDown,
  SealCheck,
  X,
} from "@phosphor-icons/react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useQuery } from "@tanstack/react-query";
import { JwtPayload } from "@clerk/types";

import { Lounge } from "@/data/api/documentation";
import getGooglePlaceDetails from "@/data/lounge/getGooglePlaceDetails";
import { GooglePlace } from "@/types/googlePlaces/types";
import getHasAccess from "@/data/lounge/getHasAccess";

export enum ColAccessors {
  lounge = "attributes",
  airport = "attributes.airport.data.attributes.code",
  isOpen = "attributes.googlePlaceId",
  hasAccess = "hasAccess",
}

const useAllLoungesTable = <T,>(
  data: T[],
  sessionClaims: JwtPayload | null
) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [selectedAirportCodes, setSelectedAirportCodes] = useState<string[]>(
    []
  );

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const handleAirportCodeSelection = useMemo(
    () => (code: string, isSelected: boolean) => {
      setSelectedAirportCodes((prev) =>
        isSelected ? [...prev, code] : prev.filter((c) => c !== code)
      );
    },
    []
  );

  const [columnVisibility, setColumnVisibility] = useState({
    [ColAccessors.lounge]: true,
    [ColAccessors.airport]: true,
    [ColAccessors.isOpen]: sessionClaims ? true : false,
    hasAccess: sessionClaims ? true : false,
  });

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

  const columns: ColumnDef<T>[] = useMemo(
    () => [
      {
        id: ColAccessors.lounge,
        meta: {
          name: "Lounge",
        },
        enableColumnFilter: false,
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
              className="font-semibold"
              color="foreground"
              href={`/lounges/${row.getValue(ColAccessors.airport)}/${lounge.slug}`}
            >
              {lounge.name} - {lounge.terminal}
            </Link>
          );
        },
      },

      {
        id: ColAccessors.airport,
        accessorKey: ColAccessors.airport,
        meta: {
          name: "Airport",
        },
        filterFn: "arrIncludesSome",
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
              className="font-semibold"
              color="foreground"
              href={`/lounges/${row.getValue(ColAccessors.airport)}`}
            >
              {row.getValue(ColAccessors.airport)}
            </Link>
          );
        },
      },
      {
        id: ColAccessors.isOpen,
        accessorKey: ColAccessors.isOpen,
        enableSorting: false,
        filterFn: "equalsString",
        header: ({ column }) => {
          return (
            <Button
              className="p-0"
              variant="light"
              onClick={() => column.toggleSorting()}
            >
              Open Now?
              <BasicSorting {...column} />
            </Button>
          );
        },

        cell: ({ row, column }) => {
          const { isLoading, data } = useQuery({
            queryKey: ["googlePlaceDetails", row.getValue(ColAccessors.isOpen)],
            queryFn: () =>
              getGooglePlaceDetails(row.getValue(ColAccessors.isOpen), true),
          });

          const openStatus = (isOpen: GooglePlace | null) => {
            if (isLoading) {
              return <div>Loading...</div>;
            }

            if (isOpen?.currentOpeningHours) {
              return isOpen.currentOpeningHours?.openNow ? (
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full" />
                  Open Now!
                </div>
              ) : (
                <div className="flex flex-row gap-3 items-center">
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                  <div>Currently Closed</div>
                </div>
              );
            } else {
              return (
                <div className="flex flex-row gap-3 items-center">
                  <span>❓</span> Unknown
                </div>
              );
            }
          };

          return <div>{openStatus(data || {})}</div>;
        },
      },
      {
        id: "hasAccess",
        accessorKey: ColAccessors.lounge,
        enableSorting: false,
        filterFn: (row, id, filterValue) => {
          return (
            getHasAccess(row.getValue(ColAccessors.lounge), sessionClaims) ===
            filterValue
          );
        },

        header: ({ column }) => {
          return (
            <Button className="p-0" variant="light">
              Have Access?
            </Button>
          );
        },

        cell: ({ row, column }) => {
          return (
            <>
              {getHasAccess(
                row.getValue(ColAccessors.lounge),
                sessionClaims
              ) ? (
                <SealCheck color="green" size={24} weight="fill" />
              ) : (
                <X color="red" size={24} weight="fill" />
              )}
            </>
          );
        },
      },
    ],
    [data]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    filterFns: {},
    state: {
      sorting,
      columnFilters,
      pagination,
      columnVisibility,
    },
  });

  useEffect(() => {
    if (selectedAirportCodes.length > 0) {
      table
        .getColumn(ColAccessors.airport)
        ?.setFilterValue(selectedAirportCodes);
    } else {
      table.getColumn(ColAccessors.airport)?.setFilterValue(undefined);
    }
  }, [selectedAirportCodes, table]);

  return {
    columns,
    ColAccessors,
    sorting,
    columnFilters,
    setColumnFilters,
    setSorting,
    setPagination,
    table,
    selectedAirportCodes,
    handleAirportCodeSelection,
  };
};

export default useAllLoungesTable;
