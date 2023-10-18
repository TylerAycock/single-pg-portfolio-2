import "./Modal.css";

const Modal = ({ modal, setModal }) => {
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={() => setModal(!modal)}></div>
          <div className="modal-content">
            <h3>Message Sent!</h3>
            <button onClick={() => setModal(!modal)}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
