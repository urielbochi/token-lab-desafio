import React from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const handleDate = (target) => {
    console.log(target.dateStr);
  };
  return (
    <div>
      <FullCalendar
        plugins={[daygridPlugin, interactionPlugin]}
        dateClick={handleDate}
      />
    </div>
  );
}

export default Calendar;
