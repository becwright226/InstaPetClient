import React, { useState, useEffect } from 'react';
import PostCreate from './PostCard/PostCreate';
import Uploading from './Uploading';

const Post = (props) => {

    const [post, setPost] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [postToUpdate, setPostToUpdate] = useState({});
  
    const fetchPost = () => {
        fetch("http://localhost:1150/post/create",{
            method:"GET",
            headers: new Headers({
                "Content-Type":"application/json",
                "Authorization": props.token
            }),
        }).then((res) => res.json())
            .then((data) => {
                setPost(data)
                console.log(data)
            })
    } 
        

    
    return (  
        <div>           
            <PostCreate />
            Hello from Post
        </div>
    );
}
 
export default Post;