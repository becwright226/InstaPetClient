import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Input,
  Button
} from 'reactstrap';

const PostCreate = (props) => {

  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');
  const [petType, setPetType] = useState('');
  const [isPublic, setIsPublic] = useState(Boolean);

  function handleSubmit(e) {
    e.preventDefault();
    const requestObject = {
      image: image,
      desc: desc,
      petType: petType,
      isPublic: isPublic,
    };

    fetch ("http://localhost:1150/post/create",{
      method:"POST",
      body: JSON.stringify(requestObject),
      headers: new Headers({
          "Content-Type":"application/json",
          "Authorization": props.token
      }),
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setImage('')
    setDesc('')
    setPetType('')
    setIsPublic(Boolean)
    props.fetchPost();
    console.log("Things are working, don't panic")
})
  }

  return ( 
    <div style={{width: '180px', height: '225px', border: 'solid 3px orange'}}>
      <Card onSubmit={handleSubmit}>
        <CardImg UploadImage={props.UploadImage}>
        </CardImg>
          <br />
          <br />
          <br />
          <br />

        <CardBody width="150px">
          <Input width="150px" height='300px' type='text' name='desc' value={desc} onChange={(e) => setDesc(e.target.value)}></Input>
        </CardBody>
        <Button type='submit'>Share Your Pet's Pic!</Button>
        </Card>
    </div>
   );
}
 
export default PostCreate;