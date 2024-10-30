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
    selectedCountries,
    availableCountries,
    handleCountrySelection,
    setPagination,
  } = useAllAirportsTable(airports);

  return (
    <div className="space-y-4">
      <Filters
        table={table}
        selectedCountries={selectedCountries}
        availableCountries={availableCountries}
        onCountrySelection={handleCountrySelection}
      />
      <ResultsTable setPagination={setPagination} table={table} />
    </div>
  );
}
