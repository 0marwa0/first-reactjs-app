import Modal from "react-bootstrap/Modal";

function NewTaskModal({ showModal, setShow, setTaskName, addTask }) {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <button onClick={() => setShow(false)}>x</button>
          <input
            type="text"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          />
          <button onClick={addTask}>Add</button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NewTaskModal;
