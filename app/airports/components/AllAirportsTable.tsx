"use client";

import { AirportResponseDataObject } from "@/data/api/documentation";

import Filters from "./Filters";
import ResultsTable from "@/components/table/table";
import useAllAirportsTable from "@/hooks/useAllAirportsTable";

type AllAirportsTableProps = {
  airports: AirportResponseDataObject[];
};

export default function AllAirportsTable({ airports }: AllAirportsTableProps) {
  const {
    table,
    selectedCities,
    availableCities,
    handleCountrySelection,
    setPagination,
  } = useAllAirportsTable(airports);

  return (
    <div>
      <Filters
        selectedCities={selectedCities}
        availableCities={availableCities}
        onCitySelection={handleCountrySelection}
      />
      <ResultsTable setPagination={setPagination} table={table} />
    </div>
  );
}
