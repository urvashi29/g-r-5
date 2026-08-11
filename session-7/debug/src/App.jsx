import { useState } from "react";
import Dashboard from "./Dashboard";

function AboutPage() {
  console.log("%cAboutPage rendered", "color: #7c3aed");

  return (
    <section className="page-card">
      <span className="eyebrow">PAGE 2</span>
      <h2>About This Demo</h2>
      <p>
        This small application shows how a child component can render when its
        parent state changes, even when the child receives the same props.
      </p>

      <div className="concept-grid">
        <article>
          <h3>Profiler</h3>
          <p>
            Use the Profiler tab in React Developer Tools to record component
            renders and rendering time.
          </p>
        </article>
        <article>
          <h3>memo</h3>
          <p>
            Add memo during the lesson to skip the child render when its props
            have not changed.
          </p>
        </article>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  console.log("%cApp rendered", "color: #2563eb; font-weight: bold");

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">CLASSROOM APPLICATION</p>
          <h1>React Profiler + memo</h1>
          <p className="subtitle">
            Find an unnecessary render in DevTools, then fix it with memo.
          </p>
        </div>

        <nav aria-label="Application pages">
          <button
            className={currentPage === "dashboard" ? "nav-active" : ""}
            onClick={() => setCurrentPage("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={currentPage === "about" ? "nav-active" : ""}
            onClick={() => setCurrentPage("about")}
          >
            About
          </button>
        </nav>
      </header>

      {currentPage === "dashboard" ? <Dashboard /> : <AboutPage />}
    </main>
  );
}
