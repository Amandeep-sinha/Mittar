import React from 'react'
import nav from "./Navbar.module.css"
import logout from "../../assets/logout.png"
import home from "../../assets/home.png"
import explore from "../../assets/explore.png"
import user from "../../assets/user.png"
import bookmark from "../../assets/bookmark.png"
import { useDispatch } from "react-redux";
import { logoutHandler } from "../../features/auth/authSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className={`d-flex ${nav.container}`}>
      <Link to={"/"}><img src={home} alt="home" /></Link>
      <Link to={"/bookmark"}><img src={bookmark} alt="bookmark" /></Link>
      <img src={explore} alt="explore" />
      <Link to={"/profile"}><img src={user} alt="user" /></Link>
      <img
        src={logout}
        alt="logout"
        onClick={() => {
          dispatch(logoutHandler());
          toast.success("Logged out successfully");
        }}
      />
    </nav>
  );
}

export {Navbar}