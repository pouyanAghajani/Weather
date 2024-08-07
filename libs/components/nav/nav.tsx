const Nav: React.FC = () => {
  return (
    <nav className=" space-x-4 text-2xl font-semibold md:flex ">
      <a
        href="/"
        className="flex h-24 w-28 items-center justify-center  bg-blue-500 hover:underline"
      >
        خانه
      </a>
      <a
        href="/forecast"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:underline"
      >
        پیش‌بینی
      </a>
      <a
        href="/alerts"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:underline"
      >
        هشدارها
      </a>
      <a
        href="/news"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:underline"
      >
        اخبار
      </a>
      <a
        href="/about"
        className="flex h-24 w-28 items-center justify-center bg-blue-500  hover:underline"
      >
        درباره ما
      </a>
    </nav>
  );
};
export default Nav;
