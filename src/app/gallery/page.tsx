import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CatGallery } from '@/components/CatGallery';
import { useCats } from '@/hooks/useCats';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Галерея Котиков - CatWonderland',
  description: 'Просмотрите нашу полную галерею котиков с фильтрацией по породе и характеру',
};

export default async function GalleryPage() {
  const cats = await useCats();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-orange-50 to-pink-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              Галерея Котиков 🐱
            </h1>
            <p className="text-lg text-gray-600">
              Встречайте наших чудесных пушистых друзей и выбирайте идеального котика для себя
            </p>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <CatGallery cats={cats} />
        </div>
      </main>
      <Footer />
    </>
  );
}
