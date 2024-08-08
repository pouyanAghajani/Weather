const Nav: React.FC = () => {
  return (
    <nav className="hidden space-x-4 text-2xl font-semibold lg:flex">
      <a
        href="/"
        className="flex h-24 w-28 items-center justify-center  bg-blue-500 hover:bg-blue-800"
      >
        خانه
      </a>
      <a
        href="/forecast"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        پیش‌بینی
      </a>
      <a
        href="/alerts"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        هشدارها
      </a>
      <a
        href="/news"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        اخبار
      </a>
      <a
        href="/about"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:bg-blue-800"
      >
        درباره‌ما
      </a>
    </nav>
  );
};
export default Nav;
