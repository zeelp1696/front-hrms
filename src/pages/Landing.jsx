import { useNavigate } from 'react-router-dom';

export function Landing() {
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

