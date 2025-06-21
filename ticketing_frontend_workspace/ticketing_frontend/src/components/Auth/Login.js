import React, { useState } from "react";
import "../../App.css";

// PUBLIC_INTERFACE
function Login({ onLogin }) {
  /** Login form component for user authentication */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Placeholder: replace logic with backend API call
    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }
    onLogin && onLogin({ email });
  };

  return (
    <div className="auth-container">
      <h2 className="title" style={{ fontSize: "2rem", marginBottom: "16px" }}>
        Login
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          placeholder="Email"
          autoComplete="username"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <div className="form-error">{error}</div>}
        <button className="btn btn-large" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
