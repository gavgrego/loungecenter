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
  Tooltip,
} from "@nextui-org/react";
import { Info } from "@phosphor-icons/react";

import Hours from "./components/Hours";

import { Lounge } from "@/data/api/documentation";
import { GooglePlace } from "@/types/googlePlaces/types";
type LoungeSidebarProps = {
  loungeData: Lounge | undefined;
  placeDetails: GooglePlace;
  userId: string | null;
};

const LoungeSidebar = ({
  loungeData,
  placeDetails,
  userId,
}: LoungeSidebarProps) => {
  const phone = placeDetails.internationalPhoneNumber
    ? placeDetails.internationalPhoneNumber
    : placeDetails.nationalPhoneNumber;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-2 items-center">
        <h3 className="text-md flex flex-row">Access With:&nbsp;</h3>
        {userId ? <div>AMEX Plat</div> : <div>VIEW W/ A PRO MEMBERSHIP</div>}
      </div>

      <div className="font-medium">📍&nbsp;{placeDetails.formattedAddress}</div>
      {phone ? (
        <Link className="font-medium" href={`tel:${phone}`}>
          ☎️&nbsp;{phone}
        </Link>
      ) : null}
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
                }
              )}
            </TableBody>
          </Table>
        </AccordionItem>
      </Accordion>
      {userId ? (
        <div>
          <h3>Estimated Busyness:</h3>
        </div>
      ) : null}
      <div className="flex flex-row gap-3 items-center">
        <div className="flex items-center flex-row gap-1">
          <Tooltip closeDelay={100} content="Live ratings from Google!">
            <Info size={20} />
          </Tooltip>
          <h3>Overall Rating:</h3>
        </div>
        <div className="flex flex-row font-bold text-xl">
          <span className="text-yellow-400">{placeDetails.rating}</span>
          &nbsp;/&nbsp;5
        </div>
      </div>
    </div>
  );
};

export default LoungeSidebar;
