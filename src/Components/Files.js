import React, { useState } from "react";

export default function Files() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
  };
// to view file 
const handleViewFile =()=>{
  window.open(URL.createObjectURL(selectedFile), "_blank")
}
  return (
    <div>
    <input className="mt-2" type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div >
          {/* <p>Selected file: {selectedFile.name}</p> */}
          <button className="mt-2 px-2 py-2 bg-sky-400 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={handleViewFile}>Open file</button>
          <button className="ml-2 px-4 py-2 bg-sky-400 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={handleDeleteFile}>Delete file</button>
        </div>)}
    </div>
  );
}

