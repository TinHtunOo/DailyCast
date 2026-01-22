import { Droplet, Thermometer, Wind } from "lucide-react";
import type { CurrentWeather as Cu_Weather } from "../types/weather";

interface CurrentWeatherProps {
  data: Cu_Weather;
  unit: "metric" | "imperial";
}

export const CurrentWeather = ({ data, unit }: CurrentWeatherProps) => {
  const condition = data.weather[0];

  return (
    <div className=" rounded-lg  sm:px-6 p-3">
      <div className="flex items-center gap-6">
        <div className="flex-1">
          <div className="sm:mb-10 mb-0">
            <h2 className="sm:text-3xl font-semibold text-slate-50 sm:mb-2 mb-0 text-xl">
              {data.name}
            </h2>
            <p className="text-base capitalize text-slate-400 hidden sm:block">
              {condition.description}
            </p>
          </div>
          <p className="sm:text-4xl sm:font-bold font-medium text-slate-50 text-8xl my-2">
            {Math.round(data.main.temp)}°
            <span className="text-5xl sm:text-4xl">
              {unit === "metric" ? "C" : "F"}
            </span>
          </p>
          <p className=" capitalize text-gray-600 text-sm block sm:hidden">
            {condition.description}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${condition.icon}@2x.png`}
          alt={condition.description}
          className="w-40 h-40 hidden sm:block"
        />
      </div>

      <div className="bg-blue-500 text-slate-50 rounded-2xl mt-6 flex flex-wrap itmes-center justify-between gap-4 text-sm">
        <div className=" flex items-center gap-1.5 p-3">
          <Thermometer size={35} />
          <div>
            <p className="font-medium text-xs text-slate-300 ">Feels like</p>
            <p className="text-lg font-semibold">
              {Math.round(data.main.feels_like)}°{unit === "metric" ? "C" : "F"}
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-1.5 p-3">
          <Droplet size={35} />
          <div>
            <p className="font-medium text-xs text-slate-300">Humidity</p>
            <p className="text-lg font-semibold">{data.main.humidity}%</p>
          </div>
        </div>
        <div className=" flex items-center gap-1.5 p-3">
          <Wind size={35} />
          <div>
            <p className="font-medium text-xs text-slate-300">Wind Speed</p>
            <p className="text-lg font-semibold">{data.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};
