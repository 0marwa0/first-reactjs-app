import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import EditTaskModal from "./editTaskModal";

function List({ tasks, deletItem, onSave, selectedItem, setSelectedItem }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <ListGroup>
        {tasks.map((item) => (
          <ListGroup.Item>
            <p>{item.name}</p>
            <FaRegTrashAlt
              size={20}
              color="red"
              onClick={() => deletItem(item.id)}
            />
            <FaEdit
              onClick={() => {
                setShowEditModal(true);
                setSelectedItem(item.name);
                setSelectedId(item.id);
              }}
              size={20}
              color="green"
              className="mx-3"
            />
          </ListGroup.Item>
        ))}
      </ListGroup>

      <EditTaskModal
        onSave={onSave}
        selectedId={selectedId}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
      />
    </div>
  );
}

export default List;
