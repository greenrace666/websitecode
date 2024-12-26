import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  skill: {
    name: string;
    icon: LucideIcon;
  };
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
      <skill.icon className="w-6 h-6 text-blue-600 mr-3" />
      <span>{skill.name}</span>
    </div>
  );
};

export default SkillCard;