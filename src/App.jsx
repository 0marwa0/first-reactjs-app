import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, ListGroup } from "react-bootstrap";
import SearchUI from "./search";
import List from "./list";
import NewTaskModal from "./newTaskModal";
function App() {
  // state for show/hide the modal
  const [showModal, setShow] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    let myTasks = [...tasks];
    myTasks.push({ name: taskName, id: Math.random(4) });

    setTasks(myTasks);
  }

  function deletItem(id) {
    // filter the array base on the id
    // kick the item of that id out
    let filterdTasks = tasks.filter((item) => item.id != id);

    // update tasks state using setTasks
    setTasks(filterdTasks);
  }
  return (
    <div>
      <button onClick={() => setShow(true)}>+</button>

      <List tasks={tasks} deletItem={deletItem} />

      <NewTaskModal
        showModal={showModal}
        setShow={setShow}
        setTaskName={setTaskName}
        addTask={addTask}
      />
    </div>
  );
}
export default App;
