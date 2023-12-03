import { useContext } from "react";
import { NavLink } from "react-router-dom";
import MyContext from "../context/MyContext";

const Nav = () => {
  const context = useContext(MyContext);
  return (
    <>
      <nav>
        { (
          <ul>
            <NavLink
              to="/category"
              style={({ isActive }) => {
                return { color: isActive && "green" };
              }}
            >
              <li className="home-nav">Category</li>
            </NavLink>

            <NavLink
              to="/cart"
              style={({ isActive }) => {
                return { color: isActive && "green" };
              }}
            >
              <li>Cart</li>
            </NavLink>

            <NavLink
              to="/checkOut"
              style={({ isActive }) => {
                return { color: isActive && "green" };
              }}
            >
              <li>CheckOut</li>
            </NavLink>
          </ul>
        )}
      </nav>
    </>
  );
};
export default Nav;
