import Modal from "react-bootstrap/Modal";

function EidtTaskModal({
  showEditModal,
  setEditdModal,
  editItem,
  setEditItem,
  updateItem,
}) {
  return (
    <div>
      <Modal
        show={showEditModal}
        onHide={() => setEditdModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <button onClick={() => setEditdModal(false)}>x</button>
          <input
            type="text"
            value={editItem}
            onChange={(e) => {
              setEditItem(e.target.value);
            }}
          />
          <button onClick={updateItem}>save</button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EidtTaskModal;
