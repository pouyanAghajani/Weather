import { BiUserCircle } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SosialMedia: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FaFacebook className="hover:text-gray-300" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter className="hover:text-gray-300" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FaInstagram className="hover:text-gray-300" />
      </a>
      <BiUserCircle className="hover:text-gray-300" />
    </div>
  );
};
export default SosialMedia;
