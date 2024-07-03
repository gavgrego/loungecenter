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

const GoProContent = () => {
  return (
    <>
      <Table isStriped className="my-6">
        <TableHeader>
          <TableColumn>Benefit</TableColumn>
          <TableColumn className="text-sm">Free</TableColumn>
          <TableColumn className="text-sm">Pro</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Basic lounge information</TableCell>
            <TableCell>✅</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Real-time foot traffic data</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Advanced filtering</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Save and view lounges by access method</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              See which lounges have day passes for purchase
            </TableCell>
            <TableCell>❌</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Save and view what lounges you&apos;ve visited
            </TableCell>
            <TableCell>❌</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Pro Discord channels</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              AI chatbot <em className="text-xs">(Coming Soon!)</em>
            </TableCell>
            <TableCell>❌</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div>
        <h3>FAQ</h3>
        <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="What's the difference between LoungeVault and other online airline lounge resources?"
            title="❓ What's the difference between LoungeVault and other online airline lounge resources?"
          >
            <p className="">
              LoungeVault provides a more intuitive, full-featured way to get
              critical lounge information. Our data is automatically sourced and
              updated from reliable and up-to-date data sources, ensuring the
              most accurate info across the board.
            </p>
            <p className="">
              In addition to providing basic information like hours and general
              info, a LoungeVault Pro Membership also offers real-time foot
              traffic data, robust filtering, the ability to easily see all
              lounges you have access to, a community of passionate Pro members
              who share exclusive info and lounge tips, and more.
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
                Filtering by method of access including by credit card, airline
                alliance status, Priority Pass, and fare class.
              </li>
              <li>
                The ability to immediately see if you have access to a lounge
                based on your saved access methods (cards, airline status,
                Priority Pass, etc), clearly denoted on a lounge&apos;s detail
                page or preview card.
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
    </>
  );
};

export default GoProContent;
