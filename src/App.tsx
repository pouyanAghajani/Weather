import { Header } from '@libs/layouts';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=08a2beb86302b68541798f9f01794613',
    )
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
