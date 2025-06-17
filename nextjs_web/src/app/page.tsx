'use client';

import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Navigation from './components/Navigation';
import CookieConsent from './components/CookieConsent';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <main className="min-h-screen bg-black text-white">
      <AnimatePresence>
        {showWelcome ? (
          <WelcomeScreen onComplete={() => setShowWelcome(false)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navigation />
            <div className="pt-16">
              {/* Main content sections */}
              <section className="min-h-screen flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <h1 className="text-4xl font-bold mb-8">Welcome to MosTerahertz</h1>
                  <p className="text-xl text-gray-300">
                    Explore the intersection of art and technology through innovative projects
                    and collaborations.
                  </p>
                </div>
              </section>

              {/* Add more sections as needed */}
            </div>
            <CookieConsent />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
