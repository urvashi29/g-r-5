import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../action/action";

const TaskInput = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");
  const dispatch = useDispatch();

  const handleTask = () => {
    //restructuring of object
    const task = { title, status };
    // dispatch a action to reducer
    dispatch(addTask(task)); //action
  };

  return (
    <>
      <label>Title</label>
      <input
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="todo">Todo</option>
        <option value="done">done</option>
      </select>

      <button onClick={handleTask}>Add Task</button>
    </>
  );
};

export default TaskInput;
