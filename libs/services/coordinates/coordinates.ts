import type { CoordinatesParams, WeatherDetails } from '@types';
import axios from 'axios';

const coordinates = async (
  city: CoordinatesParams,
): Promise<WeatherDetails | undefined> => {
  try {
    const API = import.meta.env.VITE_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      {
        params: {
          q: city,
          appid: API,
        },
      },
    );
    const data = response.data;
    const cityName = data.city.name;
    const country = data.city.country;
    const list = data.list;
    const firstItem = list[0];
    const clouds = firstItem.clouds.all;
    const date = firstItem.dt_txt;
    const temp = firstItem.main.temp;
    const feelsLike = firstItem.main.feels_like;
    const tempMin = firstItem.main.temp_min;
    const tempMax = firstItem.main.temp_max;
    const windSpeed = firstItem.wind.speed;
    const windDeg = firstItem.wind.deg;
    const windGust = firstItem.wind.gust;
    const visibility = firstItem.visibility;
    return {
      cityName,
      country,
      clouds,
      date,
      temp,
      feelsLike,
      tempMin,
      tempMax,
      windSpeed,
      windDeg,
      windGust,
      visibility,
    };
  } catch (error) {
    console.error('Error fetching the weather data:', error);
    return undefined;
  }
};

export default coordinates;
