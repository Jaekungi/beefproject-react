import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function LoginComponent() {
  const { login } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    console.log("first");
    try {
      e.preventDefault();
      const result = await login(username, password);
      console.log(result);
      if (result) {
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <div
        className="card rounded p-4 p-3"
        style={{
          width: "400px",
        }}
      >
        <h3>Login</h3>
        <div className="mb-3">
          <label>UserName</label>
          <input
            type="username"
            className="form-control"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3"></div>
        <div className="d-grid">
          <button onClick={handleSubmit} className="btn btn-primary mb-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
