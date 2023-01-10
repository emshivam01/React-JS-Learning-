import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex justify-around text-2xl p-2">
        <div>Logo Here</div>
        <ul className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </ul>

        <ul className="flex gap-6">
          <NavLink to="">Shop</NavLink>
          <NavLink to="">Sign in</NavLink>
          <NavLink to="">Menu</NavLink>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
