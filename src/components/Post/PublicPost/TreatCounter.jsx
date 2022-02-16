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
  const [editTreat, setEditTreat] = useState(props.Treat);

  useEffect(() => {
    console.log(props.Treat, 'PROPS.TREAT from TreatCounter')
    console.log(props, 'THESE ARE THE PROPS!!!!!!!!')
  }, []);
  //* ^ this log shows me that Treat should be defined
  /* 
  ? when I added lines 73-76 it said cannot add property Treat, object is not extensible

  ?MDN says that means an object that cannot have new properties added to it
  ! ^^^ Got that part figured out
   */


  const fetchTreats = (e, treat) => {
    console.log('button was clicked')
    e.preventDefault();

    fetch(`http://localhost:1150/post/${props.postToUpdate.id}`,{
      method: 'PUT',
      body: JSON.stringify({
        treat: editTreat + 1,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token
      }),
    }).then((res) => res.json())
    .then((data) => {
        console.log(data)
        setEditTreat(treat + 1)
        console.log(setEditTreat, 'SET EDIT TREAT')
        fetchTreats();
        props.fetchPost();
        props.updateOff();
    })
  } 

    
  return ( 
      <form onSubmit={fetchTreats}>
        <p>You have {editTreat} treats on your photo!</p>
        <Button type='submit' onChange={(e) => {setEditTreat(e.target.value)}}></Button>
      </form>
   );
}
 
export default TreatCounter;
