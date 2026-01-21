import axios from "axios";
import type { CurrentWeather, ForecastResponse } from "../types/weather";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (
  city: string,
  unit: "metric" | "imperial",
): Promise<CurrentWeather> => {
  const response = await axios.get<CurrentWeather>(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: unit,
    },
  });
  return response.data;
};

export const getForecast = async (
  city: string,
  unit: "metric" | "imperial",
): Promise<ForecastResponse> => {
  const response = await axios.get<ForecastResponse>(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units: unit,
    },
  });
  return response.data;
};
