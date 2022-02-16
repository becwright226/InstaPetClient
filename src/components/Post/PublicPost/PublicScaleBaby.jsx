

import { FaBone } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns, Form
} from 'reactstrap';
import TreatCounter from './TreatCounter';


const PublicScaleBaby = (props) => {

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


        const scalebabyMapper = () => {
        return publicPost.map((post, scalebaby) => {
          return (
            <Form>
            <Card key={scalebaby} style={{backgroundColor: 'orange', margin: '50px', padding: '12px'}}>
              <CardImg alt=''
              src={post.image}
              width= '50%'
              height= '50%'
              />
              <CardBody>
                <CardText>{post.desc}</CardText>
                <CardText>{post.petType}</CardText>
              </CardBody>
              <TreatCounter token={props.token} fetchPost={fetchPost} postToUpdate={post} treatCount={post.treat}/>
            </Card>
            </Form>

          )
        })
      }


  return ( 
    <div>
     <h2>All ScaleBabies</h2>
     <CardColumns>
       {scalebabyMapper()}
     </CardColumns>
    </div>
   );
}
 
export default PublicScaleBaby;