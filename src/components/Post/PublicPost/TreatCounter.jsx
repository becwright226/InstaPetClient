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

//       return ( 
  //         <div>
  //           <p>You have {post.treat} treats on your photo!</p>
  //            <Button type='submit' onClick={()=> setEditTreat(editTreat + 1)}><FaBone/></Button>
  //         </div>
  //        );
  //     }
  
  
  
  // export default TreatCounter;


  //! TO DO: 
  //! build your fetch and body to send to your update endpoint.

  //! the body should take the currentTreat and add 1 to it before you send it off to the endpoint.

  //! upon a successful update you need to call publicFetch()


import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';



const TreatCounter = (props) => {

  
//   if (props.Treat === undefined) {
//     props.Treat = 0;
//   }
// console.log(props.Treat, 'HEREEEEEEEE')
let treats = props.treatCount
  let [editTreat, setEditTreat] = useState(treats++);
  

  //* ^ this log shows me that Treat should be defined
  /* 
  ? when I added lines 73-76 it said cannot add property Treat, object is not extensible
  
  ?MDN says that means an object that cannot have new properties added to it
  ! ^^^ Got that part figured out
  */
//  console.log(editTreat)
 
//  console.log(treats)
 const fetchTreats = (e, post) => {
  //  console.log(treats, "FIRST")
  //  setEditTreat(editTreat++)
  //  console.log(editTreat, "SECOND")
    // console.log(editTreat, '1!!!!!!!!!!!!!!!')
    // console.log('button was clicked')
    e.preventDefault();
    console.log(props.postToUpdate.id)
    fetch(`http://localhost:1150/post/treat/${props.postToUpdate.id}`,{
      method: 'PUT',
      body: JSON.stringify({
        treat: treats,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      }),
    }).then((res) => res.json())
    .then((data) => {
      // setEditTreat(data)
        // console.log(editTreat, 'THE DATAAAA')
        props.fetchPost();
        // console.log(editTreat)
    })
  } 

    
  return ( 
      <>
      <p>You have {treats} treats on your photo!</p>
      <Button onClick={fetchTreats}>TREAT</Button>
      </>
     
   );
}
 
export default TreatCounter;
