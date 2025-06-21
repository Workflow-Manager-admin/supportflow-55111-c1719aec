import React, { useState } from "react";
import "../../App.css";

// PUBLIC_INTERFACE
function Register({ onRegister }) {
  /** Registration form component for new users */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      setError("All fields required.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    // Placeholder: replace logic with backend API call
    onRegister && onRegister({ email });
  };

  return (
    <div className="auth-container">
      <h2 className="title" style={{ fontSize: "2rem", marginBottom: "16px" }}>
        Register
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
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder="Confirm Password"
          autoComplete="new-password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
        />
        {error && <div className="form-error">{error}</div>}
        <button className="btn btn-large" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
