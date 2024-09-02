"use client";

import {
  LoungeResponse,
  LoungeResponseDataObject
} from "@/data/api/documentation";
import useAllLoungesTable from "@/hooks/useAllLoungesTable";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/react";
import { flexRender } from "@tanstack/react-table";

type AllLoungesTableProps = {
  lounges: LoungeResponseDataObject[];
};

const AllLoungesTable = ({ lounges }: AllLoungesTableProps) => {
  console.log(lounges);
  const { table } = useAllLoungesTable(lounges);

  console.log(lounges);

  return (
    <Table>
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Other</TableColumn>

        {/* {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              console.log(header);
              return <TableColumn key={header.id}>{header.id}</TableColumn>;
            })}
          </TableRow>
        ))} */}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={table.getAllColumns().length}
              className="h-24 text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default AllLoungesTable;
