import React, { useState } from "react";

const FileUploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      console.log(selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);

      //   fetch("your-api-endpoint", {
      //     method: "POST",
      //     body: formData,
      //   })
      //     .then((response) => response.json())
      //     .then((data) => {
      //       console.log("File uploaded successfully:", data);
      //     })
      //     .catch((error) => {
      //       console.error("Error uploading file:", error);
      //     });
      // } else {
      //   console.error("No file selected");
    }
  };

  return (
    <div className="btn-group">
      <input
        style={{ maxWidth: "280px" }}
        type="file"
        className="btn btn-secondary"
        onChange={handleFileChange}
      />
      <button className="btn btn-primary" onClick={handleFileUpload}>
        Nahrát soubor
      </button>
    </div>
  );
};

export default FileUploadButton;
