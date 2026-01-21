import { useMemo } from "react";
import type { ForecastItem } from "../types/weather";

interface Hourly24ForecastProps {
  items: ForecastItem[];
}

export const Hourly24Forecast = ({ items }: Hourly24ForecastProps) => {
  const now = useMemo(() => Date.now(), []);

  const next24Hours = useMemo(
    () => items.filter((item) => item.dt * 1000 > now).slice(0, 8),
    [items, now],
  ); // 8 x 3-hour blocks = 24 hours

  if (next24Hours.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Next 24 Hours
      </h3>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {next24Hours.map((item, index) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          const condition = item.weather[0];

          return (
            <div
              key={item.dt}
              className="min-w-[120px] bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <p className="text-sm font-medium text-gray-600 mb-2">
                {index === 0 ? "Now" : time}
              </p>

              <img
                className="mx-auto mb-2"
                src={`https://openweathermap.org/img/wn/${condition.icon}.png`}
                alt={condition.description}
              />

              <p className="text-sm capitalize text-gray-700 mb-1">
                {condition.main}
              </p>

              <p className="text-lg font-semibold text-gray-900">
                {Math.round(item.main.temp_max)}°
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
