"use client";

import {
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ComposedChart,
  Area,
  Bar,
  Legend,
} from "recharts";

import { ChartData } from "../page";
import CustomTooltip from "./TrafficChart/CustomTooltip";
import { FootTraffic } from "@/types/footTraffic/types";
import { GooglePlace } from "@/types/googlePlaces/types";
import dayjs from "dayjs";

type TrafficChartProps = {
  trafficData: FootTraffic;
  liveTrafficData: any;
  placeDetails: GooglePlace;
};

const TrafficChart = ({
  trafficData,
  liveTrafficData,
  placeDetails,
}: TrafficChartProps) => {
  let filteredChartData: ChartData = [];

  // dayjs starts the week on Sunday (0), but where we are sending this (TrafficChart)
  // starts the week on Monday (0), so we need to subtract 1
  // TODO: refactor all this shit, needs memoized, etc
  let dayOfWeek = dayjs().day() - 1;

  if (dayOfWeek === -1) {
    dayOfWeek = 6;
  }

  const todaysOpen =
    placeDetails.currentOpeningHours?.periods[dayOfWeek]?.open?.hour || 0;

  // The endpoint returns hourly data starting at 6AM for the current day, and ending
  // at 5AM the next day.  Unfortunate, but we will just use tomorrow's 5AM hour for today
  // in order to prevent two fetches for one day, and 5AM shouldn't matter too much day-to-day
  const hoursData = trafficData.analysis.day_raw;
  const fiveAm = hoursData.pop();

  // take tomorrow's 5AM data and put it at the beginning of the today
  hoursData.unshift(Number(fiveAm));
  const chartData: ChartData = [];

  hoursData.map((value, i) => {
    const hour = i + todaysOpen;

    // if hour is "now", fetch the live data and append it to the chartData

    if (dayjs().hour() == hour) {
      chartData.push({
        name: `${hour}:00`,
        average: value,
        live: liveTrafficData.analysis.venue_live_busyness
          ? liveTrafficData.analysis.venue_live_busyness
          : liveTrafficData.analysis.venue_forecasted_busyness,
      });
    } else {
      chartData.push({
        name: `${hour}:00`,
        average: value,
        live: 0,
      });
    }
  });

  filteredChartData = chartData.filter((hour) => hour.average !== 0);

  return (
    <ResponsiveContainer height={300} width="100%">
      <ComposedChart
        data={filteredChartData}
        height={300}
        margin={{
          top: 0,
          right: 0,
          left: 15,
          bottom: 0,
        }}
        width={500}
      >
        <XAxis
          allowDuplicatedCategory={false}
          dataKey="name"
          interval={1}
          scale="point"
          tick={{ fontSize: ".8rem" }}
          tickMargin={6}
        />

        <YAxis
          dataKey="live"
          domain={[0, 100]}
          tick={{ fontSize: ".8rem" }}
          width={15}
        />
        <Tooltip content={<CustomTooltip />} wrapperStyle={{ zIndex: 1000 }} />
        <Legend height={36} verticalAlign="bottom" />
        <Area className="-z-10" dataKey="average" fill="#8884d8" />
        <Bar className="z-50" dataKey="live" fill="#83d422" opacity={0.9} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default TrafficChart;
