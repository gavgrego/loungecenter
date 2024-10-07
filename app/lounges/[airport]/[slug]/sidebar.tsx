"use client";

import {
  Accordion,
  AccordionItem,
  Card,
  Divider,
  Image,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip
} from "@nextui-org/react";
import { Info } from "@phosphor-icons/react/dist/ssr/Info";
import { useMemo } from "react";

import Hours from "./components/Hours";

import { Lounge } from "@/data/api/documentation";
import { GooglePlace } from "@/types/googlePlaces/types";
import { ArrowSquareOut } from "@phosphor-icons/react";
import AccessMethods from "./components/AccessMethods";
type LoungeSidebarProps = {
  loungeData: Lounge | undefined;
  placeDetails: GooglePlace;
  userId: string | null;
};

const LoungeSidebar = ({
  placeDetails,
  userId,
  loungeData
}: LoungeSidebarProps) => {
  const phone = placeDetails.internationalPhoneNumber
    ? placeDetails.internationalPhoneNumber
    : placeDetails.nationalPhoneNumber;

  const cards = useMemo(() => {
    return loungeData?.cards?.data;
  }, [loungeData?.cards?.data]);

  return (
    <Card className="flex flex-col">
      <div className="flex flex-row gap-3 p-3">
        {phone ? (
          <Link color="secondary" className="font-medium" href={`tel:${phone}`}>
            ☎️&nbsp;{phone}
          </Link>
        ) : null}
        {phone && loungeData?.moreInfo ? <>/</> : null}
        {loungeData?.moreInfo ? (
          <Link
            color="secondary"
            className="font-medium"
            href={loungeData.moreInfo}
            target="_blank"
          >
            Official Information
            <ArrowSquareOut className="ml-1" size={24} />
          </Link>
        ) : null}
      </div>
      <Divider />

      <div className="flex flex-row gap-2 items-center p-3">
        {userId ? (
          <AccessMethods cards={cards} loungeData={loungeData} />
        ) : (
          <Tooltip
            closeDelay={100}
            content={
              "See how you can access this lounge and unlock this feature with a Pro Membership!"
            }
          >
            <Link color="secondary" href="/go-pro">
              🔒
            </Link>
          </Tooltip>
        )}
      </div>
      <Divider />

      {loungeData?.ambiguous_access ? (
        <div className="p-3">
          <Divider />

          <div>
            ⁉️{" "}
            <em className="text-sm">
              This lounge has peculiar access rules/methods, please double check
              before visiting!
            </em>
          </div>
        </div>
      ) : null}

      {/* don't nest ternaries */}
      <div className="p-3">
        {placeDetails.businessStatus === "CLOSED_TEMPORARILY" ? (
          <h3 className="text-red-600">
            ⛔ Unfortunately, this lounge is temporarily closed.
          </h3>
        ) : placeDetails.currentOpeningHours ? (
          <Accordion className="p-0" defaultExpandedKeys={["1"]}>
            <AccordionItem
              classNames={{
                trigger: "p-0"
              }}
              key={1}
              aria-label="Open Hours"
              title={<Hours open={placeDetails.currentOpeningHours?.openNow} />}
            >
              <Table hideHeader isStriped radius="none" shadow="none">
                <TableHeader>
                  <TableColumn>Weekly Hours</TableColumn>
                </TableHeader>
                <TableBody>
                  {placeDetails.currentOpeningHours?.weekdayDescriptions.map(
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
        ) : null}
      </div>

      <Divider />

      {placeDetails.rating ? (
        <div className="flex flex-row gap-2 items-center p-3">
          <div className="flex items-center flex-row gap-1">
            <Tooltip closeDelay={100} content="Live ratings from Google!">
              <Info size={20} />
            </Tooltip>
            <h3 className="text-medium">Overall Rating:</h3>
          </div>
          <div className="flex flex-row font-bold text-md">
            <span className="text-yellow-400">{placeDetails.rating}</span>
            &nbsp;/&nbsp;5
          </div>
        </div>
      ) : null}
    </Card>
  );
};

export default LoungeSidebar;
