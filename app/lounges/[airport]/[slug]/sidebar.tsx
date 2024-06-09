"use client";

import {
  Accordion,
  AccordionItem,
  Link,
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
  loungeData: Lounge | undefined;
  placeDetails: GooglePlace;
};

const LoungeSidebar = ({ loungeData, placeDetails }: LoungeSidebarProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-medium">📍&nbsp;{placeDetails.formattedAddress}</div>
      <Link
        className="font-medium"
        href={`tel:${placeDetails.internationalPhoneNumber}`}
      >
        ☎️&nbsp;{placeDetails.internationalPhoneNumber}
      </Link>

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
      <h3>Access With:</h3>
      {/* access table */}
      {/* IF PRO MEMBER */}
      <h3>How Busy</h3>
      {/*  */}
      <div className="flex flex-row gap-3 items-center">
        <h3>Overall Rating:</h3>
        <div className="flex flex-row font-bold text-xl">
          <span className="text-yellow-400">{placeDetails.rating}</span>
          &nbsp;/&nbsp;5
        </div>
      </div>
    </div>
  );
};

export default LoungeSidebar;
