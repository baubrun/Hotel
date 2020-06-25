import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHotel } from "react-icons/md";
import { RiMenu5Line } from "react-icons/ri";

const NavBar = () => {
  const [showToggle, setShowToggle] = useState(false);


  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <MdHotel size={"3em"} />
          </Link>
          <button 
          className="nav-btn" 
          onClick={() => setShowToggle(!showToggle)} 
          type="button">
            <RiMenu5Line className="nav-icon" size={"3em"} />
          </button>
        </div>
        <ul className={showToggle ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
