import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Input,
  Button,
  Label,
  Option
  
} from 'reactstrap';

import Uploading from '../Uploading';
import {FaFish, FaPaw, FaFeather} from 'react-icons/fa'
import APIURL from '../../../environment';

const PostCreate = (props) => {

  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [petType, setPetType] = useState('FurBaby');
  const [isPublic, setIsPublic] = useState(false);

  function handleSubmit(e) {
    console.log('button was clicked')
    e.preventDefault();
    const requestObject = {
      image: image,
      desc: desc,
      petType: petType,
      isPublic: isPublic== "true" ? true : false,
    }

    fetch (`${APIURL}/post/`,{
      method:"POST",
      body: JSON.stringify(requestObject),
      headers: new Headers({
        "Content-Type":"application/json",
        "Authorization": props.token
      }),
    })
  .then((res) => res.json())
  .then((data) => {
    //lines 40-46 are resetting the fields after user hits send
    console.log(data)
    setImage('')
    setDesc('')
    setPetType('')
    setIsPublic(false)
    props.fetchPost();
    console.log("Things are working, don't panic")
})
  }


  //style={{width: '180px', height: '225px', border: 'solid 3px black'}}
  return ( 
    <form onSubmit={handleSubmit}>
      <Card style={{marginTop: '50px', marginLeft: '-100px', float: 'left', backgroundColor: 'darkturquoise', fontFamily: "Poppins", width: '100%', border: 'solid black 4px'}}>
        <Uploading setImage={setImage} image={image} width= '30%' height= '30%'/>
        <CardImg src='' value={image} onChange={(e) => setImage(props.formattedImageUrl)} />

        <CardBody width="150px">
          <Label htmlFor='description' style={{fontFamily: "Poppins"}}>Description:</Label>
          <Input style={{fontFamily: "Poppins", border: 'solid green 3px'}} width="150px" height='300px' type='text' name='desc' value={desc} onChange={(e) => setDesc(e.target.value)}></Input>
          <br />
    
          <Label htmlFor='petType' style={{fontFamily: "Poppins"}}>Pet Type:</Label>
          <Input style={{fontFamily: "Poppins", border: 'solid green 3px'}} type='select' name='petType' value={petType} onChange={(e) => setPetType(e.target.value)}>
            <option value="FurBaby"style={{fontFamily: "Poppins", color: 'darkorange'}}>  Fur Baby </option>
            <option value="ScaleBaby"style={{fontFamily: "Poppins", color: 'darkturquoise'}}>  Scale Baby </option>
            <option value="ExoticBaby"style={{fontFamily: "Poppins", color: 'green'}}>  Exotic Baby </option>
          </Input>
          <br />

          <Label htmlFor='isPublic' style={{fontFamily: "Poppins"}}>Privacy Setting:</Label>
          <Input style={{fontFamily: "Poppins", border: 'solid green 3px'}} type='select'name='isPublic' value={isPublic} onChange={(e) => setIsPublic(e.target.value)}>
            <option value="false" style={{fontFamily: "Poppins"}}>Private</option>
            <option value="true" style={{fontFamily: "Poppins"}}>Public</option>
          </Input>
          <br />

        </CardBody>
        <Button type='submit' style={{width:"70%", backgroundColor: "tomato", color: "black", fontFamily: "Poppins", margin: '40px', border: 'solid black 3px'}}>Post!</Button>
      </Card>
    </form>
   );
}
 
export default PostCreate;