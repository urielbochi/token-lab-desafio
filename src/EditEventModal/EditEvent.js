import React from "react";
import Modal from "react-modal";


function EditEvent({eventList, eventModal, exitEventModal, editEvent, removeEvent, eventTitle}) {
  return (
    <div>
      <Modal
        className="modal__config"
        isOpen={eventModal}
        onRequestClose={exitEventModal}
      >
        {eventList.map(
          (item, index) =>
            item.title === eventTitle && (
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
                <button onClick={() => editEvent(index)}>Editar</button>
                <button onClick={() => removeEvent(index)}>Remover</button>
              </div>
            )
        )}
      </Modal>
    </div>
  );
}

export default EditEvent;
