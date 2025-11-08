import { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { CardGrid } from '../components/CardGrid';

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
    status: "leave"
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

export function Employees() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CardGrid employees={mockEmployees} searchQuery={searchQuery} />
    </div>
  );
}

