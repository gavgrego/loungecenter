// "use client";

import { FootTraffic } from "@/types/footTraffic/types";

type TrafficChartProps = {
  trafficData: FootTraffic;
  openHour: number;
  closeHour: number;
};

const TrafficChart = ({
  trafficData,
  openHour,
  closeHour,
}: TrafficChartProps) => {
  // The endpoint returns hourly data starting at 6AM for the current day, and ending
  // at 5AM the next day.  Unfortunate, but we will just use tomorrow's 5AM hour for today
  // in order to prevent two fetches for one day, and 5AM shouldn't matter too much day-to-day
  const hoursData = trafficData.analysis.day_raw;
  const fiveAm = hoursData.pop() as number;

  // take tomorrow's 5AM data and put it at the beginning of the today
  hoursData.unshift(fiveAm);

  // get the data for the hours the lounge is open, subtracting 5 to offeset
  // for the fact that the data starts at %AM
  const openHoursData = hoursData.slice(openHour - 5, closeHour - 5);

  return (
    <div>
      {openHoursData.map((hour, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold">
              {index + openHour}:00 - {index + openHour + 1}:00
            </h3>
            <div className="w-full h-2 bg-gray-200 rounded-lg">
              <div
                className="bg-blue-500 h-2 rounded-lg"
                style={{ width: `${hour}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrafficChart;
