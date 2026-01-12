'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-orange-50 to-pink-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              Контакты 📞
            </h1>
            <p className="text-lg text-gray-600">
              Свяжитесь с нами, если у вас есть вопросы или вы хотите помочь нашим котикам
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Информация о нас</h2>
                
                {/* Email */}
                <div className="mb-6 flex gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <a
                      href="mailto:hello@catwonderland.ru"
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      hello@catwonderland.ru
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-6 flex gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Телефон</h3>
                    <a
                      href="tel:+79991234567"
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="mb-6 flex gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Адрес</h3>
                    <p className="text-gray-600">
                      г. Москва<br />
                      ул. Кошачья, д. 42<br />
                      Кв. 1 (Мурзикополь)
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="mb-6 flex gap-4">
                  <div className="text-2xl">🕐</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Время работы</h3>
                    <p className="text-gray-600">
                      Пн-Пт: 10:00 - 18:00<br />
                      Сб-Вс: 11:00 - 17:00<br />
                      Обед: 13:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Мы в соцсетях</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-500 text-orange-600 hover:text-white flex items-center justify-center transition-all text-xl"
                  >
                    📷
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-500 text-pink-600 hover:text-white flex items-center justify-center transition-all text-xl"
                  >
                    👍
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white flex items-center justify-center transition-all text-xl"
                  >
                    🐦
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Свяжитесь с нами</h2>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    ✓ Спасибо за ваше письмо! Мы ответим вам в ближайшее время.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    placeholder="Ваше сообщение..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-3 px-4 rounded-lg transition-all ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⌛</span> Отправка...
                    </span>
                  ) : (
                    'Отправить сообщение'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  * Поля обязательны для заполнения
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
