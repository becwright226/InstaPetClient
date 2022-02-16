

import { FaBone } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns, Form
} from 'reactstrap';

const PublicFurBaby = (props) => {

  const [publicPost, setPublicPost] = useState([]);

    const fetchPost = () => {
      fetch(props.url,{
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
            fetchPost();
          }, []);


          const furbabyMapper = () => {
          return publicPost.map((post, furbaby) => {
            return (
              <Form>
              <Card key={furbaby} style={{backgroundColor: 'orange', margin: '50px', padding: '12px'}}>
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
     <h2>All FurBabies</h2>
     <CardColumns>
       {furbabyMapper()}
     </CardColumns>
    </div>
   );
  }


 
export default PublicFurBaby;