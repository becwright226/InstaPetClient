import React, { useState, useEffect } from 'react';
import { 
    Card, 
    CardBody, 
    CardImg, 
    Container,
    Row,
    Col
} from 'reactstrap';
import PostCreate from './PostCard/PostCreate';
import PostEdit from './PostCard/PostEdit';
import PostCard from './PostCard/PostCard';
import Uploading from './Uploading';


const Post = (props) => {

    const [post, setPost] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [postToUpdate, setPostToUpdate] = useState({});
  
    const fetchPost = () => {
        fetch("http://localhost:1150/post/mypets",{
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
        
    const editUpdatePost = (post) => {
        setPostToUpdate(post)
        console.log(post)
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }    

    useEffect(() => {
        fetchPost()
    }, []);

    return (  
        <Container>
        <Row>
          <Col md='3'>
            <PostCreate fetchPost={fetchPost} token={props.token} />
          </Col>
          <Col md='9'>
            <PostCard post={post} editUpdatePost={editUpdatePost} updateOn={updateOn} fetchPost={fetchPost} token={props.token} />
          </Col>
           {updateActive ? <PostEdit postToUpdate={postToUpdate} updateOff={updateOff} token={props.token} fetchPost={fetchPost} /> : <></>}
        </Row>
      </Container>
    );
}
 
export default Post;