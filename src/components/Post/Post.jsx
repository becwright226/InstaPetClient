import React from 'react';
import PostNav from './PostNavbar/PostNavbar';



const Post = (props) => {
    
    return (  
        <div>
            <PostNav clearlocalstorage={props.clearlocalstorage}/>
            Hello from Post
        </div>
    );
}
 
export default Post;

