import React, { useState } from "react";

function ListGroup() {
  const [tasks, setTasks] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
  ]);

  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  return (
    <>
      <h1 className="">Todo</h1>
      <div className=" input-group mb-2 shadow">
        <input
          type="text"
          className=" form-control"
          placeholder="Enter a task"
        />{" "}
        <input type="button" value="Add" className="btn bg-secondary-subtle" />
      </div>
      <ul className="list-group">
        {tasks.map((item, index) => (
          <li className="list-group-item">
            <span className="py-">
              {item.charAt(0).toUpperCase() + item.substring(1)}
            </span>
            <span className="float-end btn btn-danger m-0 p-0 px-1">
              <span
                className="btn btn-close p-0 m-0"
                onClick={() => handleDeleteTask(index)}
              ></span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
