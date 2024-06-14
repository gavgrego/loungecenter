import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const AllLoungeTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableColumn>Header</TableColumn>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>test</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AllLoungeTable;
