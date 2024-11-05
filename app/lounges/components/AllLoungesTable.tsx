"use client";

import { JwtPayload } from "@clerk/types";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import useAllLoungesTable from "@/hooks/useAllLoungesTable";
import ResultsTable from "@/components/table/table";
import Filters from "./Filters";

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
  const {
    table,
    setPagination,
    selectedAirportCodes,
    handleAirportCodeSelection,
  } = useAllLoungesTable(lounges, sessionClaims);

  return (
    <div>
      <Filters
        currentAirportCodes={currentAirportCodes}
        selectedAirportCodes={selectedAirportCodes}
        table={table}
        onAirportCodeSelection={handleAirportCodeSelection}
        sessionClaims={sessionClaims}
      />

      <ResultsTable setPagination={setPagination} table={table} />
    </div>
  );
};

export default AllLoungesTable;
