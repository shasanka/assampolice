import React from 'react';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import SubmissionForm from './components/SubmissionForm';

function App() {
  return (
    <div className="App">
      {/* FOR LOGO */}
      {/* <Header/> */}
      {/* IMAGE CAROUSEL */}
     <ImageCarousel/>
     {/* SUBMISSION FORM */}
     <SubmissionForm/>
    </div>
  );
}

export default App;
