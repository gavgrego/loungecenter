"use client";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import { Table } from "@tanstack/react-table";
import { useMemo, useState } from "react";

type FiltersProps<T> = {
  table: Table<T>;
  selectedAirportCodes: string[];
  currentAirportCodes?: string[];
  onAirportCodeSelection: (code: string, isSelected: boolean) => void;
};

const Filters = ({
  table,
  selectedAirportCodes,
  currentAirportCodes,
  onAirportCodeSelection,
}: FiltersProps<LoungeResponseDataObject>) => {
  const [isOpen, setIsOpen] = useState(false);

  const columns = table
    .getAllColumns()
    .filter((column) => column.getCanFilter());

  return (
    <Dropdown isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DropdownTrigger>
        <button className="text-default-500 cursor-pointer">Filters</button>
      </DropdownTrigger>
      <DropdownMenu closeOnSelect={false}>
        <DropdownItem key="airport-codes" className="capitalize">
          <CheckboxGroup
            label="Airport Codes"
            value={selectedAirportCodes}
            onValueChange={(value) => {
              const newValue = value as string[];
              console.log(newValue);
              selectedAirportCodes.forEach((code) => {
                if (!newValue.includes(code)) {
                  onAirportCodeSelection(code, false);
                }
              });
              newValue.forEach((code) => {
                if (!selectedAirportCodes.includes(code)) {
                  onAirportCodeSelection(code, true);
                }
              });
            }}
          >
            {currentAirportCodes?.map((code) => (
              <Checkbox key={code} value={code}>
                {code}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Filters;
