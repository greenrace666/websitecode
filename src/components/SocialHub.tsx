import React from 'react';
import { Twitter, Linkedin, Github, BookOpen } from 'lucide-react';

const SocialHub = () => {
  const socialLinks = [
    {
      platform: 'GitHub',
      icon: Github,
      username: '@greenrace666',
      link: 'https://github.com/greenrace666'
    },
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      username: 'nikil-krishna-0b2a5b1bb',
      link: 'https://www.linkedin.com/in/nikil-krishna-0b2a5b1bb/'
    },
    {
      platform: 'Twitter',
      icon: Twitter,
      username: '@bionikil',
      link: 'https://x.com/bionikil'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Connect With Me</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <social.icon className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="font-semibold">{social.platform}</h3>
              </div>
              <p className="text-gray-600">{social.username}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialHub;