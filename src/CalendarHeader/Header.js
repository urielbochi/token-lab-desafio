import React from "react";
import tokenLab from "../Images/tklab.png";

function CalendarHeader() {
  return (
    <nav className="container flex justify-center px-4 py-8 mx-auto bg-white">
      <div className="flex justify-center content-center">
        <img className="text-center" src={tokenLab} />
      </div>
    </nav>
  );
}

export default CalendarHeader;
