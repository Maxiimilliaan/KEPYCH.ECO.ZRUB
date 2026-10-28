import React from 'react';

export default function HeroSection({ onOpenQuiz }) {
  const handleQuizClick = e => {
    if (onOpenQuiz) {
      e.preventDefault();
      onOpenQuiz();
    }
  };

  return (
    <section
      className="relative bg-[#1e3322] text-white pt-28 sm:pt-36 pb-24 sm:pb-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(18, 30, 21, 0.78) 0%, rgba(18, 30, 21, 0.88) 100%), url('/photo/besedka.png') center/cover no-repeat",
      }}
    >
      {/* Bottom fade to #f9f8f5 */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #f9f8f5, transparent)' }}
      />

      <div className="max-w-[920px] mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#c99b63]/15 border border-[#c99b63]/30 px-4 py-2 rounded-full text-[#f5ebd9] text-xs font-semibold mb-7 uppercase tracking-wider">
          <svg className="w-3.5 h-3.5 fill-[#c99b63]" viewBox="0 0 24 24">
            <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 4.84l6 5.4V19h-2v-6H8v6H6v-6.76l6-5.4z" />
          </svg>
          <span>Власне деревообробне виробництво зрубів</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.15] mb-6 text-white">
          Ексклюзивні зруби, альтанки та будинки від{' '}
          <span className="text-[#c99b63]">KEPYCH ECO ZRUB</span>
        </h1>

        {/* Lead Text */}
        <p className="text-base sm:text-lg text-white/90 max-w-[760px] mx-auto mb-10 leading-relaxed font-normal">
          Виготовляємо екологічно чисті дерев'яні конструкції будь-якої складності. Альтанки,
          гойдалки та дачні будинки зі справжнього кругляка за карпатськими технологіями з монтажем
          під ключ.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="#quiz"
            onClick={handleQuizClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c99b63] hover:bg-[#b0824b] text-white font-semibold text-[15px] px-7 py-3.5 rounded-lg transition-all shadow-lg shadow-[#c99b63]/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg
              className="w-[18px] h-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="9"></line>
              <line x1="9" y1="13" x2="15" y2="13"></line>
              <line x1="9" y1="17" x2="15" y2="17"></line>
            </svg>
            <span>Розрахувати ціну за 1 хвилину</span>
          </a>
          <a
            href="#catalog"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white text-white hover:text-[#1e3322] border-2 border-white font-semibold text-[15px] px-7 py-3.5 rounded-lg transition-all shadow-md hover:-translate-y-0.5"
          >
            Переглянути каталог
          </a>
        </div>

        {/* 4 Feature Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-9 border-t border-white/15 text-center">
          <div className="flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-[#c99b63] mb-3">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l8 12h-5v5h-6v-5H4L12 3z"></path>
                <path d="M12 20v2"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-[15px] text-white mb-1">Еко-ліс</h3>
            <p className="text-xs text-white/65">Карпатська смерека та дуб</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-[#c99b63] mb-3">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M12 7a5 5 0 0 0-5 5"></path>
                <path d="M12 9a3 3 0 0 0-3 3"></path>
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
            </div>
            <h3 className="font-semibold text-[15px] text-white mb-1">Зруб (кругляк)</h3>
            <p className="text-xs text-white/65">Автентична ручна робота</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-[#c99b63] mb-3">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3 className="font-semibold text-[15px] text-white mb-1">Швидкий монтаж</h3>
            <p className="text-xs text-white/65">Встановлення за 1–2 дні</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-[#c99b63] mb-3">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M9 11l2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-[15px] text-white mb-1">Гарантія</h3>
            <p className="text-xs text-white/65">Фіксований договір та ціна</p>
          </div>
        </div>
      </div>
    </section>
  );
}
