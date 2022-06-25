import React, { useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CreateEvent from "../CreateEventModal/CreateEvent";
import EditEvent from "../EditEventModal/EditEvent";

function Calendar() {
  const [dataPicker, setDataPicker] = useState("");
  const [eventTitleHolder, setEventTitleHolder] = useState("");

  const [dateModal, setDateModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);

  const eventHolder = {
    title: "",
    description: "",
    date: dataPicker,
    stTime: "",
    edTime: "",
  };
  const [eventInput, setEventInput] = useState(eventHolder);
  const [eventList, setEventList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const exitModal = () => {
    setDateModal(false);
  };

  const exitEventModal = () => {
    setEventModal(false);
  };

  const handleDate = (target) => {
    setDataPicker(target.dateStr);
    setDateModal(true);
  };

  const handleEvent = (clickInfo) => {
    setEventModal(true);
    setEventTitleHolder(clickInfo.event.title);
    console.log(clickInfo);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEventInput({
      ...eventInput,
      [name]: value,
      date: dataPicker,
    });
  };

  const addToList = () => {
    setDateModal(false);
    setEventInput({});
    setEventList([...eventList, eventInput]);
  };

  const removeEvent = (id) => {
    const newData = [...eventList];
    newData.splice(id, 1);
    setEventList(newData);
    setEventModal(false);
  };

  const editEvent = (id) => {
    const newData = [...eventList];
    newData[id] = eventInput;
    setEventList(newData);
    setIsClicked(true);
  };

  return (
    <div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          className="calendar-set"
          plugins={[daygridPlugin, interactionPlugin]}
          dateClick={handleDate}
          eventClick={handleEvent}
          displayEventTime={true}
          events={eventList.map((item) => {
            return item;
          })}
        />
      </div>
      <CreateEvent
        dateModal={dateModal}
        exitModal={exitModal}
        handleChange={handleChange}
        addEvent={addToList}
      />
      <EditEvent
        eventList={eventList}
        eventModal={eventModal}
        exitEventModal={exitEventModal}
        editEvent={editEvent}
        removeEvent={removeEvent}
        eventTitle={eventTitleHolder}
      />
    </div>
  );
}

export default Calendar;
