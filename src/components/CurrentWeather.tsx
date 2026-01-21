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
            <h2 className="sm:text-3xl font-semibold text-gray-800 sm:mb-2 mb-0 text-xl">
              {data.name}
            </h2>
            <p className="text-lg capitalize text-gray-600 hidden sm:block">
              {condition.description}
            </p>
          </div>
          <p className="sm:text-4xl sm:font-bold font-medium text-gray-900 text-8xl my-2">
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
          className="w-60 h-60 hidden sm:block"
        />
      </div>

      {/* <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="bg-gray-50 rounded p-3">
          <p className="font-medium text-gray-700">Feels like</p>
          <p className="text-lg font-semibold">
            {Math.round(data.main.feels_like)}°{unit === "metric" ? "C" : "F"}
          </p>
        </div>
        <div className="bg-gray-50 rounded p-3">
          <p className="font-medium text-gray-700">Humidity</p>
          <p className="text-lg font-semibold">{data.main.humidity}%</p>
        </div>
        <div className="bg-gray-50 rounded p-3">
          <p className="font-medium text-gray-700">Wind Speed</p>
          <p className="text-lg font-semibold">{data.wind.speed} m/s</p>
        </div>
      </div> */}
    </div>
  );
};
