import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="flex flex-row gap-6 justify-center p-6 text bg-rgb(41, 42, 42) border-b-2
     border-black"
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pastes">Paste</NavLink>
      {/* <NavLink to="/viewpaste">viewpaste</NavLink> */}
    </div>
  );
};

export default Navbar;
