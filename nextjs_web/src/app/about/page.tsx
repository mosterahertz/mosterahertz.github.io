'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="text-4xl font-bold mb-6">About Dani Carbonell</h1>
            <div className="space-y-4 text-gray-300">
              <p>
                Dani Carbonell is a multidisciplinary artist working at the intersection of art and technology,
                exploring the boundaries between digital and physical experiences through the MosTerahertz project.
              </p>
              <p>
                Through innovative projects and collaborations with collectives like Robocross Machines and Kolalge Kollectiv,
                Dani creates immersive experiences that challenge conventional perspectives and invite viewers
                to engage with art in new ways.
              </p>
              <p>
                The work combines traditional artistic practices with cutting-edge
                technology, resulting in unique pieces that bridge the gap between
                the analog and digital worlds, often exploring themes of human-machine interaction
                and the evolution of digital culture.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square"
          >
            <Image
              src="/MT_logo_text.png"
              alt="MosTerahertz Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 