import React, { useState, useEffect } from 'react';

import { Container, FormGroup, Input } from 'reactstrap';


const Uploading = (props) => {
  const { image, setImage } = props 
  const [loading, setLoading] = useState(false);
  console.log("Hellooooooooo")
  const formatImageUrl = url => {
    //convert .heic file urls to .jpg file
    return url.replace('.heic', '.jpg')
  }

  const UploadImage = async (e) => {
    debugger
    console.log("button clicked")
    const files = e.target.files
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'instapet');
    setLoading(true);
    const res = await fetch (
      'http://api.cloudinary.com/v1_1/groupapppro/image/upload',

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
        <h1 style={{fontFamily: 'Moo Lah Lah', marginTop: '20px'}}>Post your pic !</h1>
        <FormGroup>
          
          <input type='file' name='file' placeholder='Upload pet pic' onChange={UploadImage}/>
          <br />
          {loading ? (<h3>Loading...</h3>) : <img alt='' src={image} style={{width: '50%'}}/>}
        </FormGroup>
      </Container>
    </div>
   );
}
 
export default Uploading;