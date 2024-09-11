"use client";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import useAllLoungesTable from "@/hooks/useAllLoungesTable";

import { JwtPayload } from "@clerk/types";
import ResultsTable from "@/components/table/table";

type AllLoungesTableProps = {
  lounges: LoungeResponseDataObject[];
  sessionClaims: JwtPayload | null;
};

const AllLoungesTable = ({ lounges, sessionClaims }: AllLoungesTableProps) => {
  const { table, setPagination } = useAllLoungesTable(lounges, sessionClaims);

  return <ResultsTable table={table} setPagination={setPagination} />;
};

export default AllLoungesTable;
