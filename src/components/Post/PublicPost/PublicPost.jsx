import React, { useState, useEffect } from 'react';
import { FaBone } from 'react-icons/fa';
import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns, Form
} from 'reactstrap';


const PublicPost = (props) => {

  const [publicPost, setPublicPost] = useState([]);

    const fetchPublic = () => {
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
        
        
        
        // const [treatCount, setTreatCount] = useState(0);  
        
        
        // const [editTreat, setEditTreat] = useState(props.postToUpdate.treats);
        
        // const TreatCounter = (e, currentTreatCount) => {
          
        //   // const postUpdate = (e, post) => {
        //     console.log('button was clicked')
        //     e.preventDefault();
            
            
        //     fetch (`http://localhost:1150/post/${props.postToUpdate.id}`, {
        //       method: 'PUT',
        //       body: JSON.stringify({
        //         treat: (currentTreatCount + 1) 
                
        //       }),
        //       headers: new Headers({
        //         'Content-Type': 'application/json',
        //         'Authorization': props.token
        //       }),
        //     }).then((res) => {
        //       fetchPublic();
        //       setEditTreat()
        //       props.updateOff();
        //     })
            
        //   }
          // }
          // build your fetch and body to send to your update endpoint.
          // the body should take the currentTreat and add 1 to it before you send it off to the endpoint.
          
          // upon a successful update you need to call publicFetch()
          
          useEffect(() => {
            fetchPublic();
          }, []);


          const publicMapper = () => {
          return publicPost.map((post, index) => {
            return (
              <Form onSubmit={TreatCounter} >
              <Card key={index} style={{backgroundColor: 'orange', margin: '50px', padding: '12px'}}>
                <CardImg alt=''
                src={post.image}
                width= '50%'
                height= '50%'
                />
                <CardBody>
                  <CardText>{post.desc}</CardText>
                  <CardText>{post.petType}</CardText>
                <p>You have {treatCount} treats on your photo!</p>
                <Button type='submit' onClick={()=> setTreatCount(treatCount + 1 )}><FaBone/></Button>
                </CardBody>
              </Card>
              </Form>
          
            )
          })
        }
 

  return ( 
    <div>
     <h2>All InstaPets</h2>
     <CardColumns>
       {publicMapper()}
     </CardColumns>
    </div>
   );
  }



 
export default PublicPost;