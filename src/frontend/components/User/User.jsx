import React from "react";
import man from "../../assets/programmer.png";
import usercss from "./User.module.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function User({username, firstName, lastName, image, flag}) {
  return (
    <div className={`d-flex ${usercss.container}`}>
      <img src={image} alt="User Icon" />
      <div>
      <h4>{firstName} {lastName}</h4>
      {!flag && <p className={usercss.username}>@{username}</p>}
      </div>
    </div>
  );
}

export { User };