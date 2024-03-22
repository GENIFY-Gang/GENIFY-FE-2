import React, { FC } from 'react';
import './Footer.css';

const Footer: FC<{marginTop?:boolean , bottomFooter?:boolean}>=({marginTop,bottomFooter}) => {
  const footerStyle = bottomFooter ? {marginTop:"19rem"} : { marginTop: marginTop ? "" : "6rem" };
  return (
    <footer className="py-5 text-center w-full footer custom-footer" style={footerStyle}>
      <div className="container mx-auto">
        <p className="text-sm">GENIFY Prompt Generator - Your source for creative inspiration</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
