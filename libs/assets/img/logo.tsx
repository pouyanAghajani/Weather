import logo from './logo.png';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={logo}
        alt="Logo"
        className="mt-1 inline-block size-20 object-cover"
      />
      <h1 className="text-3xl font-bold">WeatherApp</h1>
    </div>
  );
};
export default Logo;
