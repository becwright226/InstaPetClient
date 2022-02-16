import React, { useState } from 'react';
import { 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Modal, 
  ModalBody, 
  ModalHeader } from 'reactstrap';

const PostEdit = (props) => {

  const [editImage, setEditImage] = useState(props.postToUpdate.image);
  const [editDesc, setEditDesc] = useState(props.postToUpdate.desc);
  const [editPetType, setEditPetType] = useState(props.postToUpdate.petType);

  const postUpdate = (e, post) => {
    console.log('button was clicked')
    e.preventDefault();
 

    fetch (`http://localhost:1150/post/${props.postToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({
              desc: editDesc,
              petType: editPetType,
          
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
        }),
      }).then((res) => {
        props.fetchPost();
        props.updateOff();
      })

  }

  return ( 
    <Modal isOpen={true} style={{backgroundColor: 'black', border: 'solid black 3px'}}>
      <ModalHeader style={{fontFamily: 'Moo Lah Lah',borderBottom: 'solid black 3px'}} >Edit your post</ModalHeader>
      <ModalBody style={{backgroundColor: 'darkturquoise'}}>
        <Form onSubmit={postUpdate} style={{backgroundColor: 'orange'}}>
          <FormGroup>
            <Label htmlFor='image'style={{fontFamily: 'Poppins'}} >Edit Image:</Label>
            <Input style={{border: 'solid green 3px', backgroundColor: 'palegoldenrod'}} name='image' value={editImage} onChange={(e) => setEditImage(e.target.value)}></Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='description' style={{fontFamily: 'Poppins'}}>Edit Description:</Label>
            <Input style={{border: 'solid green 3px', backgroundColor: 'palegoldenrod'}} name='desc' value={editDesc} onChange={(e) => setEditDesc(e.target.value)}></Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='petType' style={{fontFamily: 'Poppins'}}>Pet Type</Label>
            <Input style={{border: 'solid green 3px', backgroundColor: 'palegoldenrod'}} type='text' name='petType' value={editPetType} onChange={(e) => setEditPetType(e.target.value)}></Input>
            <select name="options" style={{margin: '20px', borderRadius: '4px', border: 'solid green 2px'}}>
          <option value="FurBaby" >Fur Baby</option>
          <option value="ScaleBaby">Scale Baby</option>
          <option value="ExoticBaby">Exotic Baby</option>
          </select>
          </FormGroup>
         <Button type='submit' style={{backgroundColor: 'tomato', margin: '30px', border: 'solid black 3px'}}>Update your post!</Button>
        </Form>
      </ModalBody>
    </Modal>
   );
}
 
export default PostEdit;