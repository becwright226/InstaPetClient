import React from 'react';
const  PublicPost= (props) => {
  return (
    <div>
      <h1> Public </h1>
    </div>
    );
}
 
export default PublicPost ;
/*import React, { useState, useEffect } from 'react';
import { FaBone } from 'react-icons/fa';
import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns, Form
} from 'reactstrap';
const PublicPost = (props) => {
  const [publicPost, setPublicPost] = useState([]);
    const fetchPublic = () => {
      fetch("http://localhost:1150/post/public",{
          method:"GET",
          headers: new Headers({
              "Content-Type":"application/json",
              "Authorization": props.token
          }),
      }).then((res) => res.json())
          .then((data) => {
              setPublicPost(data)
              console.log(data)
          })
        } 


          useEffect(() => {
            fetchPublic();
          }, []);
          const publicMapper = () => {
          return publicPost.map((post, publicPost) => {
            return (
              <Form>
              <Card key={publicPost} style={{backgroundColor: 'orange', margin: '50px', padding: '12px'}}>
                <CardImg alt=''
                src={post.image}
                width= '50%'
                height= '50%'
                />
                <CardBody>
                  <CardText>{post.desc}</CardText>
                  <CardText>{post.petType}</CardText>
                </CardBody>
              </Card>
              </Form>

            )
          })
        }


  return ( 
    <div>
     <h1 style={{fontFamily: 'Moo Lah Lah'}}>All InstaPets</h1>
     <CardColumns>
       {publicMapper()}
     </CardColumns>
    </div>
   );
  }




export default PublicPost; */
