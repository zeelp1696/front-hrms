import { Mail, Phone, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EmployeeCardProps {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  username: string;
  image: string;
}

export function EmployeeCard({ name, jobTitle, email, phone, username, image }: EmployeeCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-start gap-4 mb-4">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-gray-900">{name}</h3>
          <p className="text-gray-500 text-sm">{jobTitle}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Mail className="w-4 h-4 text-gray-400" />
          <span>{email}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Phone className="w-4 h-4 text-gray-400" />
          <span>{phone}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <User className="w-4 h-4 text-gray-400" />
          <span>{username}</span>
        </div>
      </div>
    </div>
  );
}
