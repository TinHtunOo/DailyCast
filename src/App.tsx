import { SearchBar } from "./components/SearchBar";
import { CurrentWeather } from "./components/CurrentWeather";
import { ForecastList } from "./components/ForecastList";
import { useWeather } from "./hooks/useWeather";
import { Hourly24Forecast } from "./components/Hourly24Forecast";
import { useEffect } from "react";
import { UnitToggle } from "./components/UnitToggle";

function App() {
  const {
    current,
    forecast,
    loading,
    error,
    unit,
    fetchWeather,
    loadLastCity,
    toggleUnit,
  } = useWeather();
  useEffect(() => {
    loadLastCity();
  }, []);
  console.log(current);
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white backdrop-blur-sm rounded-xl shadow-2xl sm:p-6 p-2">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
              DailyCast
            </h1>
            <div className="flex justify-center mb-4">
              <UnitToggle unit={unit} onToggle={toggleUnit} />
            </div>
          </div>

          <SearchBar onSearch={fetchWeather} />

          {loading && (
            <div className="mt-6 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}

          {error && (
            <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {current && <CurrentWeather data={current} unit={unit} />}
          {forecast && <Hourly24Forecast items={forecast.list} />}

          {forecast && <ForecastList data={forecast} />}
        </div>
      </div>
    </div>
  );
}

export default App;
