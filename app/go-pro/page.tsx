"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

const GoProPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="md:basis-2/3">
        <h1 className="mb-8">LoungeVault Pro Membership</h1>
        <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="What's the difference between LoungeVault and other online airline lounge resources?"
            title="❓ What's the difference between LoungeVault and other online airline lounge resources?"
          >
            <p className="">
              LoungeVault provides a more intuitive, full-featured way to get
              critical lounge information. Our data is automatically sourced and
              updated from reliable sources like Google and live foot traffic
              data, ensuring the most accurate and up-to-date info across the
              board.
            </p>
            <p className="">
              In addition to providing basic information like hours and general
              info, LoungeVault also offers real-time foot traffic data, robust
              filtering, and a community of passionate Pro members who share
              exclusive info.
            </p>
            <p className="mt-2">
              Other lounge resources are also incentivized to promote certain
              lounges by selling lounge day passes, while LoungeVault is
              completely unbiased and community-driven.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="What's the point of paying for a Pro membership when general airline lounge information is already out there for free?"
            title="❓ What's the point of paying for a Pro membership when general airline lounge information is already out there for free?"
          >
            <p className="font-semibold">
              While LoungeVault&apos;s core functionality and data will always
              be free, Pro members get access to additional features and
              benefits such as:
            </p>
            <ul className="list-disc [&>li]:mx-6 [&>li]:my-3">
              <li>
                Filtering by method of access, including credit cards, Priority
                Pass, and fare class.
              </li>
              <li>
                The ability to immediately see if you have access to a lounge
                based on a credit card or Priority Pass, clearly denoted on a
                lounge&apos;s detail page or preview card.
              </li>
              <li>
                The ability to see how busy a lounge is before you make the
                trek, thanks to our real-time foot traffic data.
              </li>
              <li>
                Pro channels in Discord hosting a myriad of exclusive real-time
                info and lounge tips.
              </li>
              <li>
                🤖 <strong>COMING SOON:</strong> Access to our AI chatbot,
                providing instantaneous lounge information.
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
