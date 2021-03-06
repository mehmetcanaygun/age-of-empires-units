import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        <img src="./assets/logo.png" alt="Logo" />
        <span>Age of Empires Units</span>
      </a>
      <nav className="navbar-nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/units"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Units
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
