import React from 'react';
import Common_Header from './common/Common_Header';
import Common_Footer from './common/Common_Footer';
import Solutions_Items_Cards_Display from './Solutions/Solutions_Items_Cards_Display';

const Solutions = () => {
  return (
    <>
      <Common_Header />
      
      <div className="page-container">
        <div className="components-grid">
          <Solutions_Items_Cards_Display />
        </div>
      </div>
      
      <Common_Footer />
    </>
  );
};

export default Solutions;