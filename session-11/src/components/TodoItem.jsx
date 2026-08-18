import { useState } from "react";

export default function TodoItem({
  task,
  onToggleComplete,
  onUpdateTask,
  onDeleteTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.title);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdateTask(task.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(task.title);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <li className="flex gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-label="Edit task text"
        />
        <button
          onClick={handleSave}
          className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          aria-label="Save task"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="px-3 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition-colors"
          aria-label="Cancel editing"
        >
          Cancel
        </button>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
        className="w-5 h-5 text-blue-500 rounded cursor-pointer"
        aria-label={`Mark "${task.title}" as ${
          task.completed ? "incomplete" : "complete"
        }`}
      />
      <span
        className={`flex-1 break-words ${
          task.completed ? "task-completed" : ""
        }`}
      >
        {task.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 text-sm bg-blue-400 text-white rounded hover:bg-blue-500 transition-colors"
          aria-label={`Edit "${task.title}"`}
        >
          Edit
        </button>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="px-3 py-1 text-sm bg-red-400 text-white rounded hover:bg-red-500 transition-colors"
          aria-label={`Delete "${task.title}"`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
