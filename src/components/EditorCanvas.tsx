import React, {useState} from 'react';

const EditorCanvas = () => {
  const [fileLoaded, setFileLoaded] = useState(false);
  const [file, setFile] = useState(undefined);

  const handleUpload = (e) => {
    setFileLoaded(true);
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    const reader = new FileReader();
    // URL.createObjectURL(file);
  }
  return (
    <div>
      {fileLoaded 
        ? <img src={file} alt='User-uploaded map.'/>
        : <input 
          type='file' 
          onChange={(e) => handleUpload(e)}
      />}
    </div>
  ) 
}

export default EditorCanvas;