# React Todo App

A responsive Todo application built with **ReactJS**, **JavaScript/JSX**, **Vite**, and **Tailwind CSS**.

> This README is the complete implementation specification for generating the application from scratch. Build every required feature described below and include this README in the final project.

---

## 1. Project Goal

Build a frontend-only Todo application where users can:

- Add tasks
- View tasks
- Update task text
- Delete tasks
- Mark tasks as active or completed
- Filter tasks by status
- Clear completed tasks
- Keep tasks after a browser refresh using Local Storage

The app should be clean, responsive, accessible, and easy to maintain.

---

## 2. Tech Stack

Use:

- ReactJS
- JavaScript
- JSX files
- Vite
- Tailwind CSS
- Browser Local Storage
- npm

Do **not** use:

- TypeScript
- Backend APIs
- Express
- Databases
- Firebase
- Supabase
- Redux
- Authentication
- Bootstrap
- Material UI
- Chakra UI

Keep dependencies minimal.

---

## 3. Core Features

### Add Task

Provide:

- A task input
- An `Add Task` button
- Enter-key submission

Rules:

- Task text is required.
- Trim leading/trailing whitespace.
- Do not add blank or whitespace-only tasks.
- Clear the input after a successful addition.

Recommended task model:

```js
{
  id: "unique-id",
  title: "Task title",
  completed: false,
  createdAt: "ISO-date-string"
}
```

Prefer `crypto.randomUUID()` for IDs when available.

---

### View Tasks

Each task should display:

- Completion checkbox
- Task title
- Edit button
- Delete button

Completed tasks should have a visible completed style, such as:

- Line-through text
- Reduced text emphasis

Long task names must wrap safely.

---

### Update Task

When the user clicks `Edit`:

1. Switch that task into edit mode.
2. Show its current title in an input.
3. Provide `Save` and `Cancel`.
4. Save only valid non-empty text.
5. Trim whitespace before saving.
6. `Cancel` must restore the original value.

Only the intended task should be updated.

---

### Delete Task

Clicking `Delete` must:

- Remove only the selected task
- Update the UI immediately
- Update Local Storage immediately

A confirmation dialog is optional.

---

### Mark Complete / Active

Use a checkbox or equivalent accessible control.

A task can switch between:

- Active
- Completed

Status changes must immediately update:

- Task styling
- Task counts
- Filter results
- Local Storage

---

### Filter Tasks

Provide three filters:

- **All**
- **Active**
- **Completed**

Behavior:

```js
All       -> every task
Active    -> task.completed === false
Completed -> task.completed === true
```

Clearly highlight the selected filter.

Filtering must never modify or delete task data.

---

### Clear Completed

When completed tasks exist, provide a `Clear Completed` action.

It must:

- Delete all completed tasks
- Keep all active tasks
- Update Local Storage

---

## 4. Task Summary

Show live counts, for example:

```txt
5 tasks • 3 active • 2 completed
```

Counts must update automatically when tasks are added, edited, deleted, completed, reactivated, or cleared.

---

## 5. Local Storage

This app is frontend-only. Persist tasks in browser Local Storage.

Use this key:

```txt
react-todo-tasks
```

Required flow:

```txt
App starts
   ↓
Read Local Storage
   ↓
Initialize React state
   ↓
User changes tasks
   ↓
Update React state
   ↓
Save updated tasks to Local Storage
   ↓
Render latest UI
```

Requirements:

- Load saved tasks when the application starts.
- Start with an empty list if no saved data exists.
- Save every task change.
- Tasks must remain after page refresh.
- Malformed stored JSON must not crash the application.
- If stored data cannot be parsed safely, fall back to an empty task list.

---

## 6. Empty States

Do not display an unexplained blank list.

Examples:

No tasks:

```txt
No tasks yet. Add your first task above.
```

No active tasks:

```txt
No active tasks.
```

No completed tasks:

```txt
No completed tasks.
```

The message should match the selected filter.

---

## 7. UI Requirements

Use Tailwind CSS for styling.

Create a modern, minimal interface with:

