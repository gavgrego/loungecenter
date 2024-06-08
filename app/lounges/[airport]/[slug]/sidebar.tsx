"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

const LoungeSidebar = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem aria-label="Open Hours" title="Open Hours">
          <div></div>
        </AccordionItem>
      </Accordion>
      {/* hours table */}
      <h2>Access With:</h2>
      {/* access table */}
      <h2>How Busy</h2>
    </div>
  );
};

export default LoungeSidebar;
