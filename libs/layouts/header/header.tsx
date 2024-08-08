import { Logo } from '@libs/assets';
import { Nav, SearchBar, SocialMedia } from '@libs/components';
import { FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container flex items-center justify-between lg:mx-auto lg:px-6 ">
        <Logo />
        <Nav />
        <SearchBar />
        <SocialMedia />
        <FaBars className="absolute right-1 size-20 lg:hidden" />
      </div>
    </header>
  );
};
export default Header;
