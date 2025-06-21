import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Main/Dashboard";

// App level state for demo, replace with context/store for production
function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container" style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="logo">
                  <span className="logo-symbol">*</span> TICKETING
                </div>
              </Link>
              <div>
                {user ? (
                  <>
                    <span className="navbar-user">{user.email}</span>
                    <button className="btn" style={{ marginLeft: 16 }} onClick={() => setUser(null)}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <button className="btn" style={{ marginRight: 8 }}>
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="btn">
                        Register
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="container" style={{ marginTop: 80 }}>
            <Routes>
              <Route path="/" element={user ? <Dashboard user={user}/> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login onLogin={setUser} />} />
              <Route path="/register" element={<Register onRegister={setUser} />} />
              {/* Add more routes for ticket editing, etc. */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;