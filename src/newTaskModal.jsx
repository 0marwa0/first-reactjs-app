import Modal from "react-bootstrap/Modal";

function NewTaskModal({ showAddModal, setAddModal, name, setName, addTask }) {
  return (
    <div>
      <Modal
        show={showAddModal}
        onHide={() => setAddModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <button onClick={() => setAddModal(false)}>x</button>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button onClick={addTask}>Add</button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NewTaskModal;
