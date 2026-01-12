import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CatWonderland - Все о Котиках 🐱',
  description: 'Добро пожаловать в мир котиков! Галерея, информация и новости о наших пушистых друзьях',
  openGraph: {
    title: 'CatWonderland - Все о Котиках 🐱',
    description: 'Добро пожаловать в мир котиков! Галерея, информация и новости о наших пушистых друзьях',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 flex items-center justify-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-orange-200 to-transparent opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 -right-1/2 w-full h-full bg-gradient-to-l from-pink-200 to-transparent opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Main Title with animation */}
            <div className="mb-6 animate-fade-in-up">
              <div className="text-6xl sm:text-7xl md:text-8xl mb-4 inline-block">🐱</div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Добро пожаловать в мир котиков
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Откройте для себя самых очаровательных, забавных и нежных котиков ✨
            </p>

            <Link
              href="/gallery"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 animate-fade-in-up shadow-lg"
              style={{ animationDelay: '0.6s' }}
            >
              Откройте нашу галерею →
            </Link>

            {/* Feature cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">📸</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Галерея</h3>
                <p className="text-gray-600">Более 100 фото наших котиков в высоком качестве</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Усыновление</h3>
                <p className="text-gray-600">Помогите котикам найти новый дом и семью</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Истории</h3>
                <p className="text-gray-600">Узнайте истории каждого котика и его пути</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-orange-500 to-pink-500 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">6+</div>
                <p className="text-orange-100">Котиков в нашем приюте</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <p className="text-orange-100">Лайков от посетителей</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <p className="text-orange-100">Счастливых семей</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Готовы встретить своего пушистого друга?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Просмотрите нашу коллекцию и найдите идеального котика для вашей семьи
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gallery"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Посмотреть галерею
              </Link>
              <Link
                href="/contact"
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
