import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckListModal from "./CheckListModal";

function CheckListButtons() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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

  const CustomInput = ({ value, onClick }) => (
    <button type="button" className="btn btn-outline-dark" onClick={onClick}>
      {value || "Vyber měsíc/rok"}
    </button>
  );

  const handleChange = (date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const formattedDate = `${month}/${year}`;
    console.log("Selected Date:", formattedDate);
    setSelectedDate(date);
  };
  return (
    <div className="mt-3 mb-3 row">
      <CheckListModal isOpen={modalOpen} onClose={closeModal} />
      <div className="col-sm-3">
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={openModal}>
            Zobrazit vše
          </button>
        </div>
      </div>
      <div className="col-sm-9 d-flex justify-content-end">
        <div className="btn-group" role="group" aria-label="Basic example">
          <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            customInput={<CustomInput />}
            className="btn btn-outline-dark"
          />
          <div className="file-input-wrapper">
            <input
              style={{ maxWidth: "280px" }}
              type="file"
              className="btn btn-secondary"
              onChange={handleFileChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleFileUpload}>
            Nahrát soubor
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckListButtons;
