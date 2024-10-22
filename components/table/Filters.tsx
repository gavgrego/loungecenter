import { LoungeResponseDataObject } from "@/data/api/documentation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import { ColumnFiltersState, Table } from "@tanstack/react-table";

type FiltersProps<T> = {
  table: Table<T>;
};

const Filters = ({ table }: FiltersProps<LoungeResponseDataObject>) => {
  const columns = table
    .getAllColumns()
    .filter((column) => column.getCanFilter());

  console.log(columns.map((column) => column.getCanFilter()));

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="text-default-500 cursor-pointer">Filters</button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={false}>
        {columns.map((column) => {
          const columnFilterValue = column.getFilterValue();
          return (
            // these need to be dynamically imported obvi
            <DropdownItem key={column.id} closeOnSelect={false}>
              <CheckboxGroup>
                <Checkbox
                  value="SFO"
                  onChange={(e) => column.setFilterValue(e.target.value)}
                >
                  complicated
                </Checkbox>
                <Checkbox
                  value="relationship"
                  onChange={(e) => column.setFilterValue(e.target.value)}
                >
                  relationship
                </Checkbox>
                <Checkbox
                  value="single"
                  onChange={(e) => column.setFilterValue(e.target.value)}
                >
                  single
                </Checkbox>
              </CheckboxGroup>
              {/* See faceted column filters example for dynamic select options */}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Filters;
