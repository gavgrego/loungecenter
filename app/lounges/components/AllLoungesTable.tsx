"use client";

import { JwtPayload } from "@clerk/types";
import { useState, useMemo } from "react";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import useAllLoungesTable from "@/hooks/useAllLoungesTable";
import ResultsTable from "@/components/table/table";
import Filters from "@/components/table/Filters";

type AllLoungesTableProps = {
  lounges: LoungeResponseDataObject[];
  sessionClaims: JwtPayload | null;
  currentAirportCodes: string[];
};

const AllLoungesTable = ({
  lounges,
  sessionClaims,
  currentAirportCodes,
}: AllLoungesTableProps) => {
  const { table, setPagination, ColAccessors } = useAllLoungesTable(
    lounges,
    sessionClaims
  );
  // this stuff probably needs moved to hook once this table component is generalized
  const [selectedAirportCodes, setSelectedAirportCodes] = useState<string[]>(
    []
  );

  const handleAirportCodeSelection = useMemo(
    () => (code: string, isSelected: boolean) => {
      setSelectedAirportCodes((prev) =>
        isSelected ? [...prev, code] : prev.filter((c) => c !== code)
      );
    },
    []
  );

  // Filter the table data based on selected airport codes
  useMemo(() => {
    if (selectedAirportCodes.length > 0) {
      table
        .getColumn(ColAccessors.airport)
        ?.setFilterValue(selectedAirportCodes);
    } else {
      table.getColumn(ColAccessors.airport)?.setFilterValue(undefined);
    }
  }, [selectedAirportCodes, table]);

  return (
    <>
      <Filters
        currentAirportCodes={currentAirportCodes}
        selectedAirportCodes={selectedAirportCodes}
        table={table}
        onAirportCodeSelection={handleAirportCodeSelection}
      />
      <ResultsTable setPagination={setPagination} table={table} />
    </>
  );
};

export default AllLoungesTable;
