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
import { ColAccessors } from "@/hooks/useAllLoungesTable";
import { LoungeResponseDataObject } from "@/data/api/documentation";
import { JwtPayload } from "@clerk/types";

type FiltersProps<T> = {
  table: Table<T>;
  selectedAirportCodes: string[];
  currentAirportCodes?: string[];
  onAirportCodeSelection: (code: string, isSelected: boolean) => void;
  sessionClaims: JwtPayload | null;
};

const Filters = ({
  table,
  selectedAirportCodes,
  currentAirportCodes,
  onAirportCodeSelection,
  sessionClaims,
}: FiltersProps<LoungeResponseDataObject>) => {
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
            label="Airport Codes"
            value={selectedAirportCodes}
            onValueChange={(value) => {
              const newValue = value as string[];

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
          {sessionClaims?.userEmail ? (
            <>
              <CheckboxGroup label="Have Access?">
                <Checkbox
                  onValueChange={(value) => {
                    table
                      .getColumn(ColAccessors.hasAccess)
                      ?.setFilterValue(value === true ? value : undefined);
                  }}
                >
                  Have Access?
                </Checkbox>
              </CheckboxGroup>
              <CheckboxGroup label="Open Now?">
                <Checkbox
                  onValueChange={(value) => {
                    table
                      .getColumn(ColAccessors.isOpen)
                      ?.setFilterValue(value === true ? value : undefined);
                  }}
                >
                  Open Now?
                </Checkbox>
              </CheckboxGroup>
            </>
          ) : null}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Filters;
