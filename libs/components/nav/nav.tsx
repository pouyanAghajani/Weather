const Nav: React.FC = () => {
  return (
    <nav className="hidden space-x-4 md:flex">
      <a href="/" className="hover:underline">
        خانه
      </a>
      <a href="/forecast" className="hover:underline">
        پیش‌بینی
      </a>
      <a href="/alerts" className="hover:underline">
        هشدارها
      </a>
      <a href="/news" className="hover:underline">
        اخبار
      </a>
      <a href="/about" className="hover:underline">
        درباره ما
      </a>
    </nav>
  );
};
export default Nav;
