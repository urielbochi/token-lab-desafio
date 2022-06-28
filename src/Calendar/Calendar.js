import React, { useContext, useEffect, useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CreateEvent from "../CreateEventModal/CreateEvent";
import ViewEventModal from "../ViewEventModal/EditEvent";
import { MyContext } from "../Context/Context";
import { getEvents, getUser } from "../Services/fetchAPI";
import { useNavigate } from "react-router-dom";

function Calendar() {
  const { calendarClick, eventClick, eventList, setEventList } =
    useContext(MyContext);

  const [userIdData, setUserIdData] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("userToken"));
    const recieve = async () => {
      const user = await getUser(setUserIdData, userToken);
    };

    recieve();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents(userIdData, setEventList);
    };

    fetchData();
  }, [userIdData]);

  if (!eventList || eventList === []) {
    return <div>Loading...</div>;
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
      <CreateEvent userTokenId={userIdData} />
      <ViewEventModal />
    </div>
  );
}

export default Calendar;
