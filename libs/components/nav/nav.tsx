import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="hidden space-x-4 text-2xl font-semibold lg:flex">
      <Link
        to="/"
        className="flex h-24 w-28 items-center justify-center  bg-blue-500 hover:bg-blue-800"
      >
        Home
      </Link>
      <Link
        to="/Forecast"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        Forecast
      </Link>
      <Link
        to="/Alerts"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        Alerts
      </Link>
      <Link
        to="/News"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        News
      </Link>
      <Link
        to="/Aboutus"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        About Us
      </Link>
    </nav>
  );
};
export default Nav;
