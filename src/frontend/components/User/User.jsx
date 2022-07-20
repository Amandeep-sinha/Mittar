import React from "react";
import man from "../../assets/programmer.png";
import usercss from "./User.module.css";
import { useSelector } from "react-redux";

function User({username, firstName, lastName, image}) {
  return (
    <div className={`d-flex ${usercss.container}`}>
      <img src={image} alt="User Icon" />
      <div>
      <h4>{firstName} {lastName}</h4>
      <p className={usercss.username}>@{username}</p>
      </div>
    </div>
  );
}

export { User };