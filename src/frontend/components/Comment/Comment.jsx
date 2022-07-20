import React from 'react'
import comment from "./Comment.module.css"
import { User } from '../User/User'

function Comment() {
  return (
    <div className={comment.container}>
         <User/>
        <div className={comment.comment}>
           
        </div>
    </div>
  )
}

export {Comment} 