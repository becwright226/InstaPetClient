import React, { useState, useEffect } from 'react';
import { FaBone } from 'react-icons/fa';
import {
  Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns
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

        const [treatCount, setTreatCount] = useState(0);  

        const TreatCounter = (props) => {
          setTreatCount(treatCount + 1);
      }

        const publicMapper = () => {
          return props.post.map((post, index) => {
            console.log(post.image, 'POST IMAGE HERE')
            return (
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
                <Button onClick={TreatCounter}><FaBone/></Button>
                </CardBody>
              </Card>
          
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