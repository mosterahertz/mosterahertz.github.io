'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  angle: number;
  angleSpeed: number;
  spinRadius: number;
}

export default function WelcomeScreen({ onComplete }: { onComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 200; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 8,
          speedY: (Math.random() - 0.5) * 8,
          opacity: Math.random() * 0.5 + 0.2,
          color: getRandomColor(),
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.2,
          spinRadius: Math.random() * 20 + 5,
        });
      }
      setParticles(newParticles);
    };

    const getRandomColor = () => {
      const colors = [
        'rgba(255, 255, 255, ',
        'rgba(255, 100, 100, ',
        'rgba(100, 255, 255, ',
        'rgba(255, 255, 100, ',
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      setParticles((currentParticles) =>
        currentParticles.map((particle) => {
          // Update particle position
          particle.angle += particle.angleSpeed;
          particle.x += particle.speedX + Math.sin(particle.angle) * 2;
          particle.y += particle.speedY + Math.cos(particle.angle) * 2;

          // Mouse interaction
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            const angle = Math.atan2(dy, dx);
            particle.speedX -= Math.cos(angle) * 0.5;
            particle.speedY -= Math.sin(angle) * 0.5;
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + particle.opacity + ')';
          ctx.fill();

          // Draw trail
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particle.x - particle.speedX * 4, particle.y - particle.speedY * 4);
          ctx.strokeStyle = particle.color + (particle.opacity * 0.6) + ')';
          ctx.lineWidth = particle.size / 2;
          ctx.stroke();

          return particle;
        })
      );

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [mousePosition]);

  const handleInteraction = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: isTransitioning ? 0 : 1 }}
      transition={{ duration: 1 }}
      onClick={handleInteraction}
      onWheel={handleInteraction}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
      />
      <motion.div
        className="relative z-10 flex items-center justify-center h-full"
        animate={{
          scale: isTransitioning ? 0.8 : 1,
          opacity: isTransitioning ? 0 : 1,
        }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/mosterahertz_logo_shout.webp"
          alt="MosTerahertz Logo"
          width={500}
          height={500}
          className="max-w-full h-auto filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          priority
        />
      </motion.div>
    </motion.div>
  );
} 