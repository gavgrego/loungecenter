"use client";

import { JwtPayload } from "@clerk/types";

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
  const {
    table,
    setPagination,
    selectedAirportCodes,
    handleAirportCodeSelection,
  } = useAllLoungesTable(lounges, sessionClaims);

  return (
    <>
      <div className="mb-4">
        <Filters
          currentAirportCodes={currentAirportCodes}
          selectedAirportCodes={selectedAirportCodes}
          table={table}
          onAirportCodeSelection={handleAirportCodeSelection}
        />
      </div>

      <ResultsTable setPagination={setPagination} table={table} />
    </>
  );
};

export default AllLoungesTable;
