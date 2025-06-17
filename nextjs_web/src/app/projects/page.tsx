'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    image: '/mosterahertz_logo_shout.webp',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    image: '/mosterahertz_logo_shout.webp',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 