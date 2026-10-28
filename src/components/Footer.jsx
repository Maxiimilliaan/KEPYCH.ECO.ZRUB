import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0b140c] border-t border-[#273E2E] py-14 px-4 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <svg
              className="w-6 h-6 text-[#C99B63] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9.5L12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" />
              <path d="M9.5 21V12.5C9.5 12.22 9.72 12 10 12h4c0.28 0 0.5 0.22 0.5 0.5V21" />
            </svg>
            <span className="font-extrabold text-white text-lg tracking-tight">
              KEPYCH <span className="text-[#C99B63]">ECO ZRUB</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed text-xs">
            Виробництво екологічно чистих зрубів, альтанок, садових гойдалок та дерев'яних будинків
            з високогірної карпатської смереки та дуба з 2018 року.
          </p>
          <div className="text-[11px] text-gray-400">
            © 2026 KEPYCH ECO ZRUB. Всі права захищено.
          </div>
        </div>

        {/* Products */}
        <div>
          <div className="font-bold text-white text-sm mb-3.5 tracking-wider uppercase">
            Продукція
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#catalog" className="hover:text-[#C99B63] transition-colors">
                Альтанки та бесідки з бруса
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-[#C99B63] transition-colors">
                Дикий зруб кругляка (смерека)
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-[#C99B63] transition-colors">
                Лазні та SPA-комплекси
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-[#C99B63] transition-colors">
                Садові гойдалки з дуба
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:text-[#C99B63] transition-colors">
                Вуличні меблі та столи для BBQ
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation & Services */}
        <div>
          <div className="font-bold text-white text-sm mb-3.5 tracking-wider uppercase">
            Навігація
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#advantages" className="hover:text-[#C99B63] transition-colors">
                Чому KEPYCH ECO ZRUB?
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-[#C99B63] transition-colors">
                Фотогалерея робіт
              </a>
            </li>
            <li>
              <a href="#steps" className="hover:text-[#C99B63] transition-colors">
                4 кроки до результату
              </a>
            </li>
            <li>
              <a href="#quiz" className="hover:text-[#C99B63] transition-colors">
                Онлайн-калькулятор вартості
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#C99B63] transition-colors">
                Поширені запитання (FAQ)
              </a>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <div className="font-bold text-white text-sm mb-3.5 tracking-wider uppercase">
            Виробництво
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2">
              <span>📍</span>
              <span>Україна, Закарпатська обл. (Карпатський регіон)</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+380974004463" className="hover:text-[#C99B63] font-semibold text-white">
                +38 (097) 400-4463
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:maksym.kepych@student.uzhnu.edu.ua" className="hover:text-[#C99B63]">
                maksym.kepych@student.uzhnu.edu.ua
              </a>
            </div>
            <div className="text-[#C99B63] font-semibold pt-1">
              Години прийому дзвінків: Пн–Сб 08:00 – 20:00
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-[#273E2E]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
        <div>Розроблено студентом 2-го курсу ФІТ ДВНЗ «УжНУ» Кепичем Максимом Васильовичем</div>
        <div className="flex items-center gap-4">
          <a href="#catalog" className="hover:text-[#C99B63]">
            Каталог
          </a>
          <a href="#quiz" className="hover:text-[#C99B63]">
            Калькулятор
          </a>
          <a href="#contacts" className="hover:text-[#C98B67]">
            Контакти
          </a>
        </div>
      </div>
    </footer>
  );
}
