import React, { useState } from 'react';
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
        <Card key={index} style={{backgroundColor: 'orange', margin: '50px', padding: '12px'}}>
          <CardImg alt=''
          src={post.image}
          width= '50%'
          height= '50%'
          />
          <CardBody>
            <CardText>{post.desc}</CardText>
            <CardText>{post.petType}</CardText>
            <CardText>{post.isPublic}</CardText>
            <Button color='warning' onClick={() => {startUpdate(post)}}>Update</Button>
          <Button color='danger' onClick={() => {deletePost(post)}}>Delete</Button>
          </CardBody>
        </Card>
    
      )
    })
  }
  return ( 
    <>
    <h3>Your Posts</h3>
    <CardColumns>
      {postMapper()}
    </CardColumns>
    </>
   );
}
 
export default PostCard;