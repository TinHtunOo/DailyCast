import { useState } from "react";
import { getCurrentWeather, getForecast } from "../services/weatherApi";
import type { CurrentWeather, ForecastResponse } from "../types/weather";
const STORAGE_KEY = "lastCity";
const UNIT_KEY = "weatherUnit";

type Unit = "metric" | "imperial";
export const useWeather = () => {
  const [current, setCurrent] = useState<CurrentWeather | null>(null);
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<Unit>(
    (localStorage.getItem(UNIT_KEY) as Unit) || "metric",
  );
  const fetchWeather = async (city: string, overrideUnit?: Unit) => {
    const activeUnit = overrideUnit ?? unit;

    try {
      setLoading(true);
      setError(null);

      const [currentData, forecastData] = await Promise.all([
        getCurrentWeather(city, activeUnit),
        getForecast(city, activeUnit),
      ]);

      setCurrent(currentData);
      setForecast(forecastData);

      localStorage.setItem(STORAGE_KEY, city);
    } catch {
      setError("City not found or network error");
      setCurrent(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const loadLastCity = () => {
    const city = localStorage.getItem(STORAGE_KEY);
    if (city) {
      fetchWeather(city);
    }
  };
  const toggleUnit = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";

    setUnit(newUnit);
    localStorage.setItem(UNIT_KEY, newUnit);

    const city = localStorage.getItem(STORAGE_KEY);
    if (city) {
      fetchWeather(city, newUnit);
    }
  };

  return {
    current,
    forecast,
    loading,
    error,
    unit,
    fetchWeather,
    loadLastCity,
    toggleUnit,
  };
};
