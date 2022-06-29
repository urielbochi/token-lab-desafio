import React, { useContext, useEffect, useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CreateEvent from "../CreateEventModal/CreateEvent";
import ViewEventModal from "../ViewEventModal/EditEvent";
import { getUser } from "../Services/UserHandler";
import { getEvents } from "../Services/EventHandler";
import { useNavigate } from "react-router-dom";
import CalendarHeader from "../CalendarHeader/Header";
import { EventContext } from "../Context/EventContext";
import { AuthContext } from "../Context/Context";

function Calendar() {
  const { calendarClick, eventClick, eventList, setEventList } =
    useContext(EventContext);

  const { accountStatus, setAccountStatus } = useContext(AuthContext);
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  const nav = useNavigate();
  const [userIdData, setUserIdData] = useState();

  useEffect(() => {
    const getUserIdData = async () => {
      const user = await getUser(setUserIdData, userToken, setAccountStatus);
    };

    if (!userIdData && !userToken) {
      nav("/login");
    }

    getUserIdData();
  }, []);

  useEffect(() => {
    const recoverUserEvents = async () => {
      const data = await getEvents(userIdData, setEventList);
    };
    recoverUserEvents();
  }, [userIdData]);

  const logout = () => {
    localStorage.removeItem("userToken");
    nav("/login");
    setAccountStatus("");
  }

  return (
    <div>
      <CalendarHeader />
      <div className="flex justify-center pl-5 mb-20">
        <h1 className="text-xl px-8 font__desert hover:bg-sky-200">Account</h1>
        <a
          href="https://www.tokenlab.com.br/pt/about-us"
          rel="noreferrer"
          target="_blank"
          className="text-xl px-8 font__desert hover:bg-sky-200"
        >
          About us
        </a>
        <h1 onClick={() => logout()} className="cursor-pointer px-8 text-xl font__desert hover:bg-sky-200">Logout</h1>
      </div>
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
