import React from 'react'
import { PostsCard } from '../../components/PostsCard/PostsCard'
import { ProfileCard } from '../../components/ProfileCard/ProfileCard'
import profile from "./Profile.module.css"

function Profile() {
  return (
    <div className={`d-flex ${profile.container}`}>
        <ProfileCard/>
    </div>
  )
}

export {Profile}