import React from 'react'
import createpost from "./CreatePost.module.css"

function CreatePost() {
  console.log(createpost);
  return (
    <div className={`d-flex ${createpost.container}`}>
      <div className={`d-flex ${createpost.input_wrapper}`}>
        <i className="bi bi-person-circle"></i>
        <article>What's in your mind?</article>
      </div>
    </div>
  )
}

export {CreatePost} 