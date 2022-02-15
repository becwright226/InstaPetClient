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
    <Modal isOpen={true}>
      <ModalHeader>Edit your post</ModalHeader>
      <ModalBody>
        <Form onSubmit={postUpdate}>
          <FormGroup>
            <Label htmlFor='image'>Edit Image:</Label>
            <Input name='image' value={editImage} onChange={(e) => setEditImage(e.target.value)}></Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='description'>Edit Description:</Label>
            <Input name='desc' value={editDesc} onChange={(e) => setEditDesc(e.target.value)}></Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor='petType' />
            <Input type='text' name='petType' value={editPetType} onChange={(e) => setEditPetType(e.target.value)}></Input>
            <select name="options">
          <option value="FurBaby">Fur Baby</option>
          <option value="ScaleBaby">Scale Baby</option>
          <option value="ExoticBaby">Exotic Baby</option>
          </select>
          </FormGroup>
         <Button type='submit'>Update your post!</Button>
        </Form>
      </ModalBody>
    </Modal>
   );
}
 
export default PostEdit;