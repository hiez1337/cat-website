import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getCatById, fetchCats, getCatsSync } from '@/hooks/useCats';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cat = await getCatById(id);

  if (!cat) {
    return {
      title: 'Котик не найден',
    };
  }

  return {
    title: `${cat.name} - CatWonderland`,
    description: cat.description,
    openGraph: {
      title: `${cat.name} - CatWonderland`,
      description: cat.description,
      type: 'website',
      images: [cat.image],
    },
  };
}

export function generateStaticParams() {
  const cats = getCatsSync();
  return cats.map(cat => ({
    id: cat.id,
  }));
}

interface CatPageProps {
  params: Promise<{ id: string }>;
}

export default async function CatPage({ params }: CatPageProps) {
  const { id } = await params;
  const cat = await getCatById(id);
  const allCats = await fetchCats();

  if (!cat) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">😿</h1>
            <p className="text-2xl text-gray-700 mb-6">Котик не найден</p>
            <Link
              href="/gallery"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Вернуться в галерею
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Get related cats (same breed)
  const relatedCats = allCats
    .filter(c => c.breed === cat.breed && c.id !== cat.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="bg-gray-50 py-4 border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
            >
              ← Вернуться в галерею
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Image Gallery */}
            <div>
              <div className="relative w-full h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-4 bg-gray-200">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  unoptimized
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Gallery */}
              {cat.galleryImages && cat.galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-2">
                  {cat.galleryImages.map((img, idx) => (
                    <div key={idx} className="relative h-20 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                      <Image
                        src={img}
                        alt={`${cat.name} - фото ${idx + 1}`}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              {/* Title and Status */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                      {cat.name}
                    </h1>
                    <p className="text-2xl text-orange-600 font-semibold">
                      {cat.breed}
                    </p>
                  </div>
                  {cat.adoptable && (
                    <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-2 rounded-full font-bold">
                      ✓ К усыновлению
                    </div>
                  )}
                  {!cat.adoptable && (
                    <div className="bg-blue-100 border-2 border-blue-500 text-blue-700 px-4 py-2 rounded-full font-bold">
                      📅 Скоро
                    </div>
                  )}
                </div>
              </div>

              {/* Basic Info */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <div className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">🎂</span>
                  <span className="text-gray-700">
                    <strong>Возраст:</strong> {cat.age} лет
                  </span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <span className="text-2xl">💗</span>
                  <span className="text-gray-700">
                    <strong>Лайков:</strong> {cat.likes}
                  </span>
                </div>
              </div>

              {/* Personality Traits */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Характер</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.personality.map(trait => (
                    <span
                      key={trait}
                      className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rating Scales */}
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Особенности</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">⚡ Энергия</span>
                      <span className="text-orange-600 font-bold">{cat.energy}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full transition-all"
                        style={{ width: `${(cat.energy / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">🎾 Игривость</span>
                      <span className="text-pink-600 font-bold">{cat.playfulness}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-pink-500 h-2 rounded-full transition-all"
                        style={{ width: `${(cat.playfulness / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-700">💕 Дружелюбие</span>
                      <span className="text-purple-600 font-bold">{cat.friendliness}/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full transition-all"
                        style={{ width: `${(cat.friendliness / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105">
                  💗 Лайк ({cat.likes})
                </button>
                {cat.adoptable && (
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 rounded-lg transition-colors">
                    🏠 Хочу взять в семью
                  </button>
                )}
                <button className="w-full bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold py-3 rounded-lg transition-colors">
                  📤 Поделиться
                </button>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📖 История {cat.name}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {cat.story}
            </p>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">О {cat.name}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {cat.description}
            </p>
          </div>

          {/* Related Cats */}
          {relatedCats.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Похожие котики этой же породы
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedCats.map(relatedCat => (
                  <Link
                    key={relatedCat.id}
                    href={`/cat/${relatedCat.id}`}
                    className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <Image
                        src={relatedCat.image}
                        alt={relatedCat.name}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <h3 className="text-lg font-bold text-gray-900">{relatedCat.name}</h3>
                      <p className="text-sm text-orange-600 font-semibold">{relatedCat.breed}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
