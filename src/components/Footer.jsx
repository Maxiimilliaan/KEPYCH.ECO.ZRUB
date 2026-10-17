import React from 'react';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-[#0e1710] border-t border-[#273E2E] py-14 px-4 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="font-extrabold text-white text-base mb-2">KEPYCH <span className="text-[#C99B63]">ECO ZRUB</span></div>
          <p className="text-gray-400 leading-relaxed mb-4">
            Виробництво екологічно чистих зрубів, альтанок та котеджів з високогірної карпатської смереки та дуба.
          </p>
          <div className="text-[11px] text-gray-400">© 2026 KEPYCH ECO ZRUB. Всі права захищено.</div>
        </div>

        <div>
          <div className="font-bold text-white text-sm mb-3">Вироби</div>
          <ul className="space-y-2">
            <li><a href="#catalog" className="hover:text-[#C99B63]">Альтанки та бесідки з бруса</a></li>
            <li><a href="#catalog" className="hover:text-[#C99B63]">Дикий зруб кругляка</a></li>
            <li><a href="#catalog" className="hover:text-[#C99B63]">Лазні та SPA-комплекси</a></li>
            <li><a href="#catalog" className="hover:text-[#C99B63]">Садові гойдалки з дуба</a></li>
          </ul>
        </div>

        <div>
          <div className="font-bold text-white text-sm mb-3">Технології</div>
          <ul className="space-y-2">
            <li>Канадська чаша з шипом</li>
            <li>Камерна сушка 14–18%</li>
            <li>Еко-масла Tikkurila Valtti</li>
            <li>Монтаж під ключ за 1–2 дні</li>
          </ul>
        </div>

        <div>
          <div className="font-bold text-white text-sm mb-3">Контакти виробництва</div>
          <div className="space-y-2">
            <div>📍 Закарпатська обл., м. Ужгород</div>
            <div>📞 +38 (097) 400-4463</div>
            <div>✉️ maksym.kepych@student.uzhnu.edu.ua</div>
            <div className="text-[#C99B63] font-semibold">Години роботи: Пн-Сб 09:00 - 19:00</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
