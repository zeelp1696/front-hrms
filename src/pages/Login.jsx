import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock user data for login
const mockUsers = [
  { username: 'admin', password: 'admin123', role: 'admin', name: 'Admin' },
  { username: 'hr', password: 'hr123', role: 'hr', name: 'HR Officer' },
  { username: 'zeel', password: 'zeel', role: 'employee', name: 'Employee' },
  { username: 'payroll', password: 'payroll123', role: 'payroll', name: 'Payroll Officer' }
];

export function Login({ onLogin }) {
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
        >
          Login
        </button>
      </form>
    </div>
  );
}

