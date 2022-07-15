import React from "react";
import man from "../../assets/programmer.png";
import usercss from "./User.module.css";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function User({username, firstName, lastName, image, flag}) {
  
  const { user} = useSelector(state => state.auth);

  const navigate= useNavigate();

  const profileHandler = () => {
    user.username === username ? navigate("/profile"): navigate(`/user-profile/${username}`)
  }

  return (
    <div className={`d-flex ${usercss.container}`}>
      <img src={image} alt="User Icon" />
      <div onClick={profileHandler}>
      <h4>{firstName} {lastName}</h4>
      {!flag && <p className={usercss.username}>@{username}</p>}
      </div>
    </div>
  );
}

export { User };