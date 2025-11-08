import { EmployeeCard } from './EmployeeCard';

export function CardGrid({ employees, searchQuery }) {
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredEmployees.map(employee => (
        <EmployeeCard key={employee.id} {...employee} />
      ))}
    </div>
  );
}

