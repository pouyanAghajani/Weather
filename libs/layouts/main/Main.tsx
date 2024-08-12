import logo from '@libs/assets/image/logo.png';
import coordinates from '@libs/services/coordinates';
import type { WeatherDetails } from '@types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Main: React.FC = () => {
  const [datas, setData] = useState<WeatherDetails[] | undefined>(undefined);
  const city: string | undefined = useParams().id;

  useEffect(() => {
    void coordinates(city).then(res => setData(res));
  }, [city]);

  return (
    <div className=" flex flex-wrap items-center justify-center gap-2">
      {datas?.map((data, index) => {
        return (
          <div
            className="max-w-sm overflow-hidden rounded bg-white shadow-lg xl:w-1/3 2xl:w-1/4"
            key={data.id}
          >
            <img className="w-full" src={logo} alt="" />
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
                Wind Speed: {data.windSpeed} m/s, Direction: {data.windDeg}°,
                Gust: {data.windGust} m/s
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Main;
