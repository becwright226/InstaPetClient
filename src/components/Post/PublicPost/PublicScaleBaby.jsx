import React, { useState, useEffect } from 'react';
import { FaBone } from 'react-icons/fa';
import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns, Form
} from 'reactstrap';



const PublicScaleBaby = (props) => {

  const [publicPost, setPublicPost] = useState([]);

  const fetchScaleBaby = () => {
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
          fetchScaleBaby();
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