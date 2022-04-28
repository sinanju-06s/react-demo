import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Fazer(param) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deletar() {
    setModalIsOpen(true);
  }

  function fecharModal(){
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{param.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deletar}>
          {" "}
          Remover{" "}
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={fecharModal} onConfirm={fecharModal}/> }
      {/* pode ser usado como modelIsOpen && <Modal /> */}
      {modalIsOpen && <Backdrop onClick={fecharModal}/>}
    </div>
  );
}

export default Fazer;
