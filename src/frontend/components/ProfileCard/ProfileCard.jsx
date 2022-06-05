import React from 'react'
import { User } from '../User/User'
import profilecard from "./ProfileCard.module.css"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import twitter from "../../assets/twitter.png"

function ProfileCard() {
  return (
    <div className={profilecard.container}>
        <div className={`d-flex ${profilecard.header}`}>
            <User/>
            <span>Edit</span>
        </div>
        <article className={profilecard.description}>
            Aspiring Full-Stack Developer || Growing @neog.camp
        </article>
        <ul className={`d-flex ${profilecard.stats}`}>
            <li>7 Posts</li>
            <li>2 Followers</li>
            <li>1 Following</li>
        </ul>
        <div className={`d-flex ${profilecard.social_media_icons}`}>
        <a href="https://www.linkedin.com/in/amandeep-sinha" target="_blank" className={profilecard.social_media}>
            <img src={linkedin} alt="linkedin icon" /></a>
         <a href="https://www.github.com/Amandeep-sinha" target="_blank" className={profilecard.social_media} >  <img src={github} alt="github icon" /></a>
          <a href="https://www.twitter.com/_Amandeep_sinha" target="_blank" className={profilecard.social_media}>  <img src={twitter} alt="twitter icon" />
        </a></div>
    </div>
  )
}

export {ProfileCard} 
 