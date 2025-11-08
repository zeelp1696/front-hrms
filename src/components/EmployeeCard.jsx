import { Mail, Phone, User, Plane } from 'lucide-react';

// Simple image component with fallback
function ImageWithFallback({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';
      }}
    />
  );
}

export function EmployeeCard({ name, jobTitle, email, phone, username, image, status }) {
  let statusIcon = null;
  if (status === 'present') {
    statusIcon = (
      <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-green-500" title="Present" />
    );
  } else if (status === 'leave') {
    statusIcon = (
      <Plane className="absolute top-2 right-2 text-blue-500 w-4 h-4" title="On Leave" />
    );
  } else if (status === 'absent') {
    statusIcon = (
      <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-yellow-400" title="Absent" />
    );
  }
  
  return (
    <div className="relative bg-white p-6 rounded-lg shadow flex flex-col gap-2">
      {statusIcon}
      <div className="flex items-center gap-4 mb-2">
        <ImageWithFallback src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-gray-500 text-sm">{jobTitle}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
}

