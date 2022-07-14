import React,{useState} from 'react'
import man from "../../assets/man.png"
import arrow from "../../assets/send.png"
import postcomment from "./PostComment.module.css"
import { useDispatch } from "react-redux";
import { addComment } from "../../features/post/postSlice";
import postcommentcss from "./PostComment.module.css";
import {useSelector} from "react-redux";

function PostComment({post}) {
  const [commentData, setCommentData] = useState("");
  const dispatch = useDispatch();
  const postId = post._id;
  const commentHandler = ()=> {
    dispatch(addComment({commentData,postId}))
    setCommentData("");
  }

  const {user} = useSelector(state => state.auth);
  const {username, firstName, lastName} = user;
const {allUsers} = useSelector(state => state.users);
  const currentUser = allUsers.find(user => user.username === username);
  return (
    <div className={`d-flex ${postcomment.container}`}>
        <img src={currentUser.profilepic} alt="User Icon" />
      <div className={postcommentcss.comment_input}>
        <textarea
          placeholder="Write your comment"
          className={postcommentcss.input_area}
          value={commentData}
          onChange={(e) =>
            setCommentData(e.target.value)
          }
        />
        {commentData.length >0 && <img src={arrow} alt="Arrow" onClick={commentHandler} />}
      </div>
    </div>
  )
}

export {PostComment} 