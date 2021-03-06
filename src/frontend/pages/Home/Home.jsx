import React, {useEffect, useState}from 'react'
import { CreatePost } from '../../components/CreatePost/CreatePost'
import { PostsCard } from '../../components/PostsCard/PostsCard'
import home from  "./Home.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../features/post/postSlice'
import { getAllUsers } from '../../features/user/userSlice'
import FollowCard from "../../components/Follow/FollowCard";

function Home() {
  const {allPosts} = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const [feedPosts, setFeedPosts] = useState([]);


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  },[]);

  useEffect(() => {
    if (allPosts) {
      setFeedPosts(
        allPosts.filter(
          (post) =>
            post.username === user.username ||
            user.following.find((person) => post.username === person.username)
        ).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  },[user, allPosts]);
  return (
    <section className={`d-flex ${home.container}`}>
        <CreatePost/>
        <FollowCard/>
        {feedPosts.map((post) => <PostsCard post={post} key={post._id}/> )}
    </section>
  );
}

export {Home} 