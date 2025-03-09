import React, { useState } from "react";
import styles from "../style";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constant";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <div className="flex w-full py-6 justify-between items-center">
      <div className={` ${styles.flexCenter}`}>
        <img src={logo} width={150} height={150} alt="logo" />
      </div>
      <div
        className={` hidden sm:flex sm:flex-center items-center gap-10 mx-6 cursor-pointer`}
      >
        {navLinks.map((link, index) => {
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="no-underline font-poppins text-white"
            >
              {link.title}
            </a>
          );
        })}
      </div>
      <button className="sm:hidden flex object-contain" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <img src={close} alt="close-button" />
        ) : (
          <img src={menu} alt="open-button" />
        )}
      </button>
      {toggle ? (
        <div className=" absolute top-20 right-0  bg-black-gradient mx-4  p-6 rounded-2xl flex flex-col sm:hidden items-center gap-5 my-2 sidebar">
          {navLinks.map((link, index) => {
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="no-underline font-poppins text-white"
              >
                {link.title}
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
