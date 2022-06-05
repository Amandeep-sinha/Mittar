import React from 'react'
import comment from "./Comment.module.css"
import { User } from '../User/User'

function Comment() {
  return (
    <div className={comment.container}>
         <User/>
        <div className={comment.comment}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem numquam ullam itaque voluptatem optio iure aliquid incidunt doloremque dolor neque ut hic, temporibus nostrum cumque soluta quia, deleniti autem.
        </div>
    </div>
  )
}

export {Comment} 