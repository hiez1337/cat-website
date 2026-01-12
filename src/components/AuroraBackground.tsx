'use client';

import { useEffect, useRef } from 'react';

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Orange gradient
      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient1.addColorStop(0, `rgba(255, 165, 0, ${0.1 + Math.sin(time) * 0.05})`);
      gradient1.addColorStop(1, `rgba(255, 200, 0, ${0.05 + Math.sin(time + 1) * 0.05})`);

      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Pink gradient
      const gradient2 = ctx.createLinearGradient(canvas.width, 0, 0, canvas.height);
      gradient2.addColorStop(0, `rgba(255, 105, 180, ${0.05 + Math.cos(time) * 0.05})`);
      gradient2.addColorStop(1, `rgba(255, 182, 193, ${0.1 + Math.cos(time + 1) * 0.05})`);

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
