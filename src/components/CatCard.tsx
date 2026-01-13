'use client';

import { Cat } from '@/types/cat';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CatCardProps {
  cat: Cat;
  onLike?: (catId: string) => void;
}

export function CatCard({ cat, onLike }: CatCardProps) {
  const [likes, setLikes] = useState(cat.likes);
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    try {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      return Array.isArray(favorites) && favorites.includes(cat.id);
    } catch {
      return false;
    }
  });
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleLike = () => {
    setLikes(l => l + 1);

    // Create sparkle effect on like
    const newSparkle = {
      id: Date.now(),
      x: Math.random() * 100,
      y: Math.random() * 100,
    };
    setSparkles(s => [...s, newSparkle]);
    setTimeout(() => {
      setSparkles(s => s.filter(sp => sp.id !== newSparkle.id));
    }, 600);
    
    onLike?.(cat.id);
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      const updated = favorites.filter((id: string) => id !== cat.id);
      localStorage.setItem('favorites', JSON.stringify(updated));
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, cat.id]));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full h-60 overflow-hidden bg-gray-200">
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          unoptimized
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        
        {/* Adoptable Badge */}
        {cat.adoptable && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            ✓ К усыновлению
          </div>
        )}
        
        {/* Coming Soon Badge */}
        {!cat.adoptable && (
          <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            📅 Скоро
          </div>
        )}

        {/* Sparkles */}
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="absolute pointer-events-none animate-pulse"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animation: 'sparkle 0.6s ease-out forwards',
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name and Breed */}
        <h3 className="text-xl font-bold text-gray-900">{cat.name}</h3>
        <p className="text-sm text-orange-600 font-semibold mb-2">{cat.breed}</p>
        
        {/* Info Row */}
        <div className="flex gap-2 text-xs text-gray-600 mb-3">
          <span>🎂 {cat.age} лет</span>
          <span>⚡ Энергия: {cat.energy}/5</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {cat.description}
        </p>

        {/* Personality Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {cat.personality.slice(0, 2).map(trait => (
            <span
              key={trait}
              className="inline-block bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium"
            >
              {trait}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/cat/${cat.id}`}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-3 rounded-lg transition-colors text-center text-sm"
          >
            Подробнее
          </Link>
          <button
            onClick={toggleFavorite}
            className={`px-3 py-2 rounded-lg font-semibold transition-colors text-sm ${
              isFavorite
                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Likes Counter */}
        <button
          onClick={handleLike}
          className="w-full mt-3 py-2 bg-gradient-to-r from-red-100 to-pink-100 hover:from-red-200 hover:to-pink-200 text-red-600 font-semibold rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
        >
          💗 Лайк ({likes})
        </button>
      </div>

      <style>{`
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(0, -30px) scale(0);
          }
        }
      `}</style>
    </div>
  );
}
