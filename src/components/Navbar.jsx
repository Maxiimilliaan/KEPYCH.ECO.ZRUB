import React from 'react';

export default function Navbar({ onOpenAuth, onOpenPortal }) {
  return (
    <header className="sticky top-0 z-50 bg-[#121E15]/95 backdrop-blur-md border-b border-[#273E2E] px-4 lg:px-12 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#C99B63]/20 border border-[#C99B63] flex items-center justify-center text-[#C99B63] font-bold text-xl group-hover:bg-[#C99B63] group-hover:text-[#121E15] transition-all">
            🌲
          </div>
          <div>
            <span className="font-extrabold text-lg lg:text-xl tracking-tight text-[#F8FAFC]">KEPYCH <span className="text-[#C99B63]">ECO ZRUB</span></span>
            <span className="block text-[10px] text-gray-400 tracking-wider uppercase">Карпатське дерев'яне будівництво</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-300">
          <a href="#catalog" className="hover:text-[#C99B63] transition-colors">Каталог</a>
          <a href="#quiz" className="hover:text-[#C99B63] transition-colors">Калькулятор</a>
          <a href="#advantages" className="hover:text-[#C99B63] transition-colors">Переваги</a>
          <a href="#contacts" className="hover:text-[#C99B63] transition-colors">Контакти</a>
          <button 
            onClick={onOpenPortal}
            className="text-[#C99B63] hover:text-[#f5ebd9] transition-colors flex items-center gap-1.5 font-semibold"
          >
            📹 Кабінет замовника (LIVE)
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a href="tel:+380974004463" className="hidden lg:flex items-center gap-2 text-xs font-semibold text-gray-300 bg-[#1A2C1F] border border-[#273E2E] px-3.5 py-2 rounded-full hover:border-[#C99B63] transition-all">
            <span>📞</span> +38 (097) 400-4463
          </a>
          <button
            onClick={onOpenAuth}
            className="bg-[#C99B63] text-[#121E15] font-bold text-xs lg:text-sm px-4 lg:px-5 py-2 rounded-full hover:bg-[#b0824b] transition-all shadow-lg shadow-[#C99B63]/20"
          >
            Увійти в кабінет
          </button>
        </div>
      </div>
    </header>
  );
}
