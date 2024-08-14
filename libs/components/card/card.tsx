import logo from '@libs/assets/image/logo.png';
import miniSun from '@libs/assets/image/miniSun.webp';
import rain from '@libs/assets/image/rain.webp';
import rain2 from '@libs/assets/image/rain2.webp';
import snow from '@libs/assets/image/snow.webp';
import sun from '@libs/assets/image/sun.webp';
import sunAndClouds from '@libs/assets/image/sunAndClouds.webp';
import type { WeatherDetails } from '@types';
import { useEffect, useState } from 'react';

interface CardProps {
  data: WeatherDetails;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [pic, setPic] = useState(logo);

  useEffect(() => {
    if (data.temp < 273.15) {
      setPic(snow);
    } else if (data.temp < 283.15) {
      setPic(rain2);
    } else if (data.temp < 293.15) {
      setPic(rain);
    } else if (data.temp < 303.15) {
      setPic(sunAndClouds);
    } else if (data.temp < 313.15) {
      setPic(miniSun);
    } else {
      setPic(sun);
    }
  }, [data.temp]);

  return (
    <div className="max-w-sm overflow-hidden rounded bg-white shadow-lg xl:w-1/3 2xl:w-1/4">
      <img className="w-full" src={pic} alt="" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">
          {data.cityName}, {data.country}
        </div>
        <p className="text-2xl font-semibold text-gray-700">
          Date: {data.date}
        </p>
        <p className="text-base text-gray-700">
          Temperature: {data.temp} °K (Feels like: {data.feelsLike} °K)
        </p>
        <p className="text-base text-gray-700">
          Max Temp: {data.tempMax} °K, Min Temp: {data.tempMin} °K
        </p>
        <p className="text-base text-gray-700">Clouds: {data.clouds}%</p>
        <p className="text-base text-gray-700">
          Visibility: {data.visibility} m
        </p>
        <p className="text-base text-gray-700">
          Wind Speed: {data.windSpeed} m/s, Direction: {data.windDeg}°, Gust:{' '}
          {data.windGust} m/s
        </p>
      </div>
    </div>
  );
};
export default Card;
