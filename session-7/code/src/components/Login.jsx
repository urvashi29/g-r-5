import React, { useState } from "react";
import { login } from "../services/authService";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await login(form.username, form.password);
      localStorage.setItem("token", res.token);
      navigate("/notes")
    }
    catch(err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          placeholder="Username..."
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          placeholder="Password..."
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
