import React, {useEffect, useState}from 'react'
import { CreatePost } from '../../components/CreatePost/CreatePost'
import { PostsCard } from '../../components/PostsCard/PostsCard'
import home from  "./Home.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../features/post/postSlice'
import { getAllUsers } from '../../features/user/userSlice'

function Home() {
  const {allPosts} = useSelector(state => state.posts);

  const feedPosts = [...allPosts].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllPosts())
    dispatch(getAllUsers())
  },[])
  return (
    <section className={`d-flex ${home.container}`}>
        <CreatePost/>
        {feedPosts.map((post) => <PostsCard post={post} key={post._id}/> )}
    </section>
  )
}

export {Home} 