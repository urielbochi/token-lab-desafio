import React, { useEffect, useState } from "react";
import Modal from "react-modal";

function CalendarModal({ModalStatus}) {
  const [modalOpen, setModalOpen] = useState(ModalStatus);

  useEffect(() => {

    console.log(ModalStatus)

  }, [ModalStatus])


  console.log(modalOpen)


  const closeForm = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Modal isOpen={modalOpen} onRequestClose={closeForm}>
        <input placeholder="Adicione um evento"></input>
        <button>Adicionar</button>
        <button onClick={() => closeForm()}>Fechar</button>
      </Modal>
    </div>
  );
}

export default CalendarModal;
