import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { Register } from './components/Register';

// --- Mock user data for login ---
const mockUsers = [
  { username: "admin", password: "admin123", role: "admin", name: "Admin" },
  { username: "hr", password: "hr123", role: "hr", name: "HR Officer" },
  { username: "employee", password: "emp123", role: "employee", name: "Employee" },
];

// --- LANDING PAGE ---
function Landing() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to WorkZen HRMS</h1>
      <p className="mb-8 text-lg text-gray-600">Simplifying HR for smarter workplaces.</p>
      <button
        className="px-6 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
        onClick={() => navigate("/login")}
      >
        Get Started
      </button>
    </div>
  );
}

// --- LOGIN PAGE ---
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const user = mockUsers.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      onLogin(user);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-semibold mb-4">Login to WorkZen</h2>
      <form
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-3 py-2 border rounded"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-3 py-2 border rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <button
          className="w-full py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
          type="submit"
        >Login</button>
      </form>
    </div>
  );
}


// --- MAIN APP ---
export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

