import React, { useState } from "react";
import axios from "axios";

function NotesUploader() {
  const [file, setFile] = useState(null);

  const handleUpload = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    await axios.post("http://localhost:5000/api/notes/upload", formData, {
      headers: { 
        "Content-Type": "multipart/form-data", 
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      }
    });
    alert("Uploaded!");
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" accept=".pdf,image/*" onChange={e => setFile(e.target.files[0])} required />
      <button type="submit">Upload Note</button>
    </form>
  );
}

export default NotesUploader;
