import React, { useContext, useEffect, useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CreateEvent from "../CreateEventModal/CreateEvent";
import ViewEventModal from "../ViewEventModal/EditEvent";
import { MyContext } from "../Context/Context";
import { getEvents } from "../Services/fetchAPI";

function Calendar() {
  const { calendarClick, eventClick, eventList, setEventList, cookies } =
    useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      const userCookieId = cookies.userId
      const data = await getEvents(userCookieId, setEventList);
    };
    fetchData()
  }, []);

  if (!eventList || eventList === []) {
    return(
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          className="calendar-set"
          plugins={[daygridPlugin, interactionPlugin]}
          dateClick={calendarClick}
          eventClick={eventClick}
          displayEventTime={true}
          events={eventList.map((item) => {
            return item;
          })}
        />
      </div>
      <CreateEvent />
      <ViewEventModal />
    </div>
  );
}

export default Calendar;
