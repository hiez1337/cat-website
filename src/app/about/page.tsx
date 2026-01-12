import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'О сайте - CatWonderland',
  description: 'Узнайте больше о проекте CatWonderland и нашей миссии помочь котикам найти семьи',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-orange-50 to-pink-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              О CatWonderland
            </h1>
            <p className="text-lg text-gray-600">
              Наша миссия - помочь котикам найти идеальные дома
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Mission Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наша Миссия</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              CatWonderland - это проект, посвященный помощи котикам в поиске своих идеальных семей. 
              Мы верим, что каждый кот заслуживает любящего дома и заботливого хозяина. Через наш 
              сайт мы рассказываем истории каждого котика, показываем их уникальные характеры и 
              помогаем людям найти своего идеального пушистого друга.
            </p>
          </section>

          {/* Values Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наши Ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-orange-50 rounded-lg p-6">
                <div className="text-4xl mb-3">❤️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Любовь и Забота</h3>
                <p className="text-gray-700">
                  Мы искренне заботимся о благополучии каждого котика и его будущей семье
                </p>
              </div>

              <div className="bg-pink-50 rounded-lg p-6">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Сообщество</h3>
                <p className="text-gray-700">
                  Мы создаем сообщество любителей котиков, где каждый может поделиться историями
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Качество</h3>
                <p className="text-gray-700">
                  Мы обеспечиваем высочайший стандарт ухода и информации о каждом котике
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша Команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Анна Кошкина</h3>
                <p className="text-orange-600 font-semibold mb-2">Основатель и директор</p>
                <p className="text-gray-700">
                  Анна более 10 лет работает с котиками и спасает их из сложных ситуаций. 
                  Она основала CatWonderland с целью помочь как можно большему количеству котиков.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Максим Тихий</h3>
                <p className="text-pink-600 font-semibold mb-2">Волонтер и забот</p>
                <p className="text-gray-700">
                  Максим - опытный волонтер, который посвящает каждый день уходу за нашими 
                  пушистыми друзьями и помощи им найти новые дома.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Екатерина Мяу</h3>
                <p className="text-purple-600 font-semibold mb-2">Социальный координатор</p>
                <p className="text-gray-700">
                  Катя управляет нашим сообществом в соцсетях и рассказывает захватывающие 
                  истории о наших котиках каждый день.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Дмитрий Кот</h3>
                <p className="text-blue-600 font-semibold mb-2">Веб-разработчик</p>
                <p className="text-gray-700">
                  Дмитрий создал этот сайт и постоянно улучшает его, чтобы котикам было 
                  легче найти свои идеальные семьи.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наши Достижения</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">6+</div>
                <p className="text-gray-700">Котиков спасено</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">5</div>
                <p className="text-gray-700">Пристроено в семьи</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
                <p className="text-gray-700">Визитов на сайте</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-700">Лайков от посетителей</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Хотите помочь?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Если вы хотите спасти котика или помочь нашему проекту, свяжитесь с нами!
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Связаться с нами
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
