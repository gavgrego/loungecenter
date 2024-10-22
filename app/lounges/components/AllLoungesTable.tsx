"use client";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import useAllLoungesTable from "@/hooks/useAllLoungesTable";

import { JwtPayload } from "@clerk/types";
import ResultsTable from "@/components/table/table";
import Filters from "@/components/table/Filters";

type AllLoungesTableProps = {
  lounges: LoungeResponseDataObject[];
  sessionClaims: JwtPayload | null;
};

const AllLoungesTable = ({ lounges, sessionClaims }: AllLoungesTableProps) => {
  const { table, setPagination } = useAllLoungesTable(lounges, sessionClaims);
  return (
    <>
      <Filters table={table} />
      <ResultsTable table={table} setPagination={setPagination} />
    </>
  );
};

export default AllLoungesTable;
