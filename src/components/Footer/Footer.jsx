/*import React from "react";

import "./FooterStyles.css"

const FooterBar = () => (
  <footer className="footer">
    <p> &copy 2022 groupapppro </p>
  </footer>
);

export default FooterBar; */
import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const FooterBar = (props) => {
  
    
    return (
        <MDBFooter bgColor='green' className='text-center text-lg-left' style={{marginTop: "688px", fontFamily: 'Poppins', color: 'white'}}>
      <div className='text-center p-3' style={{ backgroundColor: 'green' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          App Materials
        </a>
      </div>
    </MDBFooter>
  );
  
    }
  export default FooterBar;