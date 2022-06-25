import React, { useContext, useState } from "react";
import Modal from "react-modal";
import CreateEvent from "../CreateEventModal/CreateEvent";
import { MyContext } from "../Context/Context";

function ViewEventModal({}) {
  const {
    eventList,
    setEventList,
    eventModal,
    setEventModal,
    exitEventModal,
    openEdit,
    eventTitleHolder,
    editButtonClicked,
  } = useContext(MyContext);

  const removeEvent = (id) => {
    const newData = [...eventList];
    newData.splice(id, 1);
    setEventList(newData);
    setEventModal(false);
  };


  return (
    <div>
      <Modal
        className="modal__config"
        isOpen={eventModal}
        onRequestClose={exitEventModal}
      >
        {eventList.map(
          (item, index) =>
            item.title === eventTitleHolder && (
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
                <h3 className="mb-5 text-center">{item.stTime}h</h3>
                <h3 className="text-center font__desert font-black">Término</h3>
                <h3 className="text-center">{item.edTime}h</h3>
                <button onClick={() => openEdit()}>Editar</button>
                <button onClick={() => removeEvent(index)}>Remover</button>
              </div>
            )
        )}
        {editButtonClicked && <CreateEvent />}
      </Modal>
    </div>
  );
}

export default ViewEventModal;
