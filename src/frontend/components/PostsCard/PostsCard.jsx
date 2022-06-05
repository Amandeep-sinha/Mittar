import React from 'react'
import { Button } from '../Button/Button'
import { PostComment } from '../PostComment/PostComment'
import { User } from '../User/User'
import { Comment } from '../Comment/Comment'
import postscard from "./PostsCard.module.css"

function PostsCard() {
  return (
    <div className={` d-flex ${postscard.container}`}>
    <header className={`d-flex ${postscard.header}`}>
        <User/>
        <i className="bi bi-three-dots-vertical"></i>
    </header>
    <article>I am post content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos dicta consectetur, exercitationem deleniti ut quasi voluptates quibusdam facere iure quidem quas enim vero amet fugit dolore distinctio minus sunt?
    </article>
    <Button/>
    <PostComment/>
    <Comment/>
</div>
  )
}

export {PostsCard} 