'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const collaborations = [
  {
    title: 'Robocross Machines',
    partner: 'Interactive Installation',
    description: 'A collaborative project exploring the intersection of art and technology through interactive installations and performances.',
    year: '2023',
    link: 'https://robocross-machines.com',
    logo: '/robocross_logo.jpg'
  },
  {
    title: 'Kollage Kollectiv',
    partner: 'Digital Art Collective',
    description: 'A collaborative project exploring digital culture and immersive digital experiences.',
    year: '2023',
    link: 'https://kollagekollectiv.com',
    logo: '/kollage_kollectiv_logo.png'
  },
  // Add more collaborations as needed
];

export default function Collaborations() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-12">Collaborations</h1>
        <div className="space-y-8">
          {collaborations.map((collab, index) => (
            <motion.div
              key={collab.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {collab.logo && (
                    <a 
                      href={collab.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={collab.logo}
                        alt={`${collab.title} logo`}
                        width={200}
                        height={100}
                        className="h-24 w-auto object-contain"
                      />
                    </a>
                  )}
                  <div>
                    <p className="text-gray-400">{collab.partner}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{collab.year}</span>
              </div>
              <p className="mt-4 text-gray-300">{collab.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 