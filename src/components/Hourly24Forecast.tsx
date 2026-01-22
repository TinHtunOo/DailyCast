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
      <h3 className="text-xl font-semibold mb-4 text-slate-50">
        24-hour forecast
      </h3>

      <div className="flex bg-slate-800 rounded-xl overflow-x-auto ">
        {next24Hours.map((item, index) => {
          const time = new Date(item.dt * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          const condition = item.weather[0];

          return (
            <div
              key={item.dt}
              className={`min-w-30  p-4 text-center ${index === 7 ? "" : "border-r-2 border-r-slate-700"}`}
            >
              <p className="text-sm font-medium text-slate-500 ">{time}</p>

              <img
                className="mx-auto  w-20 h-20"
                src={`https://openweathermap.org/img/wn/${condition.icon}.png`}
                alt={condition.description}
              />

              <p className="text-2xl font-semibold text-slate-200">
                {Math.round(item.main.temp_max)}°
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
