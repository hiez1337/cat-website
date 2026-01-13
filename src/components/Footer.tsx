import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🐱</span>
              CatWonderland
            </h3>
            <p className="text-sm text-gray-400">
              Место, где котики находят свои идеальные дома и семьи
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Галерея
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                    Контакты
                  </Link>
                </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:hello@catwonderland.ru"
                  className="hover:text-orange-400 transition-colors"
                >
                  hello@catwonderland.ru
                </a>
              </li>
              <li>
                <a href="tel:+79991234567" className="hover:text-orange-400 transition-colors">
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="text-xs">
                г. Москва, ул. Кошачья, 42
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Соцсети</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Facebook"
              >
                👍
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
                aria-label="Twitter"
              >
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {currentYear} CatWonderland. Все права защищены. <span className="ml-2">🐱✨</span>
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
