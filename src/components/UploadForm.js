import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import ProgressBar from './ProgressBar';


export const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg","image/webp", "image/gif", ];

  const changrHandler = (e) => {
    //console.log('file selected');
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError("Please select an image file (png || gif || jpeg)");
    }
  };
  return (
    <div>
      <form>
        <label>
          <input type="file" onChange={changrHandler} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error"> {error} </div>}
          {file && <div> {file.name} </div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
          {file && <ImageGrid file={file} setFile={setFile} />}

        </div>
      </form>
    </div>
  );
};
