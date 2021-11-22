import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import ProgressBar from "./ProgressBar";

export const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const types = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "image/gif",
  ];

  let verifyPassword = (e) => {
    let password = "xyz@@@zyx";
    let confrimpassword = e.target.value;
    if (password === confrimpassword) {
      alert("password Match");
      setSubmitDisabled(false);
    }
  };

  const changrHandler = (e) => {
    //console.log('file selected');
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
      setSubmitDisabled(true);
    } else {
      setFile(null);
      setError("Please select an image file (png || gif || jpeg)");
      setSubmitDisabled(false);
    }
  };
  return (
    <div>
      <form>
        <input type="password" placeholder="Admin Password...!!" onChange={verifyPassword} />
        <label>
          <input
            type="file"
            onChange={changrHandler}
            disabled={submitDisabled}
          />
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
