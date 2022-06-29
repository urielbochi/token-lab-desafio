import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { EventContext } from "../Context/EventContext";
import { postEvent } from "../Services/EventHandler";
import { editEvent } from "../Services/EventHandler";

function CreateEvent({ userTokenId }) {
  const {
    eventList,
    setEventList,
    eventInput,
    setEventInput,
    calendarModal,
    setCalendarModal,
    exitCalendarModal,
    dataPicker,
    editButtonClicked,
    eventClickId,
    setEventClickId,
  } = useContext(EventContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEventInput({
      ...eventInput,
      [name]: value,
      date: dataPicker,
      id: eventClickId,
    });
  };

  const frontEditEvent = () => {
    const newData = [...eventList];
    const findIndex = newData.findIndex(
      (item) => parseInt(item.id) === parseInt(eventClickId)
    );
    let dateHolder = newData[findIndex].date;
    eventInput.date = dateHolder;
    newData[findIndex] = eventInput;
    setEventList(newData);
  };

  return (
    <div>
      <Modal
        className="modal__config"
        isOpen={calendarModal}
        onRequestClose={exitCalendarModal}
      >
        <div
          className="modal-close cursor-pointer flex justify-end"
          onClick={() => exitCalendarModal()}
        >
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
        {editButtonClicked ? (
          <h1 className="h-11 text-center text-5xl mb-10 font__desert">
            Editar Evento
          </h1>
        ) : (
          <h1 className="h-11 text-center text-5xl mb-20 font__desert">
            Adicionar Evento
          </h1>
        )}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="title"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Título do evento
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Descrição
          </label>
        </div>
        <div className="flex justify-center">
          <div className="timepicker relative form-floating mb-3 xl:w-96">
            <input
              type="time"
              name="st"
              onChange={handleChange}
              className="form-control block px-3 py-1.5 w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Select a date"
            />
            <label htmlFor="floatingInput" className="text-gray-700">
              Selecione o horário de início⠀⠀
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="timepicker relative form-floating mb-3 xl:w-96">
            <input
              type="time"
              name="et"
              onChange={handleChange}
              className="form-control block px-3 py-1.5 w-full text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Select a date"
            />
            <label htmlFor="floatingInput" className="text-gray-700">
              Selecione o horário de término
            </label>
          </div>
        </div>
        <div className="flex justify-center">
          {!editButtonClicked && (
            <button
              onClick={() => {
                postEvent(
                  eventInput,
                  eventList,
                  setEventList,
                  userTokenId,
                  dataPicker
                );
                setCalendarModal(false);
                setEventInput({});
              }}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Adicionar
              </span>
            </button>
          )}
        </div>
        <div className="flex justify-center">
          {editButtonClicked && (
            <button
              onClick={() => {
                editEvent(eventInput, eventList, setEventList, eventClickId);
                frontEditEvent();
                setCalendarModal(false);
                setEventClickId("");
              }}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Editar
              </span>
            </button>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default CreateEvent;
