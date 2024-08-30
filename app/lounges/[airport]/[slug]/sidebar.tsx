"use client";

import {
  Accordion,
  AccordionItem,
  Image,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { Info } from "@phosphor-icons/react/dist/ssr/Info";
import { useMemo } from "react";

import Hours from "./components/Hours";

import PriortyPass from "@/public/priority-pass.jpg";
import { Lounge } from "@/data/api/documentation";
import { GooglePlace } from "@/types/googlePlaces/types";
type LoungeSidebarProps = {
  loungeData: Lounge | undefined;
  placeDetails: GooglePlace;
  userId: string | null;
};

const LoungeSidebar = ({
  placeDetails,
  userId,
  loungeData,
}: LoungeSidebarProps) => {
  const phone = placeDetails.internationalPhoneNumber
    ? placeDetails.internationalPhoneNumber
    : placeDetails.nationalPhoneNumber;

  const cards = useMemo(() => {
    return loungeData?.cards?.data;
  }, [loungeData?.cards?.data]);

  return (
    <div className="flex flex-col gap-3">
      <div className="font-medium">📍&nbsp;{placeDetails.formattedAddress}</div>
      {phone ? (
        <Link className="font-medium" href={`tel:${phone}`}>
          ☎️&nbsp;{phone}
        </Link>
      ) : null}
      <div className="flex flex-row gap-2 items-center">
        <h3 className="text-base flex flex-row">Access With:&nbsp;</h3>

        {userId ? (
          <>
            {cards?.map((card) => {
              return (
                <Tooltip
                  key={card.id}
                  closeDelay={100}
                  content={card.attributes?.name}
                >
                  <Image
                    height={24}
                    radius="none"
                    src={card.attributes?.icon?.data?.attributes?.url}
                    width={48}
                  />
                </Tooltip>
              );
            })}
            {loungeData?.priorityPass ? (
              <Tooltip
                closeDelay={100}
                content={"Priority Pass (double check access rules)"}
              >
                <Image
                  height={25}
                  radius="none"
                  src={PriortyPass.src}
                  width={50}
                />
              </Tooltip>
            ) : null}
          </>
        ) : (
          <Tooltip
            closeDelay={100}
            content={"Unlock this feature with a Pro Membership!"}
          >
            <Link color="secondary" href="/go-pro">
              🔒
            </Link>
          </Tooltip>
        )}
      </div>
      {loungeData?.ambiguous_access ? (
        <div>
          ⁉️{" "}
          <em className="text-sm">
            This lounge has peculiar access rules/methods, please double check
            before visiting!
          </em>
        </div>
      ) : null}

      {/* don't nest ternaries, kids */}
      {placeDetails.businessStatus === "CLOSED_TEMPORARILY" ? (
        <h3 className="text-red-600">
          ⛔ Unfortunately, this lounge is temporarily closed.
        </h3>
      ) : placeDetails.currentOpeningHours ? (
        <Accordion className="p-0" defaultExpandedKeys={["1"]}>
          <AccordionItem
            key={1}
            aria-label="Open Hours"
            title={<Hours open={placeDetails.currentOpeningHours?.openNow} />}
          >
            <Table hideHeader isStriped>
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

      {placeDetails.rating ? (
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
      ) : null}
    </div>
  );
};

export default LoungeSidebar;
