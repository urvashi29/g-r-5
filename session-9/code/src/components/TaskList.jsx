import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  // access central state
  const tasks = useSelector((state) => state.todo_list);

  return (
    <div>
      {tasks.map((task) => (
        <div>
          {task.title} = {task.status}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
