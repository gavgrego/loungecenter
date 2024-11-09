import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  ColumnDef,
  SortingState,
  getSortedRowModel,
  Column,
  ColumnFiltersState,
  getPaginationRowModel,
} from "@tanstack/react-table"
import { useState, useMemo, useCallback } from "react"
import { ArrowsDownUp, ArrowUp, ArrowDown } from "@phosphor-icons/react"
import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"

import { AirportResponseDataObject } from "@/data/api/documentation"
export enum ColAccessors {
  code = "attributes.code",
  name = "attributes.name",
  city = "attributes.city",
  country = "attributes.country",
}

const useAllAirportsTable = (data: AirportResponseDataObject[]) => {
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const availableCities = useMemo(() => {
    const citySet = new Set<string>(
      data.map((airport) => airport?.attributes?.city || "")
    )

    return Array.from(citySet).sort()
  }, [data])

  const filteredAirports = useMemo(() => {
    if (selectedCities.length === 0) return data

    return data.filter((airport) =>
      selectedCities.includes(airport?.attributes?.city || "")
    )
  }, [data, selectedCities])

  const handleCountrySelection = useCallback(
    (city: string, isSelected: boolean) => {
      setSelectedCities((prev) =>
        isSelected ? [...prev, city] : prev.filter((c) => c !== city)
      )
    },
    []
  )

  const BasicSorting = (
    column: Column<AirportResponseDataObject, unknown>
  ): JSX.Element => {
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
    )
  }

  const columns: ColumnDef<AirportResponseDataObject>[] = [
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
            IATA Code
            <BasicSorting {...column} />
          </Button>
        )
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
        )
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
            Name
            <BasicSorting {...column} />
          </Button>
        )
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
        )
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
            City
            <BasicSorting {...column} />
          </Button>
        )
      },
      accessorKey: ColAccessors.city,
      cell: ({ row }) => {
        return <div>{row.getValue(ColAccessors.city)}</div>
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
            Country
            <BasicSorting {...column} />
          </Button>
        )
      },
      accessorKey: ColAccessors.country,
      cell: ({ row }) => {
        return <div>{row.getValue(ColAccessors.country)}</div>
      },
    },
    // Add other columns as needed
  ]

  const table = useReactTable({
    data: filteredAirports,
    columns,
    filterFns: {},
    state: {
      columnFilters,
      sorting,
      pagination,
    },
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return {
    table,
    selectedCities,
    availableCities,
    handleCountrySelection,
    setPagination,
  }
}

export default useAllAirportsTable
