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
import { AirportResponseDataObject } from "@/data/api/documentation";

type FiltersProps<T> = {
  table: Table<T>;
  selectedCountries: string[];
  availableCountries?: string[];
  onCountrySelection: (country: string, isSelected: boolean) => void;
};

const Filters = ({
  table,
  selectedCountries,
  availableCountries,
  onCountrySelection,
}: FiltersProps<AirportResponseDataObject>) => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Button color="secondary" className="cursor-pointer">
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <div className="flex flex-row gap-6">
          <CheckboxGroup
            label="Countries"
            value={selectedCountries}
            onValueChange={(value) => {
              const newValue = value as string[];

              selectedCountries.forEach((country) => {
                if (!newValue.includes(country)) {
                  onCountrySelection(country, false);
                }
              });
              newValue.forEach((country) => {
                if (!selectedCountries.includes(country)) {
                  onCountrySelection(country, true);
                }
              });
            }}
          >
            {availableCountries?.map((country) => (
              <Checkbox key={country} value={country}>
                {country}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Filters;
