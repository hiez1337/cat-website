'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface GlareHoverProps {
  children: ReactNode;
}

export function GlareHover({ children }: GlareHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const glare = glareRef.current;
      if (!glare) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      glare.style.left = `${x}px`;
      glare.style.top = `${y}px`;
      glare.style.opacity = '0.3';
    };

    const handleMouseLeave = () => {
      const glare = glareRef.current;
      if (glare) {
        glare.style.opacity = '0';
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-2xl"
    >
      {children}
      <div
        ref={glareRef}
        className="absolute pointer-events-none w-32 h-32 bg-white rounded-full blur-2xl transition-opacity duration-300 opacity-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
}
