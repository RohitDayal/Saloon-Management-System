import React, { useContext } from "react";
import NavItem from "./NavItem";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { userInfo } = useContext(UserContext);
  
  return (
    <div className="nav-bar">
      <NavItem name="saLoon" to="/" />
      <NavItem name="Home" to="/" />
      <NavItem name="About" to="/about" />
      <NavItem name="Services" to="/services" />
      <NavItem name="More" to="/more" />
      {userInfo && userInfo.UserName ? (
        <NavItem name={userInfo.UserName} to="/profile" />
      ) : (
        <NavItem name="Login" to="/login" />
      )}
    </div>
  );
};

export default Navbar;
