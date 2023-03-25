// import { useState } from "react";
// export default function Files({ children, onFilesDrop }) {
//   const [dragging, setDragging] = useState(false);

//   const handleDragEnter = (event) => {
//     event.preventDefault();
//     setDragging(true);
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//     setDragging(true);
//   };

//   const handleDragLeave = () => {
//     setDragging(false);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     setDragging(false);
//     const files = Array.from(event.dataTransfer.files);
//     onFilesDrop(files);
//   };

//   return (
//     <div
//       className="Files"
//       onDragEnter={handleDragEnter}
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDrop={handleDrop}
//       style={{
//         backgroundColor: dragging ? "lightgray" : "white",
//         border: "1px solid black",
//       }}
//     >
//       <p>Drag files</p>
//       {children}
//     </div>
//   );
// }
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
    <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          {/* <p>Selected file: {selectedFile.name}</p> */}
          <button className="mt-2 px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" onClick={handleViewFile}>Open file</button>
          <button className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" onClick={handleDeleteFile}>Delete file</button>
        </div>)}
    </div>
  );
}

