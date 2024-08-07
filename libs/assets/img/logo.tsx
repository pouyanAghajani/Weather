const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="./img/logo.png"
        alt="Logo"
        className="inline-block size-10 object-cover"
      />
      <h1 className="text-2xl font-bold">WeatherApp</h1>
    </div>
  );
};
export default Logo;
