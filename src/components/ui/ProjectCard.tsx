import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <Github size={20} className="mr-2" />
            Code
          </a>
          <a
            href={project.demo}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ExternalLink size={20} className="mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;