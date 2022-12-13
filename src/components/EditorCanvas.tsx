import React, { useState } from 'react';

const EditorCanvas = () => {
  const [fileLoaded, setFileLoaded] = useState(false);
  const [file, setFile] = useState<string>();

  const handleChange = (e) => {
    const test = URL.createObjectURL(e.target.files[0]);
    setFile(test);

  }
  return (
    <div>
      {file
        ? <img src={file} alt='User-uploaded map.'/>
        : <input 
          type='file' 
          onChange={(e) => handleChange(e)}
      />}
    </div>
  ) 
}

export default EditorCanvas;