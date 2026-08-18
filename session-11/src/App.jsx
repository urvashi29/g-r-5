import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

const STORAGE_KEY = "react-todo-tasks";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Load tasks from Local Storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setTasks(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load tasks from Local Storage:", error);
      setTasks([]);
    }
  }, []);

  // Save tasks to Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (title) => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    const newTask = {
      id: crypto.randomUUID?.() || Date.now().toString(),
      title: trimmedTitle,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
  };

  // Update task title
  const updateTask = (taskId, newTitle) => {
    const trimmedTitle = newTitle.trim();
    if (!trimmedTitle) return;

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, title: trimmedTitle } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  // Toggle task completion
  const toggleComplete = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Clear all completed tasks
  const clearCompleted = () => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => !task.completed)
    );
  };

  // Get filtered tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // Calculate counts
  const totalCount = tasks.length;
  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo App</h1>
          <p className="text-gray-600">Organize your daily tasks</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          {/* Form */}
          <TodoForm onAddTask={addTask} />

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Filters */}
          <TodoFilters currentFilter={filter} onFilterChange={setFilter} />

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Task List */}
          <TodoList
            tasks={filteredTasks}
            onToggleComplete={toggleComplete}
            onUpdateTask={updateTask}
            onDeleteTask={deleteTask}
            filter={filter}
          />

          {/* Summary and Clear */}
          {totalCount > 0 && (
            <>
              <div className="border-t border-gray-200"></div>
              <TodoSummary
                totalCount={totalCount}
                activeCount={activeCount}
                completedCount={completedCount}
                onClearCompleted={clearCompleted}
                hasCompleted={completedCount > 0}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
