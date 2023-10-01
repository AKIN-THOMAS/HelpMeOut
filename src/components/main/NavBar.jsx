import React, { useState } from "react";
import { Link } from "react-router-dom";
import helpmeout from "../../assets/helpmeout-logo.svg";
import { BsListNested } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const navLinks = [
    {
      name: "Features",
      path: "",
    },
    {
      name: "How It Works",
      path: "",
    },
  ];
  const renderLinks = navLinks.map((value, index) => {
    return (
      <ul>
        <li>
          <Link to={value.path} key={index}>
            {value.name}
          </Link>
        </li>
      </ul>
    );
  });
  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">
            <Link to={"/"}>
              <img src={helpmeout} alt="Logo" />
            </Link>
          </div>

          <div className={`navbar2 ${showMenu ? "open" : ""}`}>
            <div className="navlinks">{renderLinks}</div>

            <Link to={"/login"}>
              <div className="get-btn">
                <button>Get Started</button>
              </div>
            </Link>
          </div>
        </div>
      </header>
      {showMenu ? (
        <>
          <button
            onClick={toggleMenu}
            className="menu-close"
            style={{ background: "#fff" }}
          >
            <CgClose style={{ background: "#fff" }} />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={toggleMenu}
            className="menu-open"
            style={{ background: "#fff" }}
          >
            <BsListNested style={{ background: "#fff" }} />
          </button>
        </>
      )}
    </>
  );
};

export default NavBar;
