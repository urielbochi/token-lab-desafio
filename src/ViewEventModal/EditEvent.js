import React, { useContext, useEffect } from "react";
import Modal from "react-modal";
import CreateEvent from "../CreateEventModal/CreateEvent";
import { MyContext } from "../Context/Context";
import { deleteEvent } from "../Services/EventHandler";

function ViewEventModal({}) {
  const {
    eventList,
    eventModal,
    exitEventModal,
    openEdit,
    eventTitle,
    editButtonClicked,
    eventClickId,
  } = useContext(MyContext);

  return (
    <div>
      <Modal
        className="modal__config"
        isOpen={eventModal}
        onRequestClose={exitEventModal}
      >
        {eventList.map(
          (item) =>
            item.id === parseInt(eventClickId) && (
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
                <button onClick={() => openEdit()}>Editar</button>
                <button onClick={() => deleteEvent(eventClickId)}>
                  Remover
                </button>
              </div>
            )
        )}
        {editButtonClicked && <CreateEvent />}
      </Modal>
    </div>
  );
}

export default ViewEventModal;
