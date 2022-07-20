import React from 'react'
import man from "../../assets/man.png"
import arrow from "../../assets/send.png"
import postcomment from "./PostComment.module.css"

function PostComment() {
  return (
    <div className={`d-flex ${postcomment.container}`}>
        <img src={man} alt="User Icon" />
        <div className={postcomment.comment_input}>
            <div data-placeholder='Write your comment' contentEditable="true" className={postcomment.input_area} />
            <img src={arrow} alt="Arrow" />
        </div>
    </div>
  )
}

export {PostComment} 