"use client";

import {
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ComposedChart,
  Area,
  Bar,
} from "recharts";

import { ChartData } from "../page";

type TrafficChartProps = {
  chartData: ChartData;
};

const TrafficChart = ({ chartData }: TrafficChartProps) => {
  return (
    <ResponsiveContainer height={300} width="100%">
      <ComposedChart
        data={chartData}
        height={300}
        margin={{
          top: 0,
          right: 20,
          left: 20,
          bottom: 0,
        }}
        width={500}
      >
        <XAxis
          allowDuplicatedCategory={false}
          dataKey="name"
          interval={0}
          tick={{ fontSize: ".8rem" }}
        />

        {/* <YAxis dataKey="value" /> */}
        <YAxis dataKey="live" domain={[0, 100]} />

        <Tooltip />
        <Area dataKey="value" fill="#8884d8" />
        <Bar dataKey="live" fill="#83d422" opacity={0.75} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default TrafficChart;
