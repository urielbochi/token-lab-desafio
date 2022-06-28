import React, { useContext, useEffect, useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CreateEvent from "../CreateEventModal/CreateEvent";
import ViewEventModal from "../ViewEventModal/EditEvent";
import { MyContext } from "../Context/Context";
import { getUser } from "../Services/UserHandler";
import { getEvents } from "../Services/EventHandler";
import { useNavigate } from "react-router-dom";
import CalendarHeader from "../CalendarHeader/Header";

function Calendar() {
  const { calendarClick, eventClick, eventList, setEventList } =
    useContext(MyContext);
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  const nav = useNavigate();
  const [userIdData, setUserIdData] = useState();

  useEffect(() => {
    const getUserIdData = async () => {
      const user = await getUser(setUserIdData, userToken);
    };

    if (!userIdData && !userToken) {
      nav("/login");
    }

    getUserIdData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents(userIdData, setEventList);
    };

    fetchData();
  }, [userIdData]);

  return (
    <div>
      <CalendarHeader />
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
      <CreateEvent userTokenId={userIdData} />
      <ViewEventModal />
    </div>
  );
}

export default Calendar;
