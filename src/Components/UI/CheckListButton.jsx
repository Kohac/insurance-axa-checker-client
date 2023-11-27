import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import FileUploadButton from "./FileUploadButton";

function CheckListButtons() {
  const [selectedDate, setSelectedDate] = useState(null);

  const CustomInput = ({ value, onClick }) => (
    <button className="btn btn-outline-dark " onClick={onClick}>
      {value || "Select Month/Year"}
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
      <div className="col-sm-3">
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary">Zobrazit vše</button>
        </div>
      </div>
      <div className="col-sm-9 d-flex justify-content-end">
        <div className="btn-group">
          <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            customInput={<CustomInput />}
          />
          <FileUploadButton />
        </div>
      </div>
    </div>
  );
}

export default CheckListButtons;
