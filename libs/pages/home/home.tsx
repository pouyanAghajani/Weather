import { Card } from '@libs/components';
import coordinates from '@libs/services/coordinates';
import type { WeatherDetails } from '@types';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [datas, setData] = useState<WeatherDetails[] | undefined>(undefined);

  useEffect(() => {
    void coordinates('tehran').then(res => setData(res));
  }, []);

  return (
    <div className=" flex flex-wrap items-center justify-center gap-2">
      {datas?.map((data, index) => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  );
};
export default Home;
