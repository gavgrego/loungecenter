"use client";

import { Lounge } from "@/data/api/documentation";
import { GooglePlace } from "@/types/googlePlaces/types";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FC } from "react";
import Hours from "./components/Hours";

type LoungeSidebarProps = {
  loungeData: Lounge;
  placeDetails: GooglePlace
}



const LoungeSidebar = ({ loungeData, placeDetails }: LoungeSidebarProps) => {


  return (
    <div>
      <Accordion>
        <AccordionItem aria-label="Open Hours" title={<Hours open={placeDetails.currentOpeningHours.openNow} />}>
          {placeDetails.currentOpeningHours.weekdayDescriptions.map((day, index) => {
            return (
              <div key={day} className="mb-2">
                <h3 className="font-semibold">{day}</h3>
              </div>
            );
          })}

        </AccordionItem>
      </Accordion>
      {/* hours table */}
      <h2>Access With:</h2>
      {/* access table */}
      <h2>How Busy</h2>

      <h2>Overall Rating:</h2>
      {placeDetails.rating} /5

    </div >
  );
};

export default LoungeSidebar;
