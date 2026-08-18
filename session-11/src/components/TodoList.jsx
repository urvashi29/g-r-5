import TodoItem from "./TodoItem";

export default function TodoList({
  tasks,
  onToggleComplete,
  onUpdateTask,
  onDeleteTask,
  filter,
}) {
  if (tasks.length === 0) {
    let emptyMessage = "No tasks yet. Add your first task above.";
    if (filter === "active") {
      emptyMessage = "No active tasks.";
    } else if (filter === "completed") {
      emptyMessage = "No completed tasks.";
    }

    return (
      <div className="text-center py-8 text-gray-500">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <ul className="space-y-2" role="list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
