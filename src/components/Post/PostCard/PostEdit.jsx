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
    const { desc, petType, isPublic } = props.requestObject
    const { image } = props.formattedImageUrl

    fetch (`http://localhost:1150/post/${props.postToUpdate.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post: {
              image: image,
              desc: desc,
              petType: petType,
              isPublic: isPublic,
          }
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
          <option value="FurBaby">FurBaby</option>
          <option value="ScaleBaby">ScaleBab</option>
          <option value="ExoticBaby">ExoticBaby</option>
          </select>
          </FormGroup>
         <Button type='submit'>Update your post!</Button>
        </Form>
      </ModalBody>
    </Modal>
   );
}
 
export default PostEdit;