import React from 'react'
import nav from "./Navbar.module.css"
import logout from "../../assets/logout.png"
import home from "../../assets/home.png"
import explore from "../../assets/explore.png"
import user from "../../assets/user.png"
import bookmark from "../../assets/bookmark.png"

function Navbar() {
  return (
    <nav className={`d-flex ${nav.container}`}>
      <img src={home} alt="home" />
      <img src={bookmark} alt="bookmark" />
      <img src={explore} alt="explore" />
      <img src={user} alt="user" />
      <img src={logout} alt="logout" />
    </nav>
  )
}

export {Navbar}