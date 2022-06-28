import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const [dataPicker, setDataPicker] = useState("");
  
  const [calendarModal, setCalendarModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  
  const [eventTitleHolder, setEventTitleHolder] = useState("");
  const [eventDateHolder, setEventDateHolder] = useState();
  const [eventClickId, setEventClickId] = useState();
  const eventHolder = {
    title: "",
    description: "",
    date: dataPicker,
    id: parseInt(eventClickId),
    stTime: "",
    edTime: "",
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
    setEventTitleHolder(clickInfo.event.title);
    setEventDateHolder(clickInfo.event.date)
    setEventClickId(clickInfo.event._def.publicId)
  };
  
  const exitCalendarModal = () => {
    setCalendarModal(false);
    setEventModal(false);
    setEditButtonClicked(false)
  };

  const exitEventModal = () => {
    setEventModal(false);
    setEditButtonClicked(false)
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
        calendarClick,
        dataPicker,
        setDataPicker,
        eventInput,
        setEventInput,
        eventList,
        setEventList,
        eventTitleHolder,
        setEventTitleHolder,
        calendarModal,
        setCalendarModal,
        eventModal,
        exitCalendarModal,
        editButtonClicked,
        exitEventModal,
        eventClick,
        setEventModal,
        openEdit,
        setEditButtonClicked,
        handleLoginChange,
        loginInfo,
        setLoginInfo,
        handleLoginChange,
        userAuthId,
        setUserAuthId,
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
