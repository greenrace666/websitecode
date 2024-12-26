import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import ResearchDetails from './components/ResearchDetails';
import Blog from './components/Blog';
import Resume from './components/Resume';
import SocialHub from './components/SocialHub';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <ResearchDetails />
        <Blog />
        <Resume />
        <SocialHub />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Nikil Krishna. All rights not reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;