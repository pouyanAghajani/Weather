import logo from '@libs/assets/image/logo.png';
import coordinates from '@libs/services/coordinates';
import type { CoordinatesParams, WeatherDetails } from '@types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Main: React.FC = () => {
  const [data, setData] = useState<WeatherDetails | undefined>();
  const city = useParams().id as unknown as CoordinatesParams;

  useEffect(() => {
    void coordinates(city).then(res => setData(res));
  });

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <img className="w-full" src={logo} alt="" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">
          {data?.cityName}, {data?.country}
        </div>
        <p className="text-base text-gray-700">Date: {data?.date}</p>
        <p className="text-base text-gray-700">
          Temperature: {data?.temp} °K (Feels like: {data?.feelsLike} °K)
        </p>
        <p className="text-base text-gray-700">
          Max Temp: {data?.tempMax} °K, Min Temp: {data?.tempMin} °K
        </p>
        <p className="text-base text-gray-700">Clouds: {data?.clouds}%</p>
        <p className="text-base text-gray-700">
          Visibility: {data?.visibility} m
        </p>
        <p className="text-base text-gray-700">
          Wind Speed: {data?.windSpeed} m/s, Direction: {data?.windDeg}°, Gust:{' '}
          {data?.windGust} m/s
        </p>
      </div>
    </div>
  );
};
export default Main;
