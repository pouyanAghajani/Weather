import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Searchbar: React.FC = () => {
  const navigate = useNavigate();

  function searchFn(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const id = (document.getElementById('inputEl') as HTMLInputElement).value;
      navigate(`/searching/${id}`);
      console.log();
    }
  }

  return (
    <div className="hidden items-center space-x-2 2xl:flex">
      <input
        type="text"
        onKeyDown={event => searchFn(event)}
        id="inputEl"
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
