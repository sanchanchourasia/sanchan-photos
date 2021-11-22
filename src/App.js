import React, { useState } from 'react';
import './index.css';
import Title from './components/Title';
import { UploadForm } from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import PracticeStateHooks from './Practice File/practiceFile';


function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }

      {/* <PracticeStateHooks /> */}
    </div>
  );
}

export default App;