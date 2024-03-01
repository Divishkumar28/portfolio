import React from "react";
import { NavLink } from "react-router-dom";
import '../asserts/css/navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li>
            <NavLink id="nav" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink id="nav" to="/SkillSet">Skill Set</NavLink>
          </li>
          <li>
            <NavLink id="nav" to="/Experience">Experience</NavLink>
          </li>
          <li>
            <NavLink id="nav" to="/Education">Education</NavLink>
          </li>
          <li>
            <NavLink id="nav" to="/Certification">Certification</NavLink>
          </li>
          <li> 
            <NavLink id="nav" to="/Contact">Contact</NavLink> 
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
