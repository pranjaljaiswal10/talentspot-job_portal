import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">
          Talent<span className="text-rose-700">Spot</span>
        </Link>
      </h1>
      <ul className="flex gap-5 items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link to="/browse">Browse</Link>
        </li>
        <li className="bg-stone-400 rounded-sm px-2.5 py-1">
          <Link to="/login">Login</Link>{" "}
        </li>
        <li className="bg-purple-800 text-white px-2.5 py-1 rounded-sm">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
