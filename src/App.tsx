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
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="   sm:p-6 p-2">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-center mb-6 text-slate-100">
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
            <div className="mt-6 text-center border-red-400 text-red-500 px-4 py-3 ">
              {error}
            </div>
          )}
          <div className="lg:flex gap-5 ">
            <div className="lg:max-w-2xl">
              {current && <CurrentWeather data={current} unit={unit} />}
              {forecast && <Hourly24Forecast items={forecast.list} />}
            </div>

            {forecast && <ForecastList data={forecast} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
