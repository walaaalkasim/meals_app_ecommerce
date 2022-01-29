import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <BiCopyright className="copy" />

      <p>{date} Walaa Alkasim</p>
    </footer>
  );
};

export default Footer;
