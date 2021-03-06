import React from 'react'
import btn from "./Button.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addOrRemoveBookmark } from '../../features/auth/authSlice';
import { likeOrDislikePost } from '../../features/post/postSlice';

function Button({post,id}) {

  const {user} = useSelector(state => state.auth);
  const {username, bookmarks} = user;

  const dispatch = useDispatch();

  const isBookmarked = bookmarks.some(post => post._id === id);

  const isLiked = post.likes.likedBy.some(user => user.username === username)

  const bookmarkHandler = ()=> {
    dispatch(addOrRemoveBookmark({id,isBookmarked}));
  }

  const likeHandler = ()=> {
    dispatch(likeOrDislikePost({id,isLiked}));
  }

  return (
    <div className={`d-flex ${btn.container}`}>
        <div className={btn.items} onClick={likeHandler}>
            <i className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"}`}></i>
            <span>{post.likes.likeCount === 0 ? "": post.likes.likeCount + " " }{(post.likes.likeCount === 0 || post.likes.likeCount === 1)? "Like":"Likes"}</span>
        </div>
        <div className={btn.items} onClick={bookmarkHandler}>
            <i className={`bi ${isBookmarked ? "bi-bookmark-fill" : "bi-bookmark"}`}></i>
            <span>{isBookmarked? "BookMarked" : "BookMark"}</span>
        </div>   
    </div>
  )
}

export {Button} 