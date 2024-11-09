"use client"

import { JwtPayload } from "@clerk/types"

import Filters from "./Filters"

import { LoungeResponseDataObject } from "@/data/api/documentation"
import useAllLoungesTable from "@/hooks/useAllLoungesTable"
import ResultsTable from "@/components/table/table"

type AllLoungesTableProps = {
  lounges: LoungeResponseDataObject[]
  sessionClaims: JwtPayload | null
  currentAirportCodes: string[]
}

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
  } = useAllLoungesTable(lounges, sessionClaims)

  return (
    <div>
      <Filters
        currentAirportCodes={currentAirportCodes}
        selectedAirportCodes={selectedAirportCodes}
        sessionClaims={sessionClaims}
        table={table}
        onAirportCodeSelection={handleAirportCodeSelection}
      />

      <ResultsTable setPagination={setPagination} table={table} />
    </div>
  )
}

export default AllLoungesTable
