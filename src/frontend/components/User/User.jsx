import React from "react";
import man from "../../assets/programmer.png";
import usercss from "./User.module.css";
import { useSelector } from "react-redux";

function User() {
  const {user} = useSelector(state => state.auth);
  return (
    <div className={`d-flex ${usercss.container}`}>
      <img src={man} alt="user Icon" />
      <h4>{user?.firstName} {user?.lastName}</h4>
      <span className="username">@{user?.username}</span>
    </div>
  );
}

export { User };