import imgfoo from '@libs/assets/image/imgfoo.webp';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-5 bg-blue-600 py-10 text-white">
      <div className="flex size-80 items-center justify-center ">
        <div className=" flex flex-col items-center pl-2">
          <div>Phone : +77 217 8850</div>
          <div>Email : weatherNews7000@email.com</div>
          <Link to="/Aboutus" className="hover:cursor-pointer hover:underline">
            About Us
          </Link>
          <Link
            to="/ContactUs"
            className="hover:cursor-pointer hover:underline"
          >
            Contact Us
          </Link>
          <Link to="/Privacy" className="hover:cursor-pointer hover:underline">
            Privacy Policy
          </Link>
          <Link to="/Terms" className="hover:cursor-pointer hover:underline">
            Terms of Use
          </Link>
          <Link to="/faq" className="hover:cursor-pointer hover:underline">
            FAQ - Frequently Asked Questions
          </Link>
          <div className="flex gap-8">
            <div>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="size-10 hover:text-gray-300" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="size-10 hover:text-gray-300" />
              </a>
            </div>
            <div>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="size-10 hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden size-80 items-center md:flex">
        <img src={imgfoo} alt="Error" />
      </div>
      <div className="hidden size-80 items-center justify-center text-5xl  font-semibold lg:flex">
        soon...
      </div>
      <div className="hidden size-80 items-center justify-center text-5xl  font-semibold xl:flex ">
        soon...
      </div>
    </div>
  );
};
export default Footer;
