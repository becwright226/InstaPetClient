
import React, { useState, useEffect } from 'react';
import { 
    Card, 
    CardBody, 
    CardImg, 
    Container,
    Row,
    Col
} from 'reactstrap';
import {Route, Link, Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import PostCreate from './PostCard/PostCreate';
import PostEdit from './PostCard/PostEdit';
import PostCard from './PostCard/PostCard';
import Uploading from './Uploading';
import PostNav from './PostNavbar/PostNavbar';
import PublicPost from './PublicPost/PublicPost';
import TreatCounter from './PublicPost/TreatCounter';
import PublicFurBaby from './PublicPost/PublicFurBaby';
import PublicScaleBaby from './PublicPost/PublicScaleBaby';
import PublicExoticBaby from './PublicPost/PublicExoticBaby';
import APIURL from '../../environment';



const Post = (props) => {

    const [post, setPost] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [postToUpdate, setPostToUpdate] = useState({});
  
    const fetchPost = () => {
        fetch(`${APIURL}/post/mypets`,{
            method:"GET",
            headers: new Headers({
                "Content-Type":"application/json",
                "Authorization": props.token
            }),
        }).then((res) => res.json())
            .then((data) => {
                setPost(data)
                console.log(data)
            })
    } 
        

    let Treat = props.treat
  if (Treat === undefined) {
    Treat = 0;
  }
console.log(Treat, 'TREAT CONSOLE LOG')


    const editUpdatePost = (post) => {
        setPostToUpdate(post)
        console.log(post)
    }

    const updateOn = () => {
        setUpdateActive(true)
    }

    const updateOff = () => {
        setUpdateActive(false)
    }    

    useEffect(() => {
        fetchPost();
    }, []);
  
   
    return (  

      <>
      <PostNav clearlocalstorage={props.clearlocalstorage}/> 
     
        <Container>
        <Row>
          <Col md='3'>
            <PostCreate fetchPost={fetchPost} token={props.token} />
          </Col>
          <Col md='9'>

            <Routes>
            <Route exact path='/' element={ <PostCard post={post} editUpdatePost={editUpdatePost} updateOn={updateOn} fetchPost={fetchPost} token={props.token} />}> </Route>
                {/*isPostVisible===true? (<Post/>) : (<PublicPost/>)*/}
            <Route exact path='/public' element={<PublicPost  token={props.token} updateOff={updateOff} postToUpdate={postToUpdate} url={`${APIURL}/post/public`}/>}> </Route>
            
            <Route exact path='/FurBaby' element={<PublicFurBaby post={post} TreatCounter={TreatCounter} editUpdatePost={editUpdatePost} updateOn={updateOn} token={props.token} url={`${APIURL}/post/FurBaby`}/>}> </Route>

            <Route exact path='/ExoticBaby' element={<PublicExoticBaby post={post} TreatCounter={TreatCounter} editUpdatePost={editUpdatePost} updateOn={updateOn} token={props.token} url={`${APIURL}/post/ExoticBaby`}/>}> </Route>

            <Route exact path='/ScaleBaby' element={<PublicScaleBaby post={post} TreatCounter={TreatCounter} editUpdatePost={editUpdatePost} updateOn={updateOn} token={props.token} url={`${APIURL}/post/ScaleBaby`}/>}> </Route>
        </Routes>

          </Col>
           {updateActive ? <PostEdit postToUpdate={postToUpdate} updateOff={updateOff} token={props.token} fetchPost={fetchPost} /> : <></>}
        </Row>

     

      </Container>

      </>
    );
  }
  
  export default Post;
  
  
  {/* <PublicExoticBaby post={post} TreatCounter={TreatCounter} editUpdatePost={editUpdatePost} updateOn={updateOn} token={props.token} url="http://localhost:1150/post/ExoticBaby" />

  <PublicPost  token={props.token} updateOff={updateOff} postToUpdate={postToUpdate} url="http://localhost:1150/post/public" />

  <PublicFurBaby post={post} TreatCounter={TreatCounter} editUpdatePost={editUpdatePost} updateOn={updateOn} token={props.token} url="http://localhost:1150/post/FurBaby"/>

  <PublicScaleBaby post={post} TreatCounter={TreatCounter} editUpdatePost={editUpdatePost} updateOn={updateOn} token={props.token} url="http://localhost:1150/post/ScaleBaby" />
*/}