import { MouseEvent, useState } from "react";
import {
  Check,
  CheckSquare,
  PencilFill,
  Plus,
  Square,
  Trash3Fill,
} from "react-bootstrap-icons";
import "../App.css";

function ListGroup() {
  const [tasks, setTasks] = useState([{ task: "Do dishes", done: false }]);
  const [newTask, setNewTask] = useState("");

  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleNewTask(e) {
    e.preventDefault();
    const newT = { task: newTask, done: false };
    if (newTask != "") setTasks([...tasks, newT]);
    setNewTask("");
  }

  function handleTaskStatus(index) {
    let t = tasks;
    t[index].done = flip(t[index].done)
    setTasks([...t]);
  }

  function flip(bool){
    return bool? false:true;
  }

  function handleEditTask(e) {}

  return (
    <>
      <h1 className="mt-5 mb-3">Todo</h1>
      <form className="input-group mb-2 shadow-lg">
        <input
          type="text"
          className=" form-control py-3 z-2"
          value={newTask}
          placeholder="Enter a task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-light shadow-sm border px-3 z-3 position-relative"
          onClick={(e) => handleNewTask(e)}
        >
          {" Add"}
        </button>
      </form>
      <ul className="list-group shadow">
        {tasks.map((taskItem, index) => (
          <li key={index} className="list-group-item hover py-3">
            <span className="pe-2 ps-0">
              <span
                className="rounded-0 checkbox"
                onClick={() => handleTaskStatus(index)}
              >
                {taskItem.done ? (
                  <CheckSquare className="" />
                ) : (
                  <Square className="" />
                )}
              </span>
            </span>

              {taskItem.edit ? textbox:  <span className="">taskItem.task.charAt(0).toUpperCase() +
                taskItem.task.substring(1)  </span>}

            <span className="float-end m-0 p-0 px-1">
              <span
                className="btn p-0 m-0 px-1 ms-1"
                onClick={() => handleEditTask(tasks[index])}
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
