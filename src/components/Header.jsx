import { User, LogOut } from 'lucide-react';

export function Header({ user, onLogout, showNewButton, onNewEmployee }) {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-full mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Company Name & NEW Button */}
          <div className="flex items-center gap-4">
            <div className="border border-gray-300 px-4 py-2 rounded">
              <h1 className="text-sm font-semibold text-gray-900 text-center leading-tight">
                Company Name<br />& Logo
              </h1>
            </div>
            {/* NEW button - Conditionally shown */}
            {showNewButton && (
              <button
                onClick={onNewEmployee}
                className="px-8 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors"
              >
                NEW
              </button>
            )}
          </div>

          {/* Right side - User Avatar & Dropdown */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-red-600 hover:bg-red-50 rounded flex items-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

