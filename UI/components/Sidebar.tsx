import { LayoutDashboard, Clock, Calendar, FileText, MessageSquare, Users, BarChart3, Settings } from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: Clock, label: 'Attendance', active: false },
  { icon: Calendar, label: 'Calendar', active: false },
  { icon: FileText, label: 'Leave', active: false },
  { icon: MessageSquare, label: 'Posts', active: false },
  { icon: Users, label: 'Employees', active: true },
  { icon: BarChart3, label: 'Reports', active: false },
  { icon: Settings, label: 'Configuration', active: false },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-[#F0F4FF] to-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <h1 className="flex items-center gap-1">
          <span className="text-gray-900">Algectra</span>
          <span className="w-1.5 h-1.5 bg-[#1A73E8] rounded-full"></span>
        </h1>
      </div>
      
      <nav className="px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              item.active
                ? 'bg-[#E8F0FE] text-[#1A73E8] border-l-4 border-[#1A73E8] -ml-3 pl-3'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" strokeWidth={2} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
