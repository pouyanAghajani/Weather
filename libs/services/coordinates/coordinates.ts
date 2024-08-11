import type { WeatherData, WeatherDetails } from '@types';
import axios from 'axios';

const coordinates = async (
  city: string | undefined,
): Promise<WeatherDetails[] | undefined> => {
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
    const list: WeatherData[] = data.list;
    const arr: WeatherDetails[] = [];
    console.log(data);
    console.log(list);
    list.map((_, index) => {
      const firstItem: WeatherData = list[index];
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
      const id = firstItem.dt;
      arr.push({
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
        cityName,
        country,
        id,
      });
      return arr;
    });

    return arr;
  } catch (error) {
    console.error('Error fetching the weather data:', error);
    return undefined;
  }
};

export default coordinates;
