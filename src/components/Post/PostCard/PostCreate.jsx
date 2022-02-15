import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Input,
  Button,
  Label
} from 'reactstrap';
import { FaPaw } from 'react-icons/fa';

import Uploading from '../Uploading';

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

    fetch ("http://localhost:1150/post/",{
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
    <form onSubmit={handleSubmit} style={{border: 'solid 3px orange', height: '500px', width: '400px'}} >
      <Card style={{margin: '50px', float: 'left'}}>
        <Uploading setImage={setImage} image={image} width= '30%' height= '30%'/>
        <CardImg src='' value={image} onChange={(e) => setImage(props.formattedImageUrl)} />

        <CardBody width="150px">
          <Label htmlFor='description'>Description:</Label>
          <Input width="150px" height='300px' type='text' name='desc' value={desc} onChange={(e) => setDesc(e.target.value)}></Input>
          <br />
    
          <Label htmlFor='petType'>Pet Type:</Label>
          <Input type='select' name='petType' value={petType} onChange={(e) => setPetType(e.target.value)}>
            <option value="FurBaby">FurBaby</option>
            <option value="ScaleBaby">ScaleBaby</option>
            <option value="ExoticBaby">ExoticBaby</option>
          </Input>
          <br />

          <Label htmlFor='isPublic'>Privacy Setting:</Label>
          <Input type='select'name='isPublic' value={isPublic} onChange={(e) => setIsPublic(e.target.value)}>
            <option value="false">Private</option>
            <option value="true">Public</option>
          </Input>
          <br />

        </CardBody>
        <Button type='submit'>Post!</Button>
      </Card>
    </form>
   );
}
 
export default PostCreate;