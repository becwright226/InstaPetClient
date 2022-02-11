import React, { useState } from 'react';
import { Container, FormGroup, Input } from 'reactstrap';


const Uploading = (props) => {

  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const UploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'images');
    setLoading(true);
    const res = await fetch (
      'https://api.cloudinary.com/v1_1/akel4/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const File = await res.json();

    console.log(File)
  }


  return ( 
    <div>
      <Container>
        <h1>Hello from uploading</h1>
        <h1>Upload your pet pic!</h1>
        <FormGroup>
          <Input type='file' name='file' placeholder='Upload pet pic here!' onChange={UploadImage} />
        </FormGroup>
      </Container>
    </div>
   );
}
 
export default Uploading;