import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from "./nikil.webp"
const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nikil Krishna
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Undergraduate student at SASTRA Deemed University specializing in Computational Biology and Protein Design
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in touch
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={Image}
              alt="Nikil Krishna"
              className="rounded-2xl shadow-2xl w-80 h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;