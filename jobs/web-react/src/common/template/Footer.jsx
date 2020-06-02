import React from 'react';
import Link from '@material-ui/core/Link';


export default function Footer() {

  return (
    <div
      className="footer"
      component="footer"
    >
      <div className="credits">
      Programa da Autoridade Certificadora 
        &copy;<Link component="a" href="http://google.com.br" targer="_blank">
             JOBS, 2020.
        </Link>
      </div>
    </div>
  );
};
