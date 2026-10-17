import React from 'react';

export default function ClientPortal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#18281D] border border-[#C99B63] max-w-5xl w-full rounded-2xl p-6 lg:p-8 shadow-2xl my-8">
        <div className="flex items-center justify-between border-b border-[#273E2E] pb-4 mb-6">
          <div>
            <div className="text-xs uppercase font-bold text-[#C99B63]">Кабінет замовника & Моніторинг будівництва</div>
            <h2 className="text-xl lg:text-2xl font-bold text-white">Замовлення #ZR-8842: Альтанка з дикого зрубу (4х5 м)</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl font-bold">✕</button>
        </div>

        {/* 6 Step Stepper */}
        <div className="bg-[#121E15] p-5 rounded-xl border border-[#273E2E] mb-6">
          <div className="text-xs font-bold text-gray-400 mb-3">Хід виконання робіт під ключ:</div>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
            <div className="bg-[#2ECC71]/20 border border-[#2ECC71] p-2 rounded text-[#2ECC71] font-bold">1. 3D-Проєкт ✓</div>
            <div className="bg-[#2ECC71]/20 border border-[#2ECC71] p-2 rounded text-[#2ECC71] font-bold">2. Договір ✓</div>
            <div className="bg-[#2ECC71]/20 border border-[#2ECC71] p-2 rounded text-[#2ECC71] font-bold">3. Відбір лісу ✓</div>
            <div className="bg-[#C99B63]/20 border border-[#C99B63] p-2 rounded text-[#C99B63] font-bold animate-pulse">4. Рубка (75%) ▶</div>
            <div className="bg-[#1A2C1F] border border-[#273E2E] p-2 rounded text-gray-400">5. Доставка</div>
            <div className="bg-[#1A2C1F] border border-[#273E2E] p-2 rounded text-gray-400">6. Монтаж (1 день)</div>
          </div>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Tech Passport */}
          <div className="bg-[#121E15] p-5 rounded-xl border border-[#273E2E] text-xs space-y-2.5">
            <div className="font-bold text-sm text-[#C99B63] border-b border-[#273E2E] pb-2">Технічний паспорт</div>
            <div>Габарити: <span className="text-white font-medium">4.0 × 5.0 м (20 м²)</span></div>
            <div>Матеріал: <span className="text-white font-medium">Зимова смерека Ø24–28 см</span></div>
            <div>Тип рубки: <span className="text-white font-medium">Канадська чаша з шипом</span></div>
            <div>Покриття: <span className="text-white font-medium">Масло-віск Tikkurila Valtti</span></div>
            <div>Бригада: <span className="text-white font-medium">№3 (майстер М. Федак)</span></div>
          </div>

          {/* Live Cam */}
          <div className="bg-[#121E15] p-5 rounded-xl border border-[#273E2E]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-[#C99B63]">Live Cam #02 (1080p)</span>
              <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded">LIVE REC</span>
            </div>
            <div className="h-32 bg-black rounded-lg overflow-hidden relative mb-2">
              <img src="/photo/besedka.png" alt="Live stream" className="w-full h-full object-cover opacity-80" />
              <div className="absolute bottom-1 left-2 text-[9px] font-mono text-emerald-400">● Ужгородський цех рубки №1</div>
            </div>
            <div className="text-[11px] text-gray-400">Трансляція 24/7 для нагляду за якістю виконання чаш.</div>
          </div>

          {/* Financials & Docs */}
          <div className="bg-[#121E15] p-5 rounded-xl border border-[#273E2E] text-xs space-y-3">
            <div className="font-bold text-sm text-[#C99B63] border-b border-[#273E2E] pb-2">Кошторис та договір</div>
            <div className="flex justify-between">
              <span>Загальна сума:</span>
              <span className="font-bold text-[#C99B63] text-sm">68 000 грн</span>
            </div>
            <div className="flex justify-between text-[#2ECC71]">
              <span>Аванс (50%):</span>
              <span className="font-bold">34 000 грн (Оплачено)</span>
            </div>
            <button className="w-full bg-[#1A2C1F] border border-[#273E2E] hover:border-[#C99B63] text-white py-2 rounded-lg font-bold transition-all text-xs">
              📄 Завантажити Договір (PDF)
            </button>
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noreferrer" 
              className="block text-center w-full bg-[#C99B63] text-[#121E15] py-2 rounded-lg font-bold hover:bg-[#b0824b] transition-all text-xs"
            >
              💬 Написати бригадиру в Telegram
            </a>
          </div>
        </div>

        <div className="text-right">
          <button onClick={onClose} className="px-6 py-2 bg-[#273E2E] text-white text-xs font-bold rounded-full hover:bg-gray-700">
            Закрити панель
          </button>
        </div>
      </div>
    </div>
  );
}
