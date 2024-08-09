import { FaSearch } from 'react-icons/fa';

const Searchbar: React.FC = () => {
  return (
    <div className="hidden items-center space-x-2 2xl:flex">
      <input
        type="text"
        placeholder="Location Search"
        className="rounded-lg border-2 border-white bg-blue-500 px-3 py-1 pt-2 text-white placeholder:text-white focus:bg-blue-800 focus:outline-none"
      />
      <button>
        <FaSearch className="size-5" />
      </button>
    </div>
  );
};
export default Searchbar;
