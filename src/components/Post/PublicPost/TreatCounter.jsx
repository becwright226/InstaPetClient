// import React, { useState, useEffect } from 'react';
// import { FaBone } from 'react-icons/fa';
// import {
//   Button, Card, CardImg, CardBody, CardText, Table, Container, CardColumns, Form
// } from 'reactstrap';

// import PublicPost from './PublicPost';


// const [editTreat, setEditTreat] = useState(post.treats++)
// console.log(post.treats)

// const TreatCounter = (props) => {

//   function CountTreats() {
//     return post.map (<PublicPost />)
//   }
    
     

//     // // const postUpdate = (e, post) => {
//     //   console.log('button was clicked')
//     //   e.preventDefault();
      
//     //   console.log(props.postToUpdate.id)
//     //   fetch (`http://localhost:1150/post/${post.id}`, {
//     //     method: 'PUT',
//     //     body: JSON.stringify({
//     //       treat: post.treat++ 
          
//     //     }),
//     //     headers: new Headers({
//     //       'Content-Type': 'application/json',
//     //       'Authorization': props.token
//     //     }),
//     //   }).then((res) => {
//     //     fetchPublic();
//     //     setEditTreat()
//     //     props.updateOff();
//     //   })
      
//  // }
//         // build your fetch and body to send to your update endpoint.
//         // the body should take the currentTreat and add 1 to it before you send it off to the endpoint.
        
//         // upon a successful update you need to call publicFetch()

//       return ( 
//         <div>
//           <p>You have {post.treat} treats on your photo!</p>
//            <Button type='submit' onClick={()=> setEditTreat(editTreat + 1)}><FaBone/></Button>
//         </div>
//        );
//     }



// export default TreatCounter;