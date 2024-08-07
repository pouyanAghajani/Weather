import { Header } from '@libs/layouts';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=tehran&appid={key}',
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
