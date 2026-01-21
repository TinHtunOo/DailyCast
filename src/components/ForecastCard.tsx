import type { ForecastItem } from "../types/weather";

interface ForecastCardProps {
  item: ForecastItem;
}

export const ForecastCard = ({ item }: ForecastCardProps) => {
  const date = new Date(item.dt * 1000).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const condition = item.weather[0];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-200">
      <p className="font-medium text-gray-800 mb-2">{date}</p>

      <img
        className="mx-auto mb-2"
        src={`https://openweathermap.org/img/wn/${condition.icon}.png`}
        alt={condition.description}
      />

      <p className="text-sm capitalize text-gray-700 mb-2">
        {condition.description}
      </p>

      <p className="text-lg font-semibold text-gray-900">
        {Math.round(item.main.temp_max)}° / {Math.round(item.main.temp_min)}°
      </p>
    </div>
  );
};
