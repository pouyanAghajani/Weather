import { Logo } from '@libs/assets';
import { Nav, SearchBar, SocialMedia } from '@libs/components';
import ToggleMenu from '@libs/layouts/toggleMenu';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

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
      <ToggleMenu onclick={() => toggleMenu()} flag={flag} />
    </header>
  );
};
export default Header;
