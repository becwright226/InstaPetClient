

import { FaBone, FaCamera, FaPaw } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns, Form
} from 'reactstrap';
import TreatCounter from './TreatCounter';



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
              <Card key={furbaby} style={{backgroundColor: 'orange', margin: '50px', padding: '12px', border: 'solid black 3px'}}>
                <CardImg alt=''
                src={post.image}
                width= '50%'
                height= '50%'
                />
                <CardBody>
                  <CardText style={{marginTop: '20px', fontFamily: 'Poppins', fontSize: '20px', color: 'white', fontWeight: 'bold'}}>{post.desc}</CardText>
                  <br/>
                  <br/>
                  <FaPaw size='50px' color='white' style={{float: 'right', size: '50px', marginLeft: '20px', marginBottom: '-45px'}}/>  
                  <CardText style={{float: 'right', fontFamily: 'Moo Lah Lah', fontSize: '35px', marginBottom: '-35px', backgroundColor: 'white', borderRadius: '4px', border: 'solid white 3px'}}>{post.petType}</CardText>
                </CardBody>
                <TreatCounter token={props.token} fetchPost={fetchPost} postToUpdate={post} treatCount={post.treat}/>
              </Card>
              </Form>

            )
          })
        }


  return ( 
    <div>
     <h2 style={{marginTop: '50px', marginLeft: '50px', fontFamily: 'Moo Lah Lah', fontSize: '45px'}}> All Fur Babies <FaCamera size='40px'color='tomato'/> </h2>
     <CardColumns>
       {furbabyMapper()}
     </CardColumns>
    </div>
   );
  }


 
export default PublicFurBaby;