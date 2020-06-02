import React from 'react';
import Button from '@material-ui/core/Button';

export default function Login({ children }) {

  return (
    <>
      <div className="outside-navbar">
        <Button color="inherit">Site</Button>
      </div>
      <div className="container-login">
        <div className="overlay"></div>
        <div className="content-login">
          {children}
        </div>
      </div>
    </>
  );
}