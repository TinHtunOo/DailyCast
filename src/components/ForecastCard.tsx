import type { ForecastItem } from "../types/weather";

interface ForecastCardProps {
  item: ForecastItem;
  index: number;
}

export const ForecastCard = ({ item, index }: ForecastCardProps) => {
  const date = new Date(item.dt * 1000).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const condition = item.weather[0];

  return (
    <div
      className={` flex items-center justify-between p-4 text-center ${index === 4 ? "" : "border-b-2 border-b-slate-700"}  `}
    >
      <p className="font-medium text-slate-300">
        {index === 0 ? "Today" : date.slice(0, 3)}
      </p>

      <div className="flex items-center">
        <img
          className="mx-auto "
          src={`https://openweathermap.org/img/wn/${condition.icon}.png`}
          alt={condition.description}
        />

        <p className="text-xs capitalize text-slate-500 ">
          {condition.description}
        </p>
      </div>

      <p className="text-sm font-semibold text-slate-50">
        {Math.round(item.main.temp_max)}° / {Math.round(item.main.temp_min)}°
      </p>
    </div>
  );
};
