import React, {useEffect} from 'react'
import { User } from '../User/User'
import profilecard from "./ProfileCard.module.css"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../features/post/postSlice";
import { useLocation } from "react-router-dom";
import { followUser, getAllUsers, unfollowUser } from "../../features/user/userSlice";

function ProfileCard({ user }) {
  const path = useLocation();

  const { allPosts } = useSelector((state) => state.posts);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const countUserPost = allPosts.filter(
    (post) => post.username === user?.username
  ).length;

  useEffect(() => { 
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [user]);

  const followHandler = (userid) => {
    dispatch(followUser({ followUserId: userid, dispatch }))
  }

  const unfollowHandler = (userid) => {
    dispatch(unfollowUser({ followUserId: userid, dispatch }))
  }

  const isFollowing = auth.user.following.some(curruser => curruser.username === user.username);
  return (
    <div className={profilecard.container}>
        <div className={`d-flex ${profilecard.header}`}>
        <User
          username={user?.username}
          firstName={user?.firstName}
          lastName={user?.lastName}
          image={user?.profilepic}
          flag={false}
          id={user?._id}
        />
        {path.pathname === "/profile" && <span>Edit</span>}
        {path.pathname !== "/profile" &&
          (isFollowing ? (
            <button className="btn btn-primary" onClick={()=>unfollowHandler(user._id)}>Unfollow</button>
          ) : (
            <button className="btn btn-primary" onClick={()=>followHandler(user._id)}>Follow</button>
          ))}
      </div>
      <article className={profilecard.description}>{user?.bio}</article>
      <ul className={`d-flex ${profilecard.stats}`}>
        <li>{countUserPost} Posts</li>
        <li>{user?.followers?.length} Followers</li>
        <li>{user?.following?.length} Following</li>
      </ul>
        <div className={`d-flex ${profilecard.social_media_icons}`}>
        <a href="https://www.linkedin.com/in/amandeep-sinha" target="_blank" className={profilecard.social_media}>
            <img src={linkedin} alt="linkedin icon" /></a>
         <a href="https://www.github.com/Amandeep-sinha" target="_blank" className={profilecard.social_media} >  <img src={github} alt="github icon" /></a>
          <a href="https://www.twitter.com/_Amandeep_sinha" target="_blank" className={profilecard.social_media}>  <img src={twitter} alt="twitter icon" />
        </a>
        </div>
    </div>
  )
}

export {ProfileCard} 
 