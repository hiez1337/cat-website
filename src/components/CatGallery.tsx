'use client';

import { Cat } from '@/types/cat';
import { CatCard } from './CatCard';
import { useState, useMemo } from 'react';

interface CatGalleryProps {
  cats: Cat[];
}

type SortOption = 'name' | 'likes' | 'age' | 'energy';

export function CatGallery({ cats }: CatGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('all');
  const [selectedPersonality, setSelectedPersonality] = useState('all');
  const [adoptableOnly, setAdoptableOnly] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('name');

  // Get unique breeds
  const breeds = useMemo(() => {
    return ['all', ...Array.from(new Set(cats.map(cat => cat.breed)))];
  }, [cats]);

  // Get unique personalities
  const personalities = useMemo(() => {
    const allPersonalities = new Set<string>();
    cats.forEach(cat => {
      cat.personality.forEach(p => allPersonalities.add(p));
    });
    return ['all', ...Array.from(allPersonalities)];
  }, [cats]);

  // Filter and sort cats
  const filteredCats = useMemo(() => {
    let result = cats;

    // Search filter
    if (searchQuery) {
      result = result.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Breed filter
    if (selectedBreed !== 'all') {
      result = result.filter(cat => cat.breed === selectedBreed);
    }

    // Personality filter
    if (selectedPersonality !== 'all') {
      result = result.filter(cat =>
        cat.personality.includes(selectedPersonality)
      );
    }

    // Adoptable filter
    if (adoptableOnly) {
      result = result.filter(cat => cat.adoptable);
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'likes':
          return b.likes - a.likes;
        case 'age':
          return a.age - b.age;
        case 'energy':
          return b.energy - a.energy;
        default:
          return 0;
      }
    });

    return result;
  }, [cats, searchQuery, selectedBreed, selectedPersonality, adoptableOnly, sortBy]);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 Найти котика по имени..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors"
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Breed Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Порода
          </label>
          <select
            value={selectedBreed}
            onChange={e => setSelectedBreed(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors text-sm"
          >
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed === 'all' ? '✓ Все породы' : breed}
              </option>
            ))}
          </select>
        </div>

        {/* Personality Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Характер
          </label>
          <select
            value={selectedPersonality}
            onChange={e => setSelectedPersonality(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors text-sm"
          >
            {personalities.map(trait => (
              <option key={trait} value={trait}>
                {trait === 'all' ? '✓ Все характеры' : trait}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Сортировка
          </label>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortOption)}
            className="w-full px-3 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors text-sm"
          >
            <option value="name">По имени (А-Я)</option>
            <option value="likes">По популярности</option>
            <option value="age">По возрасту</option>
            <option value="energy">По энергии</option>
          </select>
        </div>

        {/* Adoptable Filter */}
        <div className="flex items-end">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={adoptableOnly}
              onChange={e => setAdoptableOnly(e.target.checked)}
              className="w-5 h-5 rounded border-orange-300 text-orange-500 cursor-pointer"
            />
            <span className="text-sm font-semibold text-gray-700">
              ✓ К усыновлению
            </span>
          </label>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center text-gray-600">
        <p className="text-sm">
          Найдено котиков: <span className="font-bold text-orange-600">{filteredCats.length}</span>
        </p>
      </div>

      {/* Gallery Grid */}
      {filteredCats.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCats.map(cat => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-2xl mb-2">😿</p>
          <p className="text-gray-600 text-lg">
            К сожалению, котиков по вашему фильтру не найдено
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedBreed('all');
              setSelectedPersonality('all');
              setAdoptableOnly(false);
            }}
            className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </div>
  );
}
