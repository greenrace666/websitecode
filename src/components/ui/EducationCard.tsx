import React from 'react';

interface EducationCardProps {
  institution: string;
  degree: string;
  period: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  period,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h4 className="font-semibold">{institution}</h4>
      <p className="text-gray-600">{degree}</p>
      <p className="text-gray-500">{period}</p>
    </div>
  );
};

export default EducationCard;