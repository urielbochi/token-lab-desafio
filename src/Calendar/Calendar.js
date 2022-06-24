import React, { useEffect, useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";

function Calendar() {
  const [dataPicker, setDataPicker] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const eventHolder = {
    title: "",
    date: dataPicker,
  };
  const [eventInput, setEventInput] = useState(eventHolder);
  const [eventList, setEventList] = useState([]);

  const handleDate = (target) => {
    setDataPicker(target.dateStr);
    setModalStatus(true);
    console.log(target)
  };

  const exitModal = () => {
    setModalStatus(false);
  };

  const addToList = () => {
    setModalStatus(false);
    setEventInput({});
    setEventList([...eventList, eventInput]);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEventInput({
      ...eventInput,
      [name]: value,
      date: dataPicker,
    });
  };

  const removeEvent = (id) => {
    const newData = [...eventList];
    newData.splice(id, 1);
    setEventList(newData);
  };

  return (
    <div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          className="calendar-set"
          plugins={[daygridPlugin, interactionPlugin]}
          dateClick={handleDate}
          events={eventList.map((item) => {
            return item;
          })}
        />
      </div>
      <Modal
        className="modal__config"
        isOpen={modalStatus}
        onRequestClose={exitModal}
      >
        <input
          name="title"
          onChange={handleChange}
          placeholder="Adicione um evento"
        ></input>
        <button onClick={() => addToList()}>Adicionar</button>
        <button onClick={() => exitModal()}>Fechar</button>
        {eventList.map((item, index) => item.date === dataPicker && <div>
          <h3>{item.title}</h3>
          <h3 onClick={() => removeEvent(index)}>Remover</h3>
        </div>)}
      </Modal>
    </div>
  );
}

export default Calendar;
