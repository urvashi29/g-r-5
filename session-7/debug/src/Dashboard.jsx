import { useState } from "react";
import StudentList from "./StudentList";

export default function Dashboard() {
  const [likes, setLikes] = useState(0);
  const [course, setCourse] = useState("React Fundamentals");

  console.log("%cDashboard rendered", "color: #059669; font-weight: bold");

  function changeCourse() {
    setCourse((currentCourse) =>
      currentCourse === "React Fundamentals"
        ? "Advanced React"
        : "React Fundamentals",
    );
  }

  return (
    <section className="page-card">
      <div className="dashboard-heading">
        <div>
          <span className="eyebrow">PAGE 1</span>
          <h2>Course Dashboard</h2>
        </div>
      </div>

      <div className="status-banner warning">
        <strong>Profiler activity</strong>
        <span>
          Open Inspect → Components → Profiler, record, and then increase the
          likes.
        </span>
      </div>

      <div className="control-grid">
        <article className="control-card">
          <span>Parent-only state</span>
          <h3>Course likes: {likes}</h3>
          <button onClick={() => setLikes((current) => current + 1)}>
            Increase Likes
          </button>
          <small>The StudentList props do not change.</small>
        </article>

        <article className="control-card">
          <span>Child prop</span>
          <h3>{course}</h3>
          <button className="secondary" onClick={changeCourse}>
            Change Course
          </button>
          <small>StudentList should render because its prop changes.</small>
        </article>
      </div>

      <StudentList course={course} />
    </section>
  );
}
