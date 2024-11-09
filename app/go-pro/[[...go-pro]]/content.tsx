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
import { dummyTrafficChartData } from "@/data/dummy";
import AllLoungesTable from "@/app/lounges/components/AllLoungesTable";
import { LoungeResponseDataObject } from "@/data/api/documentation";

type GoProContentProps = {
  lounges: LoungeResponseDataObject[] | null;
  airportCodes: string[];
};

const GoProContent = ({ lounges, airportCodes }: GoProContentProps) => {
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
            <TableCell>Save and view lounges by access method</TableCell>
            <TableCell>❌</TableCell>
            <TableCell>✅</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Advanced filtering and additional columns on tables
            </TableCell>
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
      <h2 className="my-4">Live and Historical Foot Traffic Data!</h2>
      <p className="mb-2">
        With a Pro membership you have live foot traffic data available for most
        lounges. See how busy lounges are before you trek through the terminal!
        Each lounge page will show the average foot traffic for the current time
        of day, as well as the live foot traffic data.
      </p>
      <h3 className="text-xs font-regular italic mb-4">* Dummy data</h3>
      <TrafficChart
        trafficData={{
          analysis: {
            day_raw: [],
          },
          epoch_analysis: 3,
          forecast_updated_on: "",
          status: "",
          venue_info: {
            venue_address: "",
            venue_address_list: [],
            venue_dwell_time_avg: 0,
            venue_dwell_time_max: 0,
            venue_dwell_time_min: 0,
            venue_id: "",
            venue_lat: 0,
            venue_lon: 0,
            venue_name: "",
            venue_timezone: "",
            venue_type: "",
            venue_types: [],
          },
          window: {
            day_window: "",
            day_window_end_int: 0,
            day_window_end_txt: "",
            day_window_start_int: 0,
            day_window_start_txt: "",
            time_window_end: 4,
            time_window_end_12h: "",
            time_window_end_ix: 0,
            time_window_start: 0,
            time_window_start_12h: "",
            time_window_start_ix: 0,
          },
        }}
        liveTrafficData={{}}
        placeDetails={{}}
      />
      <Divider />
      <div className="my-4">
        <h2 className="my-4">Save Your Card and Alliance Status!</h2>
        <p className="mb-2">
          Save your credit cards/alliance status/Priority Pass membership and
          automatically see if you have access to a lounge.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-between ">
          <div className="flex flex-col gap-6 md:basis-2/3">
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
              fare class/airline, and airline alliance status are also included
              with a Pro membership.
            </p>
          </div>
          <div className="md:basis-1/3">
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
              <CardFooter className="text-sm text-center">
                Immediately know if you have access to a lounge based on your
                saved access methods, signified on every lounge&apos;s detail
                page and preview card with this badge.
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Divider className="my-6" />
      <div>
        <h2 className="my-4">Additional Advanced Columns</h2>
        <p className="mb-2">
          Additional columns are available to help you find the perfect lounge.
          Currently including whether or not you have access, as well as if the
          lounge is open. More columns are coming soon!
        </p>
        <AllLoungesTable
          lounges={lounges as LoungeResponseDataObject[]}
          // this is fugly, but need to spoof this to get the table to work, not worth refactoring simply for this
          sessionClaims={{
            __raw: "",
            iss: "",
            sub: "",
            sid: "",
            nbf: 0,
            userEmail: "test@lounge.center",
            iat: 0,
            exp: 0,
            unsafeMetadata: {
              cardSelections: [],
              // @ts-ignore
              alliances: ["oneworld-emerald"],
              hasPriorityPass: false,
            },
            publicMetadata: {
              stripeCustomerId: "",
            },
          }}
          currentAirportCodes={airportCodes}
        />
      </div>
      <Divider className="my-6" />
      <div>
        <h3>FAQ</h3>
        <Accordion selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="What's the difference between LoungeCenter and other online airline lounge resources?"
            title="❓ What's the difference between LoungeCenter and other online airline lounge resources?"
          >
            <p className="">
              LoungeCenter provides a more intuitive, full-featured way to get
              critical lounge information. Our data is automatically sourced and
              updated from reliable and up-to-date data sources, ensuring the
              most accurate info across the board.
            </p>
            <p className="">
              In addition to providing basic information like hours and general
              info, a LoungeCenter Pro Membership also offers real-time foot
              traffic data, robust filtering, the ability to easily see all
              lounges you have access to, a community of passionate Pro members
              who share exclusive info and lounge tips, and more.
            </p>
            <p className="mt-2">
              Other lounge resources are also incentivized to promote certain
              lounges by selling lounge day passes, while LoungeCenter is
              completely unbiased and community-driven.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="What's the point of paying for a Pro membership when general airline lounge information is already out there for free?"
            title="❓ What's the point of paying for a Pro membership when general airline lounge information is already out there for free?"
          >
            <p className="font-semibold">
              While LoungeCenter&apos;s core functionality and data will always
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
