const Nav: React.FC = () => {
  return (
    <nav className="hidden space-x-4 text-2xl font-semibold lg:flex">
      <a
        href="/"
        className="flex h-24 w-28 items-center justify-center  bg-blue-500 hover:bg-blue-800"
      >
        Home
      </a>
      <a
        href="/forecast"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        Forecast
      </a>
      <a
        href="/alerts"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        Alerts
      </a>
      <a
        href="/news"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        News
      </a>
      <a
        href="/about"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        About Us
      </a>
    </nav>
  );
};
export default Nav;
