import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { toggleTheme } from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const { numItemsInCart } = useSelector((state) => state.cartState);
  const { theme } = useSelector((state) => state.userState);
  const isDarkTheme = theme === "dracula";
  const dispatch = useDispatch();
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="w-6 h-6" />
            </label>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
              navlinks
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={() => dispatch(toggleTheme())}
              defaultChecked={isDarkTheme}
            />

            {/* sun icon */}
            <BsSunFill className="swap-on h-4 w-4" />

            {/* moon icon */}
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
