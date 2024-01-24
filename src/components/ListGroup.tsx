import { MouseEvent, useState } from "react";
import {
  CheckSquare,
  PencilFill,
  Square,
  Trash3Fill,
} from "react-bootstrap-icons";
import "../App.css";

function ListGroup() {
  const [tasks, setTasks] = useState([
    { task: "Do dishes", done: false, edit: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleNewTask(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    e.preventDefault();
    const newT = { task: newTask, done: false, edit: false };
    if (newTask != "") setTasks([...tasks, newT]);
    setNewTask("");
  }

  function handleTaskStatus(index: number) {
    const t = tasks;
    t[index].done = flip(t[index].done);
    setTasks([...t]);
  }

  function handleEditButton(index: number) {
    const t = tasks;
    t[index].edit = flip(t[index].edit);
    setTasks([...t]);
  }

  function handleEditTask(index: number, target: string) {
    const t = tasks;
    t[index].task = target;
    setTasks([...t]);
  }

  function flip(bool: boolean) {
    return bool ? false : true;
  }
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
            <div className="d-flex flex-row">
              <span className="text-start">
                <span
                  className="rounded-0 checkbox"
                  onClick={() => handleTaskStatus(index)}
                >
                  {taskItem.done ? <CheckSquare /> : <Square />}
                </span>
              </span>
              <form className=" text-start d-block w-100 mx-3">
                {taskItem.edit ? (
                  <input
                    type="text"
                    className="form-control py-0 "
                    value={taskItem.task}
                    onChange={(e) => handleEditTask(index, e.target.value)}
                    onSubmit={() => handleEditButton(index)}
                  ></input>
                ) : (
                  taskItem.task.charAt(0).toUpperCase() +
                  taskItem.task.substring(1)
                )}
              </form>

              <span
                className="btn p-0 m-0 px-1 ms-1"
                onClick={() => handleEditButton(index)}
              >
                <PencilFill></PencilFill>
              </span>
              <span
                className="btn p-0 m-0 px-1 ms-1 text-danger"
                onClick={() => handleDeleteTask(index)}
              >
                <Trash3Fill />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
