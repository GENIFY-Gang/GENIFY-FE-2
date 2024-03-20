// Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-gray-200 py-4 text-center fixed bottom-0 w-full">
      <div className="container mx-auto">
        <p className="text-sm">GENIFY Prompt Generator - Your source for creative inspiration</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
