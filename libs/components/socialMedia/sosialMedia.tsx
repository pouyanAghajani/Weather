import { BiUserCircle } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SosialMedia: React.FC = () => {
  return (
    <div className="hidden items-center space-x-4 xl:flex">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebook className="size-10 hover:text-gray-300" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter className="size-10 hover:text-gray-300" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram className="size-10 hover:text-gray-300" />
      </a>
      <BiUserCircle className="size-10 hover:text-gray-300" />
    </div>
  );
};
export default SosialMedia;
