"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import { Table } from "@tanstack/react-table";
import { useState } from "react";

import { LoungeResponseDataObject } from "@/data/api/documentation";

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
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="secondary" className="cursor-pointer">
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
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
      </PopoverContent>
    </Popover>
  );
};

export default Filters;
