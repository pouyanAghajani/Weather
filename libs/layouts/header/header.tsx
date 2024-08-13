import { Logo } from '@libs/assets';
import { Nav, SearchBar, SocialMedia } from '@libs/components';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [flag, setFlag] = useState(false);

  function toggleMenu() {
    if (flag) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container flex items-center justify-between lg:mx-auto lg:px-6 ">
        <Logo />
        <Nav />
        <SearchBar />
        <SocialMedia />
        <FaBars
          className="absolute right-1 z-10 size-20 lg:hidden"
          onClick={() => toggleMenu()}
        />
      </div>
      <div
        className={`${flag ? 'flex flex-col justify-center gap-5' : 'hidden'} absolute top-0 flex h-screen w-full bg-blue-600/40 pt-20 text-9xl font-semibold text-white/75`}
      >
        <Link
          onClick={() => toggleMenu()}
          to="/"
          className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600 hover:bg-blue-800"
        >
          Home
        </Link>
        <Link
          onClick={() => toggleMenu()}
          to="/Forecast"
          className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600  hover:bg-blue-800"
        >
          Forecast
        </Link>
        <Link
          onClick={() => toggleMenu()}
          to="/Alerts"
          className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600  hover:bg-blue-800"
        >
          Alerts
        </Link>
        <Link
          onClick={() => toggleMenu()}
          to="/News"
          className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600  hover:bg-blue-800"
        >
          News
        </Link>
        <Link
          onClick={() => toggleMenu()}
          to="/Aboutus"
          className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600  hover:bg-blue-800"
        >
          About Us
        </Link>
      </div>
    </header>
  );
};
export default Header;
