import React, {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { PostsCard } from '../../components/PostsCard/PostsCard';
import { getAllPosts } from "../../features/post/postSlice";
import { getAllUsers } from '../../features/user/userSlice';
import explorecss from "./Explore.module.css"

function Explore() {
    const {allPosts} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllPosts());
        dispatch(getAllUsers());
    },[])

  return (
    <section className={`d-flex ${explorecss.container}`}>
        {allPosts.map(post => <PostsCard post={post} key={post._id}/>)}
    </section>
  )
}

export default Explore