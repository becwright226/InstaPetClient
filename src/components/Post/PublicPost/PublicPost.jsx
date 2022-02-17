
import React, { useState, useEffect } from 'react';
import { FaBone, FaCamera } from 'react-icons/fa';
import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns, Form
} from 'reactstrap';
import TreatCounter from './TreatCounter';




const PublicPost = (props) => {
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

          
          const publicMapper = () => {
          return publicPost.map((post, publicPost) => {
            return (
              <Form>
              <Card key={publicPost} style={{backgroundColor: 'orange', margin: '50px', padding: '12px', border:'solid black 3px'}}>
                <CardImg alt=''
                src={post.image}
                width= '50%'
                height= '50%'
                />
                <CardBody>
                  <CardText style={{fontFamily:'Poppins', fontWeight:'bold', color:'white', fontSize:'18px', marginTop:'20px'}}>{post.desc}</CardText>
                  <br/>
                  <br/>
                  <CardText  style={{float:'right', backgroundColor:'white',fontFamily:'Moo Lah Lah', fontSize:'35px',border:'solid white 3px', marginBottom:'-35px', borderRadius: '4px' }}>{post.petType}</CardText>
                </CardBody>
                <TreatCounter token={props.token} fetchPost={fetchPost} postToUpdate={post} treatCount={post.treat}/>
              </Card>
              </Form>

            )
          })
        }


  return ( 
    <div>
     <h1 style={{fontFamily: 'Moo Lah Lah', fontSize: '45px', marginTop: '50px', marginLeft: '50px'}}>All InstaPets <FaCamera size='35px' style={{color: 'tomato'}}/> </h1>
     <CardColumns>
       {publicMapper()}
     </CardColumns>
    </div>
   );
  }




export default PublicPost; 
