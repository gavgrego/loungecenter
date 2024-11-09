"use client"

import Filters from "./Filters"

import { AirportResponseDataObject } from "@/data/api/documentation"
import ResultsTable from "@/components/table/table"
import useAllAirportsTable from "@/hooks/useAllAirportsTable"

type AllAirportsTableProps = {
  airports: AirportResponseDataObject[]
}

export default function AllAirportsTable({ airports }: AllAirportsTableProps) {
  const {
    table,
    selectedCities,
    availableCities,
    handleCountrySelection,
    setPagination,
  } = useAllAirportsTable(airports)

  return (
    <div>
      <Filters
        availableCities={availableCities}
        selectedCities={selectedCities}
        onCitySelection={handleCountrySelection}
      />
      <ResultsTable setPagination={setPagination} table={table} />
    </div>
  )
}
