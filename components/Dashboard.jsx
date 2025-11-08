import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Search } from 'lucide-react';
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

// Mock users for settings table
const initialUsers = [
  { id: 1, userName: "John Admin", loginId: "admin", email: "admin@gmail.com", role: "admin" },
  { id: 2, userName: "Jane HR", loginId: "hr", email: "hr@gmail.com", role: "hr" },
  { id: 3, userName: "Bob Employee", loginId: "employee", email: "employee@gmail.com", role: "employee" },
  { id: 4, userName: "Alice Payroll", loginId: "payroll", email: "payroll@gmail.com", role: "payroll" }
];

export function Dashboard({ user, setUser }) {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('Employees');
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState(initialUsers);

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  const handleProfile = () => {
    setShowDropdown(false);
    console.log('Navigate to profile');
  };

  const handleNewEmployee = () => {
    navigate('/register');
  };

  const handleRoleChange = (userId, newRole) => {
    setUsers(users.map(u => u.id === userId ? { ...u, role: newRole } : u));
  };

  // Access Control Logic
  const canAccessNewButton = user?.role === 'admin' || user?.role === 'hr';
  const canAccessPayroll = user?.role === 'admin' || user?.role === 'payroll';
  const canAccessSettings = user?.role === 'admin'; // Only admin can access Settings

  // Filter tabs based on role
  const allTabs = ['Employees', 'Attendance', 'Time Off', 'Payroll', 'Reports', 'Settings'];
  const tabs = allTabs.filter(tab => {
    if (tab === 'Payroll' && !canAccessPayroll) {
      return false;
    }
    if (tab === 'Settings' && !canAccessSettings) {
      return false;
    }
    return true;
  });

  const renderContent = () => {
    switch (currentTab) {
      case 'Employees':
        return (
          <div>
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Employee Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockEmployees
                .filter(employee => 
                  employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  employee.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(employee => (
                  <EmployeeCard key={employee.id} {...employee} />
                ))}
            </div>
          </div>
        );
      
      case 'Settings':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Header */}
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-xl font-semibold text-gray-900">User Settings</h2>
            </div>

            {/* Description */}
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
              <p className="text-sm text-gray-600">
                - In the Admin Settings, the administrator can assign user access rights based on each user's role.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                - Access rights can be configured on an module basis, allowing specific permissions for each module.
              </p>
              <p className="text-sm text-gray-600 mt-3">
                Select user access rights as per their role and responsibilities. These access rights define what users are allowed to access and what they are restricted from accessing.
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">
                Employee / Admin/ HR Officer / Payroll Officer
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">User name</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Login id</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((userData, index) => (
                    <tr key={userData.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm text-gray-900">{userData.userName}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{userData.loginId}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{userData.email}</td>
                      <td className="px-6 py-4">
                        <select
                          value={userData.role}
                          onChange={(e) => handleRoleChange(userData.id, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="employee">Employee</option>
                          <option value="admin">Admin</option>
                          <option value="hr">HR Officer</option>
                          <option value="payroll">Payroll Officer</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
        <div className="max-w-full mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Company Name & NEW Button (conditionally shown) */}
            <div className="flex items-center gap-4">
              <div className="border border-gray-300 px-4 py-2 rounded">
                <h1 className="text-sm font-semibold text-gray-900 text-center leading-tight">
                  Company Name<br />& Logo
                </h1>
              </div>
              {/* NEW button - Only visible for admin and hr */}
              {canAccessNewButton && (
                <button
                  onClick={handleNewEmployee}
                  className="px-8 py-2 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition-colors"
                >
                  NEW
                </button>
              )}
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
        {/* Sidebar - Tabs filtered based on role */}
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
