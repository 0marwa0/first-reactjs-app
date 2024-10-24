import ListGroup from "react-bootstrap/ListGroup";
import { FaRegTrashAlt } from "react-icons/fa";

function List({ tasks, deletItem }) {
  return (
    <ListGroup>
      {tasks.map((item) => (
        <ListGroup.Item>
          <p>{item.name}</p>
          <FaRegTrashAlt
            size={20}
            color="red"
            onClick={() => deletItem(item.id)}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default List;
