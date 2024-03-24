// NotFound.js

import React from 'react';
import errorImage from '../../Photos/Error.jpg'; 

const NotFound = () => {
  return (
    <div className='Error-page'>
      <h1>404 - Not Found</h1>
      <img src={errorImage} alt="Error" />
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
