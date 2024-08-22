"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const ResultsTable = ({}) => {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        <TableColumn>test</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>{(columnKey) => <TableCell>cell</TableCell>}</TableRow>
      </TableBody>
    </Table>
  );
};

export default ResultsTable;
