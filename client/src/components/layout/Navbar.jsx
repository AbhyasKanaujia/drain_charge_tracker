import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === path
        ? "bg-indigo-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white border-b shadow-sm mb-6 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-700">Drain & Charge</h1>
        <div className="flex gap-2">
          <Link to="/" className={linkStyle("/")}>
            Log
          </Link>
          <Link to="/review" className={linkStyle("/review")}>
            Review
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
