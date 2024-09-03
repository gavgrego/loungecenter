import {
  Column,
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { useState } from "react";
import { ArrowsDownUp, ArrowUp, ArrowDown } from "@phosphor-icons/react";
import { Button } from "@nextui-org/button";

const useAllLoungesTable = <T,>(data: T[]) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

  console.log(pagination);

  enum ColAccessors {
    name = "attributes.name",
    airport = "attributes.airport.data.attributes.code"
    // hasAccess = "attributes.amount",
    // isOpen = "attributes.isOpen"
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
      id: ColAccessors.name,
      meta: {
        name: "Name"
      },
      accessorKey: ColAccessors.name,
      enableSorting: true,
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting()}>
            Name
            <BasicSorting {...column} />
          </Button>
        );
      },
      cell: ({ row }) => {
        return (
          <div className="font-semibold">{row.getValue(ColAccessors.name)}</div>
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
          <Button variant="ghost" onClick={() => column.toggleSorting()}>
            Airport
            <BasicSorting {...column} />
          </Button>
        );
      },
      cell: ({ row }) => {
        return (
          <a
            href={`/lounges/${row.getValue(ColAccessors.airport)}`}
            className="font-semibold"
          >
            {row.getValue(ColAccessors.airport)}
          </a>
        );
      }
    }
    // {
    //   id: ColAccessors.hasAccess,
    //   accessorKey: ColAccessors.hasAccess,
    //   enableSorting: true,
    //   header: ({ column }) => {
    //     return (
    //       <Button variant="ghost" onClick={() => column.toggleSorting()}>
    //         Access
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
    // },
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
