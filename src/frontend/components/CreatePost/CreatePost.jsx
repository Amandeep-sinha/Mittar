import React, {useState} from 'react'
import createpost from "./CreatePost.module.css"
import man from "../../assets/man.png"
import { useDispatch } from 'react-redux';
import { addUserPost } from '../../features/post/postSlice';
import { useSelector } from 'react-redux';

function CreatePost() {
  const {user} = useSelector(state => state.auth);
    const {username, firstName, lastName} = user;
  const {allUsers} = useSelector(state => state.users);
    const currentUser = allUsers.find(user => user.username === username);
    var image = "";
      currentUser ? image = currentUser.profilepic : image = man;
  const [postData, setPostData] = useState("");
  const dispatch = useDispatch();

  const postHandler = ()=>{
    dispatch(addUserPost(postData));
    setPostData("")
  }

  
  
  return (
    <div className={`d-flex ${createpost.container}`}>
      <div className={`d-flex ${createpost.header}`}>
      <img src={image} alt="User Icon" />
      <textarea placeholder="What's in your mind.." value={postData} onChange={(e)=> setPostData(e.target.value)}></textarea>
      </div>
      <button className='btn btn-primary' onClick={postHandler}>Post</button>
    </div>
  )
}

export {CreatePost} 