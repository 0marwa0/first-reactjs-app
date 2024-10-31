import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./list";
import NewTaskModal from "./newTaskModal";
import EidtTaskModal from "./editModal";
function App() {
  // state for show/hide the modal
  const [showModal, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taksText, setTaskText] = useState("");
  const [showEidt, setShowEidt] = useState(false);
  const [selecteId, setSelectedId] = useState(null);
  const [editItem, setEditItem] = useState("");
  // create add function
  function addTask() {
    // add new input as task using push
    let newTasks = [...tasks];
    newTasks.push({ title: taksText, id: Math.random(4) });
    setTasks(newTasks);
  }

  function deleteItem(id) {
    let filteredTasks = tasks.filter((item) => {
      return item.id != id;
    });
    setTasks(filteredTasks);
  }
  function updateItem() {
    let updatedTasks = tasks.map((item) => {
      if (item.id == selecteId) {
        return { ...item, title: editItem };
      } else {
        return item;
      }
    });
    setTasks(updatedTasks);
  }
  return (
    <div>
      <button onClick={() => setShow(true)}>+</button>
      <List
        data={tasks}
        editItem={editItem}
        setEditItem={setEditItem}
        deleteItem={deleteItem}
        setEditdModal={setShowEidt}
        setSelectedId={setSelectedId}
      />
      <NewTaskModal
        showAddModal={showModal}
        setAddModal={setShow}
        name={taksText}
        setName={setTaskText}
        addTask={addTask}
      />
      <EidtTaskModal
        showEditModal={showEidt}
        editItem={editItem}
        setEditItem={setEditItem}
        setEditdModal={setShowEidt}
        updateItem={updateItem}
      />
    </div>
  );
}
export default App;
