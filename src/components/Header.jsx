import React from "react";

import { Link } from "react-router-dom";
import SearchMeal from "../components/SearchMeal";
import LoginForm from "./LoginForm";
import Nav from "./Nav";
const Header = () => {
  return (
    <header>
   
      <Link to="/category">
        <h2 className="home-btn">Home</h2>
      </Link>
      {/* <LoginForm /> */}
      <Nav />
    </header>
  );
};

export default Header;
