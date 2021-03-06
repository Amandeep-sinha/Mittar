import React, {useState} from 'react'
import { Button } from '../Button/Button'
import { PostComment } from '../PostComment/PostComment'
import { User } from '../User/User'
import { Comment } from '../Comment/Comment'
import postscard from "./PostsCard.module.css"
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/post/postModalSlice";
import { deleteUserPost } from "../../features/post/postSlice";


function PostsCard({post}) {
  const { content, username, _id } = post;
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const {allUsers} = useSelector( state => state.users);
  const loggedInUser = JSON.parse(localStorage.getItem("loginCred")).user;
  const currentUser = allUsers.find((user) => user.username === username);

  const editHandler = () => {
    dispatch(openModal(post));
    setEditModal(false);
  }

  const deleteHandler = (id) => {
    dispatch(deleteUserPost(id));
    setEditModal(false);
  }

  return (
    <div className={` d-flex ${postscard.container}`}>
    <header className={`d-flex ${postscard.header}`}>
        <User username={username} firstName={currentUser?.firstName} lastName={currentUser?.lastName} image={currentUser?.profilepic} />
        {username === loggedInUser.username && <i className="bi bi-three-dots-vertical" onClick={()=> setEditModal(!editModal)}></i>}
      </header>
      {editModal && (
          <ul className={postscard.edit_modal}>
            <li onClick={() => editHandler(_id)}><i className="bi bi-pencil-square"></i>Edit</li>
            <li onClick={()=>deleteHandler(_id)}><i className="bi bi-trash-fill"></i>Delete</li>
          </ul>
        )}
      <article>{content}</article>
      <Button post={post} id={_id}/>
      <PostComment post={post} />
      {post.comments.map(comment => <Comment post={post} commentUser={comment} key={comment._id}/>)}
    
</div>
  );
}

export {PostsCard} 