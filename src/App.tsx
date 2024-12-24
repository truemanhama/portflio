import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ProjectCard } from './components/ProjectCard';
import { SkillsSection } from './components/SkillsSection';
import { projects } from './data/projects';
import { skills } from './data/skills';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl">
                Trueman Hama Mabumbo
              </h1>
              <p className="mt-4 text-xl text-blue-100">
                Engineering Student & Innovation Enthusiast
              </p>
              <p className="mt-4 text-blue-100">
                Third year Mechatronics Engineering student at Ashesi University with a passion for sustainable technology 
                and robotics. Seeking opportunities in innovative engineering projects.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://github.com/truemanhama" target="_blank" rel="noopener noreferrer" 
                   className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/truemanhama/" target="_blank" rel="noopener noreferrer"
                   className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:thmabumbo@gmail.com"
                   className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/Trueman Mabumbo_.svg"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Projects Section */}
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center">
            © {new Date().getFullYear()} Trueman Hama Mabumbo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;