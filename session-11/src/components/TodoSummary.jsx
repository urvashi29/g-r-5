export default function TodoSummary({
  totalCount,
  activeCount,
  completedCount,
  onClearCompleted,
  hasCompleted,
}) {
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-700 text-sm">
        <span className="font-medium">{totalCount}</span> tasks •{" "}
        <span className="font-medium">{activeCount}</span> active •{" "}
        <span className="font-medium">{completedCount}</span> completed
      </div>
      {hasCompleted && (
        <button
          onClick={onClearCompleted}
          className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          aria-label="Clear all completed tasks"
        >
          Clear Completed
        </button>
      )}
    </div>
  );
}
