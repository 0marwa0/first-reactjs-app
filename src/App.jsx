import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Button, ListGroup } from "react-bootstrap";
import SearchUI from "./search";
import List from "./list";
function App() {
  const [showModal, setShow] = useState(false);

  return (
    <div>
      <SearchUI />
      <List />
      <button onClick={() => setShow(true)}>+</button>
      {/* {showModal ? (
        <img src="https://media.istockphoto.com/id/1045035708/vector/duckling-simple-vector-icon.jpg?s=612x612&w=0&k=20&c=DPyR6_meVD32JBRKEZiwrAkn0kFY5PT4qxiQblfqkjs=" />
      ) : (
        "no image"
      )} */}

      <Modal
        show={showModal}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default App;
