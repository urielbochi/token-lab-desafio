import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function ContextProvider({ children }) {
    const [dataPicker, setDataPicker] = useState("");
    const eventHolder = {
      title: "",
      description: "",
      date: dataPicker,
      stTime: "",
      edTime: "",
    };
  const [eventInput, setEventInput] = useState(eventHolder);
  const [eventList, setEventList] = useState([]);
  const [eventTitleHolder, setEventTitleHolder] = useState("");
  const [dateModal, setDateModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [editButtonClicked, setEditButtonClicked] = useState(false);


  const exitModal = () => {
    setDateModal(false);
  };

  const exitEventModal = () => {
    setEventModal(false);
  };

  const calendarClick = (target) => {
    setDataPicker(target.dateStr);
    setDateModal(true);
  };

  const eventClick = (clickInfo) => {
    setEventModal(true);
    setEventTitleHolder(clickInfo.event.title);
    console.log(clickInfo);
  };

  const openEdit = () => {
    setEditButtonClicked(true)
    setEventModal(false)
    setDateModal(true)
  }

  return <MyContext.Provider value={{
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
    setEditButtonClicked
  }}>{children}</MyContext.Provider>;
}
