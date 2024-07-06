"use client";

import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  YAxis,
} from "recharts";

import { ChartData } from "../page";

type TrafficChartProps = {
  chartData: ChartData;
};

const TrafficChart = ({ chartData }: TrafficChartProps) => {
  return (
    <ResponsiveContainer height={300} width="100%">
      <BarChart
        data={chartData}
        height={300}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
        width={500}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TrafficChart;
