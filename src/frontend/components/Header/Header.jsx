import React, { useEffect } from "react";
import header from "./Header.module.css";
import logo from "../../assets/user.png"
import logout from "../../assets/logout.png"
import home from "../../assets/home.png"
import explore from "../../assets/explore.png"
import user from "../../assets/user.png"
import bookmark from "../../assets/bookmark.png"
import {logoutHandler } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {token} = useSelector(state => state.auth);

  useEffect(()=>{
    if(!token){
      navigate("/login");
    }
  },[token])
  return (
    <>
      <nav className={`nav-bar ${header.nav_container}`}>
        <img src={logo} alt="Brand Icon" />
        <h1 className={`nav-brand ${header.nav_brand}`}>Mittar</h1>

        {/* for desktop view */}
        {token && <ul className={header.desktop_menu}>
          <li><Link to={"/home"}><img src={home} alt="Home" /></Link></li>
          <li> <img src={bookmark} alt="" /></li>
          <li><img src={explore} alt="" /></li>
          <li><Link to={"/profile"}><img src={user} alt="Profile" /></Link></li>
          <li onClick={()=>{
            dispatch(logoutHandler())
            toast.success("Successfully Logged Out");
            }}><img src={logout} alt="" /></li>
        </ul>}
      </nav>
    </>
  );
}

export { Header };