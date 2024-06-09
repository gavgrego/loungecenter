"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

const GoProPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="md:basis-2/3">
        <h1 className="mb-8">Airside Pro Membership</h1>
        <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="What's the difference between Airside and other online lounge resources?"
            title="❓ What's the difference between Airside and other online lounge resources?"
          >
            <p className="font-semibold">
              Airside provides a more intuitive, full-featured way to get
              critical lounge information.
            </p>
            <p className="font-semibold">
              In addition to providing basic information like hours and
              location, Airside also offers real-time foot traffic data, robust
              filtering, and a community of Pro members who share exclusive tips
              and tricks.
            </p>
            <p className="font-semibold mt-2">
              ❗ Other lounge resources are also incentivized to promote certain
              lounges, while Airside is completely unbiased and
              community-driven.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="What's the point of paying for a Pro membership?"
            title="❓ What's the point of paying for a Pro membership?"
          >
            <p className="font-semibold">
              While Airside&apos;s core functionality will always be free, Pro
              members get access to additional features and benefits:
            </p>
            <ul className="list-disc [&>li]:mx-6 [&>li]:my-3">
              <li>
                Filtering by method of access, including credit cards, Priority
                Pass, and ticket type.
              </li>
              <li>
                Access to our AI chatbot, which is helpful if you&apos;re in a
                rush and can&apos;t be bothered to search.
              </li>
              <li>
                Seeing how busy a lounge is before you walk 2 terminals over,
                thanks to our real-time foot traffic data.
              </li>
              <li>
                Pro channels in Discord hosting a myriad of exclusive real-time
                info and lounge tips.
              </li>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
      <aside className="md:basis-1/3">STRIPE</aside>
    </div>
  );
};

export default GoProPage;
