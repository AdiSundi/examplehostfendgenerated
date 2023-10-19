import React from 'react';
import Submit_my_solution_File_Upload_Dropzone from './Submit_my_solution/Submit_my_solution_File_Upload_Dropzone';
import Common_Header from './common/Common_Header';
import Common_Footer from './common/Common_Footer';

const SubmitMySolutionPage = () => {
  return (
    <div>
      <Common_Header />
      <div>
        <Submit_my_solution_File_Upload_Dropzone />
      </div>
      <Common_Footer />
    </div>
  );
};

export default SubmitMySolutionPage;