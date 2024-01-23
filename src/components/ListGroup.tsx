import { MouseEvent, useState } from "react";
import { PencilFill, Plus, Trash3Fill } from "react-bootstrap-icons";
import "../App.css";

function ListGroup() {
  const [tasks, setTasks] = useState([
    "Do dishes",
    "Do laundry",
    "Take Bob to school",
    "Calc III discusion assignment",
    "Read 1 page of 12 Rules For Life",
    "Do daily green square",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleNewTask(e: MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (newTask != "") setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleEditTask(e) {}

  return (
    <>
      <h1 className="">Todo</h1>
      <form className="input-group mb-3 shadow-lg">
        <input
          type="text"
          className=" form-control py-3"
          value={newTask}
          placeholder="Enter a task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-light shadow-sm border px-3"
          onClick={(e) => handleNewTask(e)}
        >
          {" "}
          <Plus></Plus>{" "}
        </button>
      </form>
      <ul className="list-group shadow">
        {tasks.map((item, index) => (
          <li className="list-group-item hover py-3">
            <span className="">
              {item.charAt(0).toUpperCase() + item.substring(1)}
            </span>
            <span className="float-end m-0 p-0 px-1">
              <span
                className="btn p-0 m-0 px-1 ms-1"
                onClick={() => handleEditTask(index)}
              >
                {" "}
                <PencilFill></PencilFill>
              </span>
              <span
                className="btn p-0 m-0 px-1 ms-1 text-danger"
                onClick={() => handleDeleteTask(index)}
              >
                {" "}
                <Trash3Fill />
              </span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
