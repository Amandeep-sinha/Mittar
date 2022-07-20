import React from 'react'
import { CreatePost } from '../../components/CreatePost/CreatePost'
import { PostsCard } from '../../components/PostsCard/PostsCard'
import home from  "./Home.module.css"

function Home() {
  return (
    <section className={`d-flex ${home.container}`}>
        <CreatePost/>
        <PostsCard/>
    </section>
  )
}

export {Home} 