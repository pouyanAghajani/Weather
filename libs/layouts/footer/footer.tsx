import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import imgfoo from '../../assets/image/imgfoo.webp';
import imgfoocenter from '../../assets/image/imgfoocenter.webp';

const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-5 bg-blue-600 py-10 text-white">
      <div className="flex size-80 items-center justify-center ">
        <div className=" flex flex-col items-center pl-2">
          <div>Phone : +77 217 8850</div>
          <div>Email : weatherNews7000@email.com</div>
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div>FAQ - Frequently Asked Questions</div>
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
