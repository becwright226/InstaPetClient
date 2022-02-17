

import { FaBone, FaCamera, FaFish } from 'react-icons/fa';
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
            <Card key={scalebaby} style={{backgroundColor: 'orange', margin: '50px', padding: '12px', border:'solid black 4px'}}>
              <CardImg alt=''
              src={post.image}
              width= '50%'
              height= '50%'
              />
              <CardBody>
                <CardText style={{fontFamily:'Poppins', fontWeight:'bold', color:'white', fontSize:'18px',marginTop:'20px'}}>{post.desc}</CardText>
                <br/>
                <br/>
                <FaFish size='50px' color='darkTurquoise' style={{float: 'right', size: '50px', marginLeft: '20px', marginBottom: '-45px'}}/>  
                  <CardText style={{float:'right', backgroundColor:'white',fontFamily:'Moo Lah Lah', fontSize:'35px',border:'solid white 3px', marginBottom:'-40px', borderRadius:'4px' }}>{post.petType}</CardText>
              </CardBody>
              <TreatCounter token={props.token} fetchPost={fetchPost} postToUpdate={post} treatCount={post.treat} style={{marginTop:'30px', fontFamily:'Poppins'}}/>
            </Card>
            </Form>

          )
        })
      }


  return ( 
    <div>
     <h2 style={{fontFamily:'Moo Lah Lah', marginTop: '50px', marginLeft: '50px', fontSize: '40px'}}>All Scale Babies  <FaCamera style={{color:'tomato'}}/></h2>
     <CardColumns>
       {scalebabyMapper()}
     </CardColumns>
    </div>
   );
}
 
export default PublicScaleBaby;