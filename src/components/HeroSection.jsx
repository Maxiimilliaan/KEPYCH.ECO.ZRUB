import React from 'react';

export default function HeroSection({ onOpenQuiz }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/photo/besedka.png" 
          alt="KEPYCH ECO ZRUB" 
          className="w-full h-full object-cover opacity-20 filter blur-[1px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121E15]/80 via-[#121E15]/90 to-[#121E15]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#1A2C1F] border border-[#C99B63]/40 px-4 py-1.5 rounded-full text-xs font-semibold text-[#C99B63] mb-6 shadow-sm">
          <span>🌲</span> ВЛАСНЕ ДЕРЕВООБРОБНЕ ВИРОБНИЦТВО ЗРУБІВ У ЗАКАРПАТТІ
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight mb-6">
          Ексклюзивні зруби, альтанки та будинки від <span className="text-[#C99B63]">KEPYCH ECO ZRUB</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Виготовляємо екологічно чисті дерев'яні конструкції будь-якої складності. Альтанки, гойдалки та дачні будинки зі справжнього кругляка за карпатськими технологіями з монтажем під ключ за 1–2 дні.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a 
            href="#quiz"
            className="w-full sm:w-auto bg-[#C99B63] text-[#121E15] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full hover:bg-[#b0824b] transition-all shadow-xl shadow-[#C99B63]/25"
          >
            📊 Розрахувати ціну за 1 хвилину
          </a>
          <a 
            href="#catalog"
            className="w-full sm:w-auto bg-[#1A2C1F] border border-[#273E2E] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full hover:border-[#C99B63] transition-all"
          >
            🌲 Переглянути каталог
          </a>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
          <div className="bg-[#1A2C1F]/80 border border-[#273E2E] p-3.5 rounded-xl">
            <div className="text-lg mb-1">🌲</div>
            <div className="font-bold text-sm text-white">Еко-ліс</div>
            <div className="text-xs text-gray-400">Карпатська смерека</div>
          </div>
          <div className="bg-[#1A2C1F]/80 border border-[#273E2E] p-3.5 rounded-xl">
            <div className="text-lg mb-1">🪓</div>
            <div className="font-bold text-sm text-white">Зруб (кругляк)</div>
            <div className="text-xs text-gray-400">Ручна канадська рубка</div>
          </div>
          <div className="bg-[#1A2C1F]/80 border border-[#273E2E] p-3.5 rounded-xl">
            <div className="text-lg mb-1">⚡</div>
            <div className="font-bold text-sm text-white">Швидкий монтаж</div>
            <div className="text-xs text-gray-400">Встановлення за 1–2 дні</div>
          </div>
          <div className="bg-[#1A2C1F]/80 border border-[#273E2E] p-3.5 rounded-xl">
            <div className="text-lg mb-1">🛡️</div>
            <div className="font-bold text-sm text-white">Гарантія</div>
            <div className="text-xs text-gray-400">Офіційний договір</div>
          </div>
        </div>
      </div>
    </section>
  );
}
