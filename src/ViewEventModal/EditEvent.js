import React, { useContext } from "react";
import Modal from "react-modal";
import { EventContext } from "../Context/EventContext";
import CreateEvent from "../CreateEventModal/CreateEvent";
import { deleteEvent } from "../Services/EventHandler";

function ViewEventModal({}) {
  const {
    eventList,
    setEventList,
    eventModal,
    setEventModal,
    exitEventModal,
    openEdit,
    editButtonClicked,
    eventClickId,
  } = useContext(EventContext);

  // const frontDeleteEvent = (eventClickId) => {
  //   const newData = [...eventList];
  //   const findIndex = newData.findIndex((item) => item.id === eventClickId);
  //   newData.splice(findIndex, 1);
  //   setEventList(newData);
  // };

  const frontDeleteEvent = (eventClickId) => {
    const newData = eventList.filter(
      (item) => parseInt(item.id) !== parseInt(eventClickId)
    );
    setEventList(newData);
  };

  return (
    <div>
      <Modal
        className="modal__config"
        isOpen={eventModal}
        onRequestClose={exitEventModal}
      >
        <div
          className="modal-close cursor-pointer flex justify-end"
          onClick={() => exitEventModal()}
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
        {eventList.map(
          (item) =>
            parseInt(item.id) === parseInt(eventClickId) && (
              <div>
                <h1 className="font__desert text-5xl mb-5 text-center">
                  Evento agendado
                </h1>
                <h3 className="font__desert text-center font-black">
                  Nome do evento
                </h3>
                <h3 className="mb-5 text-center">{item.title}</h3>
                <h3 className="font__desert text-center font-black">
                  Descrição
                </h3>
                <h3 className="mb-5 text-center">{item.description}</h3>
                <h3 className="text-center font__desert font-black">Inicio</h3>
                <h3 className="mb-5 text-center">{item.st}h</h3>
                <h3 className="text-center font__desert font-black">Término</h3>
                <h3 className="text-center">{item.et}h</h3>
                <div className="flex justify-center mt-5">
                  <button
                    onClick={() => {
                      deleteEvent(eventClickId);
                      frontDeleteEvent(eventClickId);
                      setEventModal(false);
                    }}
                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete
                  </button>

                  <button
                    onClick={() => openEdit()}
                    className="inline-flex ml-5 items-center px-6 py-2 bg-green-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Edit
                  </button>
                </div>
              </div>
            )
        )}
        {editButtonClicked && <CreateEvent />}
      </Modal>
    </div>
  );
}

export default ViewEventModal;
