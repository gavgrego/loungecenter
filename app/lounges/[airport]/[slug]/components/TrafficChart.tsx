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
import { Chip } from "@nextui-org/react";
import { Broadcast } from "@phosphor-icons/react/dist/ssr";

import { ChartData } from "../page";

type TrafficChartProps = {
  chartData: ChartData;
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: any[];
  label?: string;
};
const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const busyness =
      payload[0].payload.average > payload[0].payload.live ? "less" : "more";

    return (
      <div className="custom-tooltip max-w-[250px] dark:bg-black dark:text-white p-2 rounded light light:bg-white light:text-black">
        {payload[0].payload.live > 0 && (
          <div className="flex flex-col gap-2 mt-4 mb-8">
            <Chip
              className="animate-bounce"
              color="danger"
              startContent={<Broadcast size={18} />}
            >
              LIVE!
            </Chip>
            <p className="label">{`This lounge is currently ${payload[0].payload.live}/100 in busyness at around ${label} local time.  It is ${busyness} busy than normal right now.`}</p>
          </div>
        )}
        <p className="label text-sm">{`⏱️ This lounge is typically an estimated ${payload[0].payload.average}/100 busyness at around ${label} local time.`}</p>
      </div>
    );
  }

  return null;
};

const TrafficChart = ({ chartData }: TrafficChartProps) => {
  return (
    <ResponsiveContainer height={300} width="100%">
      <ComposedChart
        data={chartData}
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
