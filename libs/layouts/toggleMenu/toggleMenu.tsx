import { Link } from 'react-router-dom';

interface ToggleMenuProps {
  flag: boolean;
  onclick: () => void;
}

const ToggleMenu: React.FC<ToggleMenuProps> = ({ flag, onclick }) => {
  return (
    <div
      className={`${flag ? 'flex flex-col justify-center gap-5' : 'hidden'} absolute top-0 flex h-screen w-full bg-red-600/40 pt-20 text-9xl font-semibold text-white/75`}
    >
      <Link
        onClick={() => {
          onclick();
        }}
        to="/"
        className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600 hover:bg-blue-800"
      >
        Home
      </Link>
      <Link
        onClick={() => {
          onclick();
        }}
        to="/Forecast"
        className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600  hover:bg-blue-800"
      >
        Forecast
      </Link>
      <Link
        onClick={() => {
          onclick();
        }}
        to="/Alerts"
        className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600  hover:bg-blue-800"
      >
        Alerts
      </Link>
      <Link
        onClick={() => {
          onclick();
        }}
        to="/News"
        className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600  hover:bg-blue-800"
      >
        News
      </Link>
      <Link
        onClick={() => {
          onclick();
        }}
        to="/Aboutus"
        className="flex h-40 items-center justify-center bg-white/60 pt-5 text-blue-600  hover:bg-blue-800"
      >
        About Us
      </Link>
    </div>
  );
};
export default ToggleMenu;
