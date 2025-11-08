const tabs = [
  "Employees",
  "Attendance",
  "Time Off",
  "Payroll",
  "Reports",
  "Settings",
];

export function Sidebar({ currentTab, setCurrentTab }) {
  return (
    <div className="bg-white w-56 min-h-screen py-6 border-r">
      <div className="mb-6 px-4 font-bold">Company Name & Logo</div>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          className={`block w-full text-left px-4 py-2 mb-1 rounded hover:bg-blue-50
            ${currentTab === tab ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700'}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
