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
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        5-Day Forecast
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {dailyForecast.map((item) => (
          <ForecastCard key={item.dt} item={item} />
        ))}
      </div>
    </div>
  );
};
