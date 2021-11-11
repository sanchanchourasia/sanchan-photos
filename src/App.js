import React from 'react';
import './index.css';
import Title from './components/Title';
import { UploadForm } from './components/UploadForm';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div>
      <Title />
      <UploadForm />
      <ImageGrid />
      
    </div>
  );
}

export default App;
