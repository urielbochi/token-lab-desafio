import React, { createContext, useState } from "react";

export const EventContext = createContext();

export default function EventProvider({ children }) {
  const [dataPicker, setDataPicker] = useState("");
  const [eventClickId, setEventClickId] = useState();

  const [eventList, setEventList] = useState([]);
  const eventHolder = {
    title: "",
    description: "",
    date: dataPicker,
    id: parseInt(eventClickId),
    st: "",
    et: "",
  };
  const [eventInput, setEventInput] = useState(eventHolder);


  const [calendarModal, setCalendarModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);

  const [eventTitle, setEventTitle] = useState("");
  const [editButtonClicked, setEditButtonClicked] = useState(false);

  const calendarClick = (target) => {
    setDataPicker(target.dateStr);
    setCalendarModal(true);
  };

  const eventClick = (clickInfo) => {
    setEventModal(true);
    setEventClickId(clickInfo.event._def.publicId);
  };

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
    <EventContext.Provider
      value={{
        eventClickId,
        setEventClickId,
        eventInput,
        setEventInput,
        eventList,
        setEventList,
        calendarModal,
        setCalendarModal,
        eventModal,
        setEventModal,
        eventTitle,
        setEventTitle,
        editButtonClicked,
        setEditButtonClicked,
        calendarClick,
        eventClick,
        exitCalendarModal,
        exitEventModal,
        openEdit,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}
