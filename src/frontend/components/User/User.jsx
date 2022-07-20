import React from "react";
import man from "../../assets/programmer.png";
import user from "./User.module.css";


function User() {
  console.log(user);
  return (
    <div className={` d-flex ${user.container}`}>
      <img src={man} alt="Iser Icon" />
      <p>User Name</p>
    </div>
  );
}

export { User };