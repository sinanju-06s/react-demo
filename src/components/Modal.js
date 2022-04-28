function Modal(props) {
  function cancelarHandler() {
    props.onCancel()
  }
  function confirmarHandler() {
    props.onConfirm()
  }

  return (
    <div className="modal">
      <p>Tem certeza</p>
      <button className="btn btn--alt" onClick={cancelarHandler}>Cancelar</button>
      <button className="btn" onClick={confirmarHandler}>Confirmar</button>
    </div>
  );
}

export default Modal;
