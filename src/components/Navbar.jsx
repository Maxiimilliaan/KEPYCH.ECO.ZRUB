import React, { useState } from 'react';

export default function Navbar({ onOpenAuth, onOpenPortal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('UA');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#1e3322]/10 shadow-[0_2px_12px_rgba(30,51,34,0.04)] transition-all">
      {/* 
        Fluid responsive container with balanced, proportional left and right padding (px-6 sm:px-8 lg:px-12 xl:px-16)
        Eliminates the giant empty gap on the left while giving the right action buttons breathing room.
      */}
      <div className="w-full px-4 sm:px-8 lg:px-10 xl:px-14 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand Logo - Aligned to the left with balanced margin */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#1e3322] hover:opacity-90 transition-opacity shrink-0 group"
        >
          <svg
            className="w-7 h-7 text-[#c99b63] shrink-0 group-hover:scale-105 transition-transform"
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
          <span className="font-extrabold text-[19px] sm:text-[21px] text-[#1e3322] tracking-tight whitespace-nowrap font-display">
            KEPYCH ECO ZRUB
          </span>
        </a>

        {/* Main Desktop Navigation - Balanced & Centered */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[14.5px] font-semibold text-[#1e3322]">
          <a
            href="#catalog"
            className="whitespace-nowrap hover:text-[#c99b63] transition-colors relative py-1"
          >
            Каталог
          </a>
          <a
            href="#advantages"
            className="whitespace-nowrap hover:text-[#c99b63] transition-colors relative py-1"
          >
            Переваги
          </a>
          <a
            href="#portfolio"
            className="whitespace-nowrap hover:text-[#c99b63] transition-colors relative py-1"
          >
            Наші роботи
          </a>
          <a
            href="#steps"
            className="whitespace-nowrap hover:text-[#c99b63] transition-colors relative py-1"
          >
            Етапи
          </a>
          <a
            href="#contacts"
            className="whitespace-nowrap hover:text-[#c99b63] transition-colors relative py-1"
          >
            Контакти
          </a>
          <a
            href="#quiz"
            className="whitespace-nowrap text-[#c99b63] hover:text-[#b0824b] font-bold transition-colors relative py-1 flex items-center gap-1"
          >
            <span>⚡</span>
            <span>Калькулятор</span>
          </a>
        </nav>

        {/* Right Actions Cluster - Balanced Spacing, No Overflow */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
          {/* Language Switcher Capsule */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#1e3322]/15 bg-[#f9f8f5] hover:border-[#c99b63] text-xs font-bold text-[#1e3322] transition-all"
              aria-label="Вибір мови"
            >
              <span className="text-xs">
                {currentLang === 'UA' ? '🇺🇦' : currentLang === 'EN' ? '🇬🇧' : '🇩🇪'}
              </span>
              <span className="text-[11px] font-bold">{currentLang}</span>
              <svg
                className="w-2.5 h-2.5 text-[#1e3322]/60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white border border-[#1e3322]/15 rounded-xl shadow-xl py-1 z-50 text-xs animate-fade-in">
                {[
                  { code: 'UA', label: 'Українська', flag: '🇺🇦' },
                  { code: 'EN', label: 'English', flag: '🇬🇧' },
                  { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
                ].map(l => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setCurrentLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#f9f8f5] transition-colors ${
                      currentLang === l.code ? 'font-bold text-[#c99b63]' : 'text-[#1e3322]'
                    }`}
                  >
                    <span>
                      {l.flag} {l.code}
                    </span>
                    {currentLang === l.code && <span>✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Client Live Portal Button */}
          <button
            onClick={onOpenPortal}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#1e3322] bg-[#f9f8f5] hover:bg-[#c99b63]/15 border border-[#1e3322]/15 px-3 py-2 rounded-xl whitespace-nowrap transition-all shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>Кабінет замовника (LIVE)</span>
          </button>

          {/* Quick Client Sign-In Link */}
          <button
            onClick={onOpenAuth}
            className="hidden xl:inline-flex text-xs font-bold text-[#606a62] hover:text-[#1e3322] whitespace-nowrap transition-colors"
          >
            Увійти в кабінет
          </button>

          {/* Direct Phone Link */}
          <a
            href="tel:+380974004463"
            className="hidden md:inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#1e3322] hover:text-[#c99b63] whitespace-nowrap transition-colors"
          >
            <svg className="w-3.5 h-3.5 fill-current text-[#1e3322]" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span>+38 (097) 400-4463</span>
          </a>

          {/* Primary Consultation Button */}
          <a
            href="#contacts"
            className="inline-flex items-center justify-center bg-[#c99b63] hover:bg-[#b0824b] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl whitespace-nowrap transition-all shadow-md shadow-[#c99b63]/25 hover:-translate-y-0.5 active:translate-y-0 shrink-0"
          >
            Консультація
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-[#f9f8f5] border border-[#1e3322]/15 text-[#1e3322] shrink-0"
            aria-label="Меню"
          >
            <span
              className={`w-5 h-0.5 bg-[#1e3322] rounded-full transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#1e3322] rounded-full transition-opacity duration-200 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-[#1e3322] rounded-full transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#1e3322]/10 px-5 py-5 shadow-2xl animate-fade-in space-y-4">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-[#f9f8f5] border border-[#1e3322]/10 text-center text-[#1e3322]"
            >
              🏡 Каталог
            </a>
            <a
              href="#quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-[#c99b63]/15 border border-[#c99b63]/40 text-center text-[#c99b63] font-extrabold"
            >
              ⚡ Калькулятор
            </a>
            <a
              href="#advantages"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-[#f9f8f5] border border-[#1e3322]/10 text-center text-[#1e3322]"
            >
              ⭐ Переваги
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-[#f9f8f5] border border-[#1e3322]/10 text-center text-[#1e3322]"
            >
              📸 Наші роботи
            </a>
            <a
              href="#steps"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-[#f9f8f5] border border-[#1e3322]/10 text-center text-[#1e3322]"
            >
              🛠 Етапи
            </a>
            <a
              href="#contacts"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-[#f9f8f5] border border-[#1e3322]/10 text-center text-[#1e3322]"
            >
              📞 Контакти
            </a>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className="w-full py-3 bg-[#1e3322] hover:bg-[#121e15] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>Кабінет замовника (LIVE)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 bg-[#f9f8f5] border border-[#1e3322]/15 hover:border-[#c99b63] text-[#1e3322] text-xs font-bold rounded-xl transition-colors"
            >
              Увійти в кабінет
            </button>

            <a
              href="tel:+380974004463"
              className="w-full py-2.5 bg-[#f9f8f5] border border-[#1e3322]/15 text-[#1e3322] text-xs font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <span>📞</span> +38 (097) 400-4463
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
