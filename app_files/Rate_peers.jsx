import React from 'react';
import Rate_peers_Comprehensive_Form from './Rate_peers/Rate_peers_Comprehensive_Form';
import Common_Header from './common/Common_Header';
import Common_Footer from './common/Common_Footer';

const RatePeersPage = () => {
  return (
    <div>
      <Common_Header />
      <Rate_peers_Comprehensive_Form />
      <Common_Footer />
    </div>
  );
};

export default RatePeersPage;