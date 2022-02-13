import React, { useState, useEffect } from 'react';

import { Container, FormGroup, Input } from 'reactstrap';


const Uploading = (props) => {
  
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  
  const formatImageUrl = url => {
    //convert .heic file urls to .jpg file
    return url.replace('.heic', '.jpg')
  }

  const UploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'instapet');
    setLoading(true);
    const res = await fetch (
      'http://api.cloudinary.com/v1_1/akel4/image/upload',
      {
        method: 'POST',
        body: data,
      }
    )
    const File = await res.json()

    console.log(File)
    const formattedImageUrl = formatImageUrl(File.secure_url)
    setImage(formattedImageUrl)
    setLoading(false)
  }


  return ( 
    <div>
      <Container>
        <FormGroup>
          <Input type='file' name='file' placeholder='Upload pet pic here!' onChange={UploadImage} />
          <br />
          {loading ? (<h3>Loading...</h3>) : <img src={image} style={{width: '300px'}}/>}
        </FormGroup>
      </Container>
    </div>
   );
}
 
export default Uploading;