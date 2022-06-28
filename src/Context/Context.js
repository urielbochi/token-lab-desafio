import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
  const [dataPicker, setDataPicker] = useState("");
  const [dateModal, setDateModal] = useState(false);
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
    setDateModal(true);
  };

  const eventClick = (clickInfo) => {
    setEventModal(true);
    setEventTitleHolder(clickInfo.event.title);
    setEventDateHolder(clickInfo.event.date)
    setEventClickId(clickInfo.event._def.publicId)
  };
  
  const exitModal = () => {
    setDateModal(false);
  };

  const exitEventModal = () => {
    setEventModal(false);
  };

  // Edit dependencies (ViewEvent)
  const openEdit = () => {
    setEditButtonClicked(true);
    setEventModal(false);
    setDateModal(true);
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
        dateModal,
        setDateModal,
        eventModal,
        exitModal,
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
