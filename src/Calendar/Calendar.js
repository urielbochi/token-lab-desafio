import React, { useEffect, useRef, useState } from "react";
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
    description: "",
    date: dataPicker,
  };
  const [eventInput, setEventInput] = useState(eventHolder);
  const [eventList, setEventList] = useState([]);

  const handleDate = (target) => {
    setDataPicker(target.dateStr);
    setModalStatus(true);
  };

  const exitModal = () => {
    setModalStatus(false);
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
    setModalStatus(false);
    setEventInput({});
    setEventList([...eventList, eventInput]);
  };

  const removeEvent = (id) => {
    const newData = [...eventList];
    newData.splice(id, 1);
    setEventList(newData);
  };

  const editEvent = (id) => {
    const newData = [...eventList];
    newData[id] = eventInput;
    setEventList(newData);
  };

  return (
    <div>
      <div style={{ position: "relative", zIndex: 0 }}>
        <FullCalendar
          className="calendar-set"
          plugins={[daygridPlugin, interactionPlugin]}
          dateClick={handleDate}
          displayEventTime={true}
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
        <h1 className="h-11 text-center text-5xl mb-10">Adicionar evento</h1>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="title"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Título do evento
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="description"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Descrição
          </label>
        </div>
        <div className="flex flex-col mt-5">
          <button onClick={() => addToList()} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Adicionar
            </span>
          </button>
          <button class="relative inline-flex mb-7 items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Fechar
            </span>
          </button>
        </div>
        <h1 className="text-center text-5xl">Eventos agendados</h1>
        <p className="text-center">{dataPicker}</p>
        {eventList.map(
          (item, index) =>
            item.date === dataPicker && (
              <div className="text-center">
                <h3 className="font-black text-2xl">Nome do evento</h3>
                <h3>{item.title}</h3>
                <h3 className="font-black text-2xl">Descrição</h3>
                <h3 className="mb-5">{item.description}</h3>
                <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Remover evento</button>
                <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Editar evento</button>
              </div>
            )
        )}
      </Modal>
    </div>
  );
}

export default Calendar;
