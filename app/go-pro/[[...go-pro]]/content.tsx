"use client";

import {
  Accordion,
  AccordionItem,
  Card,
  CardFooter,
  Checkbox,
  CheckboxGroup,
  Divider,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";

import TrafficChart from "@/app/lounges/[airport]/[slug]/components/TrafficChart";

const dummyTrafficChartData = [
  {
    name: "6:00",
    average: 20,
    live: 0,
  },
  {
    name: "7:00",
    average: 35,
    live: 0,
  },
  {
    name: "8:00",
    average: 45,
    live: 0,
  },
  {
    name: "9:00",
    average: 45,
    live: 0,
  },
  {
    name: "10:00",
    average: 45,
    live: 95,
  },
  {
    name: "11:00",
    average: 55,
    live: 0,
  },
  {
    name: "12:00",
    average: 70,
    live: 0,
  },
  {
    name: "13:00",
    average: 100,
    live: 0,
  },
  {
    name: "14:00",
    average: 75,
    live: 0,
  },
  {
    name: "15:00",
    average: 50,
    live: 0,
  },
  {
    name: "16:00",
    average: 40,
    live: 0,
  },
  {
    name: "17:00",
    average: 50,
    live: 0,
  },
  {
    name: "18:00",
    average: 55,
    live: 0,
  },
  {
    name: "19:00",
    average: 60,
    live: 0,
  },
  {
    name: "20:00",
    average: 75,
    live: 0,
  },
  {
    name: "21:00",
    average: 50,
    live: 0,
  },
];

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
            <TableCell>Remove Ads</TableCell>
            <TableCell>❌</TableCell>
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
      {/* TODO: Add Lounge Card Example */}
      <h2 className="my-4">Live and Historical Foot Traffic Data!</h2>
      <p className="mb-2">
        With a Pro membership you have live foot traffic data available for most
        lounges. See how busy lounges are before you trek through the terminal!
      </p>
      <h3 className="text-xs font-regular italic mb-4">
        * Live data from the Amex Centurion Lounge at SFO
      </h3>
      <TrafficChart chartData={dummyTrafficChartData} />
      <Divider />
      <div className="my-4">
        <h2 className="my-4">Save Your Card and Alliance Status!</h2>
        <p className="mb-2">
          Save your credit cards/alliance status/Priority Pass membership and
          automatically see if you have access to a lounge.
        </p>
        <div className="flex flex-row gap-8 justify-between ">
          <div className="flex flex-col gap-6 basis-2/3">
            <CheckboxGroup
              color="secondary"
              label="Select credit cards you have to save them to your profile:"
            >
              <Checkbox value="Capital One Venture X">
                Capital One Venture X
              </Checkbox>
              <Checkbox value="American Express Platinum">
                American Express Platinum
              </Checkbox>
              <Checkbox value="United Club Infinite">
                United Club Infinite
              </Checkbox>
              <Checkbox value="Delta Skymiles Reserve">
                Delta Skymiles Reserve
              </Checkbox>
            </CheckboxGroup>
            <Switch color="secondary">Do you have Priority Pass?</Switch>
            <p>
              ❗ This is just a preview of access methods. Lounge memberships,
              fare class/airline, and airline alliance status are also
              included...
            </p>
          </div>
          <div className="basis-1/3">
            <Card
              isBlurred
              className="flex flex-col gap-2 items-center px-1 pb-1 pt-3"
            >
              <Tooltip
                closeDelay={100}
                content="You have access to this lounge!"
              >
                <SealCheck color="green" size={60} weight="fill" />
              </Tooltip>
              <CardFooter className="text-sm italic">
                Immediately know if you have access to a lounge based on your
                saved access methods, signified on every lounge&apos;s detail
                page and preview card.
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Divider className="my-4" />
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
