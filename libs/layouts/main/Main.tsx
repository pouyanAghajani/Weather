import { NotFound } from '@data/errors';
import { Card } from '@libs/components';
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

  return datas ? (
    <div className=" my-10 flex flex-wrap items-center justify-center gap-2">
      {datas.map(data => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  ) : (
    <NotFound />
  );
};
export default Main;
