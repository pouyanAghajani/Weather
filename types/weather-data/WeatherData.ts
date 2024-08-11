interface WeatherData {
  clouds: {
    all: number;
  };
  dt_txt: string;
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
}
export default WeatherData;
