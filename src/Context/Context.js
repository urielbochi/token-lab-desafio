import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const [dataPicker, setDataPicker] = useState("");

  const [calendarModal, setCalendarModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);

  const [eventTitle, setEventTitle] = useState("");

  const [eventDateHolder, setEventDateHolder] = useState();
  const [eventClickId, setEventClickId] = useState();
  const eventHolder = {
    title: "",
    description: "",
    date: dataPicker,
    id: parseInt(eventClickId),
    st: "",
    et: "",
  };
  const [eventInput, setEventInput] = useState(eventHolder);
  const [eventList, setEventList] = useState([]);

  const [editButtonClicked, setEditButtonClicked] = useState(false);

  const loginHolder = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [loginInfo, setLoginInfo] = useState(loginHolder);
  const [userAuthId, setUserAuthId] = useState();

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const calendarClick = (target) => {
    setDataPicker(target.dateStr);
    setCalendarModal(true);
  };

  const eventClick = (clickInfo) => {
    setEventModal(true);
    setEventTitle(clickInfo.event.title);
    setEventDateHolder(clickInfo.event.date);
    setEventClickId(clickInfo.event._def.publicId);
  };

  console.log(eventClickId)

  const exitCalendarModal = () => {
    setCalendarModal(false);
    setEventModal(false);
    setEditButtonClicked(false);
  };

  const exitEventModal = () => {
    setEventModal(false);
    setEditButtonClicked(false);
  };

  // Edit dependencies (ViewEvent)
  const openEdit = () => {
    setEditButtonClicked(true);
    setEventModal(false);
    setCalendarModal(true);
  };

  return (
    <MyContext.Provider
      value={{

        dataPicker,
        setDataPicker,

        calendarClick,

        eventInput,
        setEventInput,

        eventList,
        setEventList,

        eventTitle,
        setEventTitle,

        calendarModal,
        setCalendarModal,

        eventModal,
        exitCalendarModal,

        editButtonClicked,
        exitEventModal,

        userAuthId,
        setUserAuthId,

        eventClick,
        setEventModal,

        openEdit,
        setEditButtonClicked,

        loginInfo,
        setLoginInfo,
        handleLoginChange,

        setEventDateHolder,
        eventDateHolder,

        eventClickId,
        setEventClickId,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
