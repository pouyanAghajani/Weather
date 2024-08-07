import { FaSearch } from 'react-icons/fa';

const Searchbar: React.FC = () => {
  return (
    <div className="hidden items-center space-x-2 md:flex">
      <input
        type="text"
        placeholder="جستجوی مکان"
        className="rounded-lg border-2 border-white bg-blue-500 px-3 py-1 text-white focus:outline-none"
      />
      <button>
        <FaSearch />
      </button>
    </div>
  );
};
export default Searchbar;
