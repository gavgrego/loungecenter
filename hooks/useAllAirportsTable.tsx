import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  Column,
} from "@tanstack/react-table";
import { useState, useMemo, useCallback } from "react";
import { ArrowsDownUp, ArrowUp, ArrowDown } from "@phosphor-icons/react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
export enum ColAccessors {
  code = "attributes.code",
  name = "attributes.name",
  city = "attributes.city",
  country = "attributes.country",
}

const useAllAirportsTable = <T,>(data: T[]) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const availableCountries = useMemo(() => {
    const countrySet = new Set<string>(
      data.map((airport) => ColAccessors.country)
    );
    return Array.from(countrySet).sort();
  }, [data]);

  const filteredAirports = useMemo(() => {
    if (selectedCountries.length === 0) return data;
    return data.filter((airport) =>
      selectedCountries.includes(ColAccessors.country)
    );
  }, [data, selectedCountries]);

  const handleCountrySelection = useCallback(
    (country: string, isSelected: boolean) => {
      setSelectedCountries((prev) =>
        isSelected ? [...prev, country] : prev.filter((c) => c !== country)
      );
    },
    []
  );

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
      id: ColAccessors.code,
      accessorKey: ColAccessors.code,
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
            href={`/lounges/${row.getValue(ColAccessors.code)}`}
          >
            {row.getValue(ColAccessors.code)}
          </Link>
        );
      },
    },
    {
      id: ColAccessors.name,
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
      accessorKey: ColAccessors.name,
      cell: ({ row }) => {
        return (
          <Link
            className="font-semibold"
            color="foreground"
            href={`/lounges/${row.getValue(ColAccessors.code)}`}
          >
            {row.getValue(ColAccessors.name)}
          </Link>
        );
      },
    },
    {
      id: ColAccessors.city,
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
      accessorKey: ColAccessors.city,
      cell: ({ row }) => {
        return <div>{row.getValue(ColAccessors.city)}</div>;
      },
    },
    {
      id: ColAccessors.country,
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
      accessorKey: ColAccessors.country,
      cell: ({ row }) => {
        return <div>{row.getValue(ColAccessors.country)}</div>;
      },
    },
    // Add other columns as needed
  ];

  const table = useReactTable({
    data: filteredAirports,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return {
    table,
    selectedCountries,
    availableCountries,
    handleCountrySelection,
    setPagination,
  };
};

export default useAllAirportsTable;
