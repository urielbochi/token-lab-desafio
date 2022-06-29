import React from "react";
import tokenLab from "../Images/tklab.png";
import './Header.css'

function CalendarHeader() {
  return (
    <div className="mb-10">
      <div className="flex justify-center content-center header__color ">
        <img src={tokenLab} />
      </div>
    </div>
  );
}

export default CalendarHeader;
