import { Search, ChevronDown } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { EmployeeCard } from './components/EmployeeCard';

const employees = [
  {
    id: 1,
    name: 'Jacob Jones',
    jobTitle: 'Medical Assistant',
    email: 'danghoang87hl@gmail.com',
    phone: '(603) 555-0123',
    username: 'bgarriock',
    image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI0ODgxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Ralph Edwards',
    jobTitle: 'President of Sales',
    email: 'vuhaithugnnute@gmail.com',
    phone: '(603) 555-0123',
    username: 'hvareyg',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MjUxNzIxNXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Kristin Watson',
    jobTitle: 'Dog Trainer',
    email: 'thuhang.nute@gmail.com',
    phone: '(480) 555-0103',
    username: 'iwhittonf',
    image: 'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjQ4Mzg5NXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Bessie Cooper',
    jobTitle: 'Marketing Coordinator',
    email: 'tienlapspktnd@gmail.com',
    phone: '(316) 555-0116',
    username: 'lwasmuthv',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwaGVhZHNob3R8ZW58MXx8fHwxNzYyNDgzODk1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 5,
    name: 'Albert Flores',
    jobTitle: 'Nursing Assistant',
    email: 'trungkienspktnd@gmail.com',
    phone: '(239) 555-0108',
    username: 'dpolden',
    image: 'https://images.unsplash.com/photo-1531299983330-093763e1d963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI1MjMwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 6,
    name: 'Jerome Bell',
    jobTitle: 'Web Designer',
    email: 'nvt.isst.nute@gmail.com',
    phone: '(406) 555-0120',
    username: 'cprendeguest',
    image: 'https://images.unsplash.com/photo-1758599543120-4e462429a4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2MjU5MDgzNXww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      
      <main className="flex-1">
        <header className="bg-white border-b border-gray-200 px-8 py-5">
          <h2 className="text-gray-900">Employees</h2>
        </header>
        
        <div className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent cursor-pointer">
                <option>Dir. Status</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                name={employee.name}
                jobTitle={employee.jobTitle}
                email={employee.email}
                phone={employee.phone}
                username={employee.username}
                image={employee.image}
              />
            ))}
          </div>
          
          <div className="text-center text-gray-500 text-sm">
            showing 1–25 of 778 results
          </div>
        </div>
      </main>
    </div>
  );
}
