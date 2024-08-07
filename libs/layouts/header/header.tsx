import { Logo } from '@libs/assets';
import { Nav, SearchBar, SocialMedia } from '@libs/components';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Logo />
        <Nav />
        <SearchBar />
        <SocialMedia />
      </div>
    </header>
  );
};
export default Header;