- Centered app container
- Clear app title
- Optional short subtitle
- Comfortable spacing
- Rounded controls
- Subtle borders/shadows
- Clear hover states
- Clear keyboard-focus states
- Visible selected-filter state
- Visible completed-task state
- Good color contrast
- Responsive layout

Suggested structure:

```txt
--------------------------------------
               Todo App
       Organize your daily tasks
--------------------------------------

[ Enter a task...          ] [ Add ]

[ All ] [ Active ] [ Completed ]

--------------------------------------
[ ] Build React app       Edit Delete
[x] Review tasks          Edit Delete
[ ] Deploy project        Edit Delete
--------------------------------------

3 tasks • 2 active • 1 completed

                       Clear Completed
--------------------------------------
```

Use this only as a layout reference. Build a polished UI rather than rendering the ASCII design.

Avoid:

- Heavy animations
- Excessive gradients
- Too many colors
- Tiny text
- Unnecessary decorative UI
- Unnecessary icon libraries

---

## 8. Responsive Design

The app must work well on:

- Mobile
- Tablet
- Laptop
- Desktop

Requirements:

- Use a sensible maximum container width.
- Stack the input/button on narrow screens when needed.
- Keep task controls usable on mobile.
- Allow long task text to wrap.
- Avoid horizontal scrolling.
- Keep buttons comfortably clickable.

---

## 9. Accessibility

Use semantic HTML.

Requirements:

- Use a `<form>` for adding tasks.
- Use `<button>` elements for actions.
- Associate labels with inputs.
- Use an accessible checkbox/control for completion.
- Provide visible focus states.
- All primary features must be keyboard accessible.
- Add `aria-label` to icon-only buttons.
- Do not rely only on color to communicate status.

Do not create clickable actions using plain `<div>` elements.

---

## 10. React Requirements

Use functional components and React Hooks.

Recommended hooks:

```js
useState
useEffect
```

Use `useMemo` only if it meaningfully improves clarity.

Recommended top-level state:

```js
const [tasks, setTasks] = useState([]);
const [filter, setFilter] = useState("all");
```

Additional local state may be used for:

- New task input
- Edit mode
- Edited task text

Never mutate React state directly.

Use immutable updates.

Example:

```js
setTasks((currentTasks) =>
  currentTasks.map((task) =>
    task.id === taskId
      ? { ...task, completed: !task.completed }
      : task
  )
);
```

---

## 11. Component Structure

Recommended structure:

```txt
src/
├── components/
│   ├── TodoForm.jsx
│   ├── TodoFilters.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   └── TodoSummary.jsx
├── App.jsx
├── main.jsx
└── index.css
```

Responsibilities:

### `App.jsx`

Handle:

- Main task state
- Filter state
- Local Storage
- Add task
- Update task
- Delete task
- Toggle completion
- Clear completed
- Filtered task calculation

### `TodoForm.jsx`

Handle:

- New task input
- Input validation
- Form submission

### `TodoFilters.jsx`

Handle:

- All
- Active
- Completed
- Active-filter styling

### `TodoList.jsx`

Handle:

- Rendering filtered tasks
- Empty-state messaging

### `TodoItem.jsx`

Handle:

- Task display
- Completion toggle
- Edit mode
- Save/cancel
- Delete

### `TodoSummary.jsx`

Handle:

- Total count
- Active count
- Completed count
- Clear Completed

Component boundaries can be adjusted if the final code remains clean and understandable.

---

## 12. Project Structure

Expected project structure:

```txt
react-todo-app/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoFilters.jsx
│   │   ├── TodoList.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoSummary.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

Do not create `.ts` or `.tsx` files.

---

# 13. Installation

## Prerequisites

Install Node.js and npm.

For current Vite releases, use a supported modern Node.js version. If Vite reports a Node compatibility warning, upgrade Node before continuing.

Check installation:

```bash
node -v
npm -v
```

---

## Create the React App

Run:

```bash
npm create vite@latest react-todo-app -- --template react
```

Enter the project:

```bash
cd react-todo-app
```

Install dependencies:

```bash
npm install
```

---

# 14. Tailwind CSS Setup

Install Tailwind CSS and its Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

Update `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

