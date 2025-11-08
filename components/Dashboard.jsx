import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';
import { EmployeeCard } from './EmployeeCard';

// Mock employee data
const mockEmployees = [
  {
    id: 1,
    name: "Sarah Johnson",
    jobTitle: "Senior Developer",
    email: "sarah.j@company.com",
    phone: "+1 (555) 123-4567",
    username: "sarah.johnson",
    image: "https://i.pravatar.cc/150?img=1",
    status: "present"
  },
  {
    id: 2,
    name: "Michael Chen",
    jobTitle: "Product Manager",
    email: "michael.c@company.com",
    phone: "+1 (555) 234-5678",
    username: "michael.chen",
    image: "https://i.pravatar.cc/150?img=2",
    status: "absent"
  },
  {
    id: 3,
    name: "Emily Davis",
    jobTitle: "UX Designer",
    email: "emily.d@company.com",
    phone: "+1 (555) 345-6789",
    username: "emily.davis",
    image: "https://i.pravatar.cc/150?img=3",
    status: "on-leave"
  },
  {
    id: 4,
    name: "James Wilson",
    jobTitle: "Backend Developer",
    email: "james.w@company.com",
    phone: "+1 (555) 456-7890",
    username: "james.wilson",
    image: "https://i.pravatar.cc/150?img=4",
    status: "present"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    jobTitle: "HR Manager",
    email: "lisa.a@company.com",
    phone: "+1 (555) 567-8901",
    username: "lisa.anderson",
    image: "https://i.pravatar.cc/150?img=5",
    status: "present"
  },
  {
    id: 6,
    name: "David Martinez",
    jobTitle: "DevOps Engineer",
    email: "david.m@company.com",
    phone: "+1 (555) 678-9012",
    username: "david.martinez",
    image: "https://i.pravatar.cc/150?img=6",
    status: "absent"
  }
];

export function Dashboard({ user, setUser }) {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('Employees');
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const handleProfile = () => {
    setShowDropdown(false);
    // Navigate to profile page (placeholder for now)
    console.log('Navigate to profile');
  };

  const tabs = ['Employees', 'Attendance', 'Time Off', 'Payroll', 'Reports', 'Settings'];

  const renderContent = () => {
    switch (currentTab) {
      case 'Employees':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEmployees.map(employee => (
              <EmployeeCard key={employee.id} {...employee} />
            ))}
          </div>
        );
      default:
        return (
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{currentTab}</h2>
            <p className="text-gray-600">Content for {currentTab} tab will be displayed here.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">WorkZen</h1>
            </div>

            {/* Right side - Check In/Out Button & Avatar */}
            <div className="flex items-center gap-4">
              {/* Check In/Out Button */}
              <button
                onClick={() => setIsCheckedIn(!isCheckedIn)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isCheckedIn ? 'bg-green-500' : 'bg-red-500'
                }`}
                title={isCheckedIn ? 'Check Out' : 'Check In'}
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </button>

              {/* Avatar Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                >
                  <User className="w-5 h-5" />
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                    <button
                      onClick={handleProfile}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <User className="w-4 h-4" />
                      My Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white min-h-screen shadow-sm border-r border-gray-200">
          <div className="p-6">
            <nav className="space-y-2">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentTab === tab
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
