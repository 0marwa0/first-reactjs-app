import React from "react";

function List({ data, deleteItem, setEditItem, setEditdModal, setSelectedId }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title}

          <button
            onClick={() => {
              setEditdModal(true);
              setEditItem(item.title);
              setSelectedId(item.id);
            }}
          >
            edit
          </button>
          <button onClick={() => deleteItem(item.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
