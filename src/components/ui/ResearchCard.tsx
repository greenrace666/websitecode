import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ResearchCardProps {
  specialization: {
    icon: LucideIcon;
    title: string;
    description: string;
    topics: string[];
  };
}

export const ResearchCard: React.FC<ResearchCardProps> = ({ specialization }) => {
  const { icon: Icon, title, description, topics } = specialization;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 mr-3" />
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, i) => (
          <span 
            key={i} 
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};