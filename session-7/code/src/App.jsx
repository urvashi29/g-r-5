import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Notes from "./components/Notes";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default App;
