import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns
} from 'reactstrap';

const PostCard = (props) => {

  const deletePost = (post) => {
    fetch(`http://localhost:1150/post/${post.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      })
    })
    .then(() => props.fetchPost())
  }

  const startUpdate = (post) => {

    props.editUpdatePost(post)

    props.updateOn()
  }

  const postMapper = () => {
    return props.post.map((post, index) => {
      console.log(post.image, 'POST IMAGE HERE')
      return (
        <Card key={index} style={{backgroundColor: 'orange', margin: '50px', padding: '12px', border: 'solid black 4px'}}>
          <CardImg alt=''
          src={post.image}
          width= '50%'
          height= '50%'
          />
          <CardBody>
            <CardText style={{fontFamily: 'Poppins', color: 'white', fontSize: '20px'}}>{post.desc}</CardText>
            <CardText>{post.isPublic}</CardText>
            <Button  style={{backgroundColor:'darkturquoise', fontFamily: 'Poppins', margin: '10px', color: 'black', border: 'solid black 2px'}} onClick={() => {startUpdate(post)}}>Update</Button>
          <Button  style={{backgroundColor:'tomato', fontFamily: 'Poppins', margin: '10px', color: 'black', border: 'solid black 2px'}}onClick={() => {deletePost(post)}}>Delete</Button>
            <CardText style={{fontFamily: 'Moo Lah Lah', color: 'black', fontSize: '40px', fontWeight: 'lighter', float: 'right', backgroundColor: 'white', border: 'solid black 2px', borderRadius: '4px'}}>    {post.petType}    </CardText>
          </CardBody>
        </Card>
    
      )
    })
  }
  return ( 
    <>
    <h1 style={{fontFamily: 'Moo Lah Lah', marginTop: '50px'}}>Your Posts <FaCamera size='30px' style={{color: 'tomato'}}/> </h1>
    <CardColumns>
      {postMapper()}
    </CardColumns>
    </>
   );
}
 
export default PostCard;