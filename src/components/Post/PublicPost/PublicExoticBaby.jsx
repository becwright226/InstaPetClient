
import React, { useState, useEffect } from 'react';

const PublicExoticBaby = (props) => {
  return ( 
    <div>
      <h1>Exotic Baby</h1>
    </div>
   );
}
 
export default PublicExoticBaby;
/*import { FaBone } from 'react-icons/fa';
import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns, Form
} from 'reactstrap';



const PublicExoticBaby = (props) => {

  const [publicPost, setPublicPost] = useState([]);

  const fetchExoticBaby = () => {
    fetch("http://localhost:1150/post/ExoticBaby",{
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
          fetchExoticBaby();
        }, []);


        const exoticbabyMapper = () => {
        return publicPost.map((post, exoticbaby) => {
          return (
            <Form>
            <Card key={exoticbaby} style={{backgroundColor: 'orange', margin: '50px', padding: '12px'}}>
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
    <h2>All ExoticBabies</h2>
    <CardColumns>
      {exoticbabyMapper()}
    </CardColumns>
   </div>

   );
}
 
export default PublicExoticBaby;*/