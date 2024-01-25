import { useState } from "react";
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
    { task: "Do laundry", done: false, edit: false },
    { task: "Create a food list", done: false, edit: false },
  ]);
  const [finishedTasks, setFinishedTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleDeleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function handleNewTask(e) {
    e.preventDefault();
    const newT = { task: newTask, done: false, edit: false };
    if (newTask != "") setTasks([...tasks, newT]);
    setNewTask("");
  }

  function handleTaskStatus(index: number) {
    let t = tasks;
    // let fT = finishedTasks

    t[index].done = flip(t[index].done);
    // t = t.filter((_, i) => i != index);
    setTasks([...t]);

    // fT = tasks.filter((_, i) => i == index);
    // fT[index].done = flip(fT[index].done);
    // setFinishedTasks([...finishedTasks,...fT])
  }

  function handleEditButton(index) {
    let t = tasks;
    t[index].edit = flip(t[index].edit);

    setTasks([...t]);
  }

  function handleEditTask(index, target) {
    let t = tasks;
    t[index].task = target;
    setTasks([...t]);
  }

  function handle();

  function flip(bool) {
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
        {tasks
          .filter((item) => !item.done)
          .map((taskItem, index) => (
            <li
              key={index}
              className={
                taskItem.done
                  ? "list-group-item hover py-3 done"
                  : "list-group-item hover py-3 user-select-none"
              }
            >
              <div className="d-flex flex-row">
                <span className="text-start">
                  <span
                    className="rounded-0 checkbox"
                    onClick={() => handleTaskStatus(index)}
                  >
                    {taskItem.done ? <CheckSquare /> : <Square />}
                  </span>
                </span>
                <form
                  className=" text-start d-block w-100 mx-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEditButton(index);
                  }}
                >
                  {taskItem.edit ? (
                    <input
                      type="text"
                      className="form-control py-0 "
                      value={taskItem.task}
                      onChange={(e) => handleEditTask(index, e.target.value)}
                      onBlur={() => handleEditButton(index)}
                      autoFocus
                    ></input>
                  ) : (
                    <span onClick={() => handleEditButton(index)}>
                      {taskItem.task.charAt(0).toUpperCase() +
                        taskItem.task.substring(1)}
                    </span>
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
      <h1 className="mt-5 mb-3">Completed</h1>
      <ul className="list-group shadow">
        {tasks
          .filter((item) => item.done)
          .map((taskItem, index) => (
            <li
              key={index}
              className={
                taskItem.done
                  ? "list-group-item hover py-3 done"
                  : "list-group-item hover py-3 user-select-none"
              }
            >
              <div className="d-flex flex-row">
                <span className="text-start">
                  <span
                    className="rounded-0 checkbox"
                    onClick={() => handleTaskStatus(index)}
                  >
                    {taskItem.done ? <CheckSquare /> : <Square />}
                  </span>
                </span>
                <form
                  className=" text-start d-block w-100 mx-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEditButton(index);
                  }}
                >
                  {taskItem.edit ? (
                    <input
                      type="text"
                      className="form-control py-0 "
                      value={taskItem.task}
                      onChange={(e) => handleEditTask(index, e.target.value)}
                      onBlur={() => handleEditButton(index)}
                      autoFocus
                    ></input>
                  ) : (
                    <span onClick={() => handleEditButton(index)}>
                      {taskItem.task.charAt(0).toUpperCase() +
                        taskItem.task.substring(1)}
                    </span>
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
