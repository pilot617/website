import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Terminal } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <img 
              src="/profile.jpg" 
              alt="Software Engineer" 
              className="rounded-2xl shadow-xl w-full max-w-md aspect-square object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software Engineer
              <span className="block text-blue-400">Building Digital Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              I craft robust and scalable applications with modern technologies.
              Passionate about clean code, performance, and user experience.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition-colors">
                Get in Touch
              </a>
              <a href="#projects" className="border border-white/20 hover:border-white/40 px-6 py-3 rounded-lg font-medium transition-colors">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-800/50 py-20" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <Code2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
              <p className="text-gray-400">React, TypeScript, Tailwind CSS, Next.js</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
              <p className="text-gray-400">Node.js, Python, PostgreSQL, REST APIs</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800 border border-gray-700">
              <Terminal className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">DevOps & Tools</h3>
              <p className="text-gray-400">Docker, Git, CI/CD, Cloud Platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg bg-gray-800 border border-gray-700 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">E-Commerce Platform</h3>
                <p className="text-gray-400 mb-4">
                  A full-stack e-commerce solution built with React, Node.js, and PostgreSQL.
                </p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            <div className="rounded-lg bg-gray-800 border border-gray-700 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
                <p className="text-gray-400 mb-4">
                  Real-time analytics dashboard with interactive visualizations.
                </p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800/50 py-20" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <a href="https://github.com/pilot617" className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sampat-choudhary-996b75155/" className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" /> LinkedIn
            </a>
            <a href="mailto:sampat0choudhary@gmail.com" className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          © {new Date().getFullYear()} - Built with React & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}

export default App;