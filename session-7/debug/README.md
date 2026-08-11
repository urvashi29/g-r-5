# React Profiler and memo Classroom Demo

A small two-page React application for demonstrating unnecessary component
renders through the React Developer Tools Profiler and then fixing the issue
with `memo` during class.

The starter code intentionally does **not** use `memo` and does not include the
`<Profiler>` component in the source code.

## Run the project

1. Install Node.js 20.19 or newer.
2. Open a terminal in this project folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL displayed in the terminal.
5. Open the browser console and React Developer Tools.

## Classroom demonstration: before memo

1. Right-click the page and select **Inspect**.
2. Open the **Profiler** tab provided by React Developer Tools.
3. Start recording.
4. Click **Increase Likes** three times and stop recording.
5. Observe that both `Dashboard` and `StudentList` rendered even though the
   `course` prop did not change.

## Live fix: add memo

Open `src/StudentList.jsx` and make these two changes.

At the top of the file, add:

```jsx
import { memo } from "react";
```

Change the final export from:

```jsx
export default StudentList;
```

to:

```jsx
export default memo(StudentList);
```

Save the file, start a new Profiler recording, and click **Increase Likes**
again. `Dashboard` should render, but `StudentList` should be skipped because
its `course` prop has not changed.

Finally, click **Change Course**. `StudentList` should render because its prop
has changed. This shows that `memo` skips unnecessary renders without blocking
necessary ones.

## Console colors

- Blue: `App` rendered.
- Green: `Dashboard` rendered.
- Red: `StudentList` rendered.
- Purple: `AboutPage` rendered.

## Teaching note

`memo` is a performance optimization. It can skip a render when the component's
props are unchanged. A memoized component can still render when its own state,
consumed context, or props change.

`StrictMode` is intentionally omitted from `main.jsx` so development-only
double render behavior does not distract beginners during this demonstration.