In `src/index.css`:

```css
@import "tailwindcss";
```

Use Tailwind utility classes in the JSX components.

---

# 15. Run the App

Start development mode:

```bash
npm run dev
```

Open the local URL displayed by Vite.

---

# 16. Production Build

Create a production build:

```bash
npm run build
```

Production files should be generated in:

```txt
dist/
```

Preview the production build:

```bash
npm run preview
```

---

# 17. Expected npm Scripts

Keep the standard Vite scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

---

# 18. Edge Cases

Handle all of these:

- Empty task submission
- Whitespace-only task submission
- Empty edit submission
- Whitespace-only edit submission
- Cancelled edit
- Deleting the only task
- Completing the last active task while viewing `Active`
- Reactivating a task while viewing `Completed`
- Clearing all completed tasks
- Refreshing after tasks are saved
- No Local Storage data
- Malformed Local Storage JSON
- Very long task text
- Large numbers of tasks

The app must not crash in these cases.

---

# 19. Code Quality

The generated project must:

- Use clear component names.
- Use meaningful function/variable names.
- Avoid duplicate logic.
- Avoid unused imports.
- Avoid unused variables.
- Avoid unnecessary dependencies.
- Avoid direct state mutation.
- Keep components reasonably small.
- Have no obvious console errors.
- Use `.jsx` for React components.
- Use Tailwind consistently.
- Remain beginner-friendly and maintainable.

Suggested function names:

```js
addTask()
updateTask()
deleteTask()
toggleTask()
clearCompletedTasks()
```

Equivalent clear names are acceptable.

---

# 20. Codex Instructions

Use this README as the source of truth for generating the project.

Codex should:

1. Create the complete application from scratch.
2. Use Vite + React.
3. Use JavaScript and JSX only.
4. Install and configure Tailwind CSS.
5. Implement every required Todo feature.
6. Persist tasks with Local Storage.
7. Use reusable React components.
8. Create a responsive interface.
9. Follow accessibility requirements.
10. Keep dependencies minimal.
11. Not create a backend.
12. Not use TypeScript.
13. Not use Redux or another state-management library.
14. Not leave placeholder functionality.
15. Not leave required features as TODO comments.
16. Not substitute pseudocode for working code.
17. Ensure all imports resolve.
18. Ensure `npm install` succeeds.
19. Ensure `npm run dev` starts the application.
20. Ensure `npm run build` succeeds.
21. Remove obvious console warnings/errors.
22. Include this README in the completed project.

---

# 21. Acceptance Criteria

The application is complete only when:

- [ ] `npm install` completes successfully.
- [ ] `npm run dev` starts the app.
- [ ] `npm run build` succeeds.
- [ ] React components use `.jsx`.
- [ ] Tailwind CSS is working.
- [ ] User can add tasks.
- [ ] Empty tasks cannot be added.
- [ ] User can edit tasks.
- [ ] Empty edits cannot be saved.
- [ ] User can cancel editing.
- [ ] User can delete tasks.
- [ ] User can mark tasks completed.
- [ ] User can reactivate completed tasks.
- [ ] `All` filter works.
- [ ] `Active` filter works.
- [ ] `Completed` filter works.
- [ ] Selected filter is visually clear.
- [ ] `Clear Completed` works.
- [ ] Task counts are accurate.
- [ ] Empty states are displayed.
- [ ] Tasks survive page refresh.
- [ ] Invalid Local Storage data does not crash the app.
- [ ] UI is responsive on mobile.
- [ ] UI is responsive on desktop.
- [ ] Primary controls are keyboard accessible.
- [ ] No TypeScript is used.
- [ ] No backend is created.
- [ ] No unnecessary state-management library is used.

---

# 22. Final Expected Experience

The user should be able to:

```txt
Add → View → Complete → Edit → Filter → Delete
```

tasks through a clean responsive interface, with all task data preserved locally between browser sessions.

Implementation priorities:

1. Correct functionality
2. Clear React architecture
3. Maintainable JSX
4. Responsive Tailwind styling
5. Accessibility
6. Reliable Local Storage persistence
