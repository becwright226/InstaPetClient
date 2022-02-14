import React, { useState } from 'react';
import {
  Button, Card, CardImg, CardBody, CardText, Table, Container
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
      console.log(post.desc, 'POST DESCRIPTION HERE')
      return (
        <Card key={index} style={{backgroundColor: 'orange'}}>
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
    <div width= '200px' height= '300px' border= 'solid 3px orange'>
      <Card>
      {postMapper()}
      </Card>
    </div>
    </>
   );
}
 
export default PostCard;