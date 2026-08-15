import React from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";
import AllTasks from "./components/AllTasks";
const App = () => {
  return (
    <>
      <TaskInput />
      <TaskList />
      <AllTasks />
    </>
  );
};

export default App;

// TASK
// CRUD: add, delete, edit, filter based on status
// uuid: to generate and add new id
