import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>{" "}
      <NavLink
        to="settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Settings
      </NavLink>{" "}
      <NavLink
        to="profile"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Navbar;
