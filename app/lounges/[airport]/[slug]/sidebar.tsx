"use client";

import {
  Accordion,
  AccordionItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import Hours from "./components/Hours";

import { Lounge } from "@/data/api/documentation";
import { GooglePlace } from "@/types/googlePlaces/types";

type LoungeSidebarProps = {
  loungeData: Lounge;
  placeDetails: GooglePlace;
};

const LoungeSidebar = ({ loungeData, placeDetails }: LoungeSidebarProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-medium">📍&nbsp;{placeDetails.formattedAddress}</div>
      <Accordion className="p-0" defaultExpandedKeys={["1"]}>
        <AccordionItem
          key={1}
          aria-label="Open Hours"
          title={<Hours open={placeDetails.currentOpeningHours.openNow} />}
        >
          <Table hideHeader isStriped>
            <TableHeader>
              <TableColumn>Weekly Hours</TableColumn>
            </TableHeader>
            <TableBody>
              {placeDetails.currentOpeningHours.weekdayDescriptions.map(
                (day) => {
                  return (
                    <TableRow key={day} className="mb-2">
                      <TableCell className="font-semibold">{day}</TableCell>
                    </TableRow>
                  );
                },
              )}
            </TableBody>
          </Table>
        </AccordionItem>
      </Accordion>
      {/* hours table */}
      <h2>Access With:</h2>
      {/* access table */}
      <h2>How Busy</h2>
      <h2>Overall Rating:</h2>
      <div className="flex flex-row font-bold text-xl">
        <span className="text-yellow-400">{placeDetails.rating}</span>
        &nbsp;/&nbsp;5
      </div>
    </div>
  );
};

export default LoungeSidebar;
