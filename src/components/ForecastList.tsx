import type { ForecastResponse, ForecastItem } from "../types/weather";
import { ForecastCard } from "./ForecastCard";

interface ForecastListProps {
  data: ForecastResponse;
}

export const ForecastList = ({ data }: ForecastListProps) => {
  const dailyForecast: ForecastItem[] = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  return (
    <div className="mt-6 bg-slate-800 flex-1 p-4 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4 text-slate-50">
        5-day forecast
      </h3>

      <div className="flex flex-col ">
        {dailyForecast.map((item, index) => (
          <ForecastCard key={item.dt} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};
