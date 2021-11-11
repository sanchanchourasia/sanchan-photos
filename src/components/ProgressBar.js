import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import "../index.css";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="progress-bar bar-width" style={{ width: progress + '%'  }}>
      {progress + '%'}
    </div>
  );
};

export default ProgressBar;
