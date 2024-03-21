import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 text-center w-full footer custom-footer">
      <div className="container mx-auto">
        <p className="text-sm">GENIFY Prompt Generator - Your source for creative inspiration</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
