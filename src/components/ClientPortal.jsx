import React, { useState, useEffect } from 'react';

const cameras = [
  { id: 'cam1', name: 'Live Cam #01: Стапель ручної рубки', loc: 'Ужгородський цех №1' },
  { id: 'cam2', name: 'Live Cam #02 (1080p)', loc: 'Стапель контрольної збірки №2' },
  { id: 'cam3', name: 'Live Cam #03: Склад кругляка', loc: 'Відділ сушки та калібрування' },
];

export default function ClientPortal({ isOpen, onClose }) {
  const [activeCam, setActiveCam] = useState('cam2');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  const currentCamObj = cameras.find(c => c.id === activeCam) || cameras[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-[#18281D] border border-[#C99B63] max-w-5xl w-full rounded-3xl p-6 lg:p-8 shadow-2xl my-8 relative">
        <div className="flex items-center justify-between border-b border-[#273E2E] pb-4 mb-6">
          <div>
            <div className="text-xs uppercase font-bold text-[#C99B63] tracking-wider mb-1">
              Кабінет замовника & Моніторинг будівництва
            </div>
            <h2 className="text-xl lg:text-2xl font-extrabold text-white">
              Замовлення #ZR-8842: Альтанка з дикого зрубу (4х5 м)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#121E15] border border-[#273E2E] text-gray-400 hover:text-white hover:border-[#C99B63] text-xl font-bold flex items-center justify-center transition-all"
          >
            ✕
          </button>
        </div>

        {/* 6 Step Stepper */}
        <div className="bg-[#121E15] p-5 rounded-2xl border border-[#273E2E] mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-3">
            <span>Хід виконання робіт під ключ:</span>
            <span className="text-[#C99B63]">Готовність: 75%</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs">
            <div className="bg-[#2ECC71]/20 border border-[#2ECC71] p-2.5 rounded-xl text-[#2ECC71] font-bold">
              1. 3D-Проєкт ✓
            </div>
            <div className="bg-[#2ECC71]/20 border border-[#2ECC71] p-2.5 rounded-xl text-[#2ECC71] font-bold">
              2. Договір ✓
            </div>
            <div className="bg-[#2ECC71]/20 border border-[#2ECC71] p-2.5 rounded-xl text-[#2ECC71] font-bold">
              3. Відбір лісу ✓
            </div>
            <div className="bg-[#C99B63]/20 border border-[#C99B63] p-2.5 rounded-xl text-[#C99B63] font-bold animate-pulse">
              4. Рубка (75%) ▶
            </div>
            <div className="bg-[#1A2C1F] border border-[#273E2E] p-2.5 rounded-xl text-gray-400">
              5. Доставка
            </div>
            <div className="bg-[#1A2C1F] border border-[#273E2E] p-2.5 rounded-xl text-gray-400">
              6. Монтаж (1 день)
            </div>
          </div>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Tech Passport */}
          <div className="bg-[#121E15] p-5 rounded-2xl border border-[#273E2E] text-xs space-y-3">
            <div className="font-bold text-sm text-[#C99B63] border-b border-[#273E2E] pb-2 flex items-center justify-between">
              <span>Технічний паспорт</span>
              <span className="text-[10px] text-gray-400">№ ТП-8842</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#273E2E]/40">
              <span className="text-gray-400">Габарити:</span>
              <span className="text-white font-medium">4.0 × 5.0 м (20 м²)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#273E2E]/40">
              <span className="text-gray-400">Матеріал:</span>
              <span className="text-white font-medium">Зимова смерека Ø24–28 см</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#273E2E]/40">
              <span className="text-gray-400">Тип рубки:</span>
              <span className="text-white font-medium">Канадська чаша з шипом</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#273E2E]/40">
              <span className="text-gray-400">Покриття:</span>
              <span className="text-white font-medium">Масло-віск Tikkurila Valtti</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-400">Відповідальний майстер:</span>
              <span className="text-[#C99B63] font-medium">М. Федак (бригада №3)</span>
            </div>
          </div>

          {/* Live Cam */}
          <div className="bg-[#121E15] p-5 rounded-2xl border border-[#273E2E] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-[#C99B63]">{currentCamObj.name}</span>
                <span className="bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                  <span>●</span> LIVE REC
                </span>
              </div>
              <div className="h-36 bg-black rounded-xl overflow-hidden relative mb-3 border border-[#273E2E]">
                <img
                  src="/photo/besedka.png"
                  alt="Live stream camera"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute top-2 left-2 text-[9px] font-mono text-emerald-400 bg-black/60 px-2 py-0.5 rounded">
                  {currentTime} | 1080p 60fps
                </div>
                <div className="absolute bottom-1.5 left-2 text-[9px] font-mono text-white/80 bg-black/60 px-2 py-0.5 rounded">
                  ● {currentCamObj.loc}
                </div>
              </div>
            </div>

            {/* Camera Switcher Buttons */}
            <div className="grid grid-cols-3 gap-1.5 text-[10px]">
              {cameras.map(cam => (
                <button
                  key={cam.id}
                  onClick={() => setActiveCam(cam.id)}
                  className={`py-1 rounded font-semibold transition-all ${
                    activeCam === cam.id
                      ? 'bg-[#C99B63] text-[#121E15]'
                      : 'bg-[#1A2C1F] text-gray-300 hover:text-white'
                  }`}
                >
                  Камера {cam.id.slice(-1)}
                </button>
              ))}
            </div>
          </div>

          {/* Financials & Docs */}
          <div className="bg-[#121E15] p-5 rounded-2xl border border-[#273E2E] text-xs space-y-3 flex flex-col justify-between">
            <div>
              <div className="font-bold text-sm text-[#C99B63] border-b border-[#273E2E] pb-2">
                Кошторис та договір
              </div>
              <div className="space-y-2 mt-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Загальна сума:</span>
                  <span className="font-bold text-[#C99B63] text-sm">68 000 грн</span>
                </div>
                <div className="flex justify-between text-[#2ECC71]">
                  <span>Аванс (50%):</span>
                  <span className="font-bold">34 000 грн (Оплачено)</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Залишок після монтажу:</span>
                  <span className="font-bold text-white">34 000 грн</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => alert('Договір підряду №ZR-8842 завантажено в форматі PDF.')}
                className="w-full bg-[#1A2C1F] border border-[#273E2E] hover:border-[#C99B63] text-white py-2.5 rounded-xl font-bold transition-all text-xs flex items-center justify-center gap-1.5"
              >
                <span>📄</span> Завантажити Договір (PDF)
              </button>
              <a
                href="https://t.me/max1imilian"
                target="_blank"
                rel="noreferrer"
                className="block text-center w-full bg-[#C99B63] text-[#121E15] py-2.5 rounded-xl font-bold hover:bg-[#b0824b] transition-all text-xs"
              >
                💬 Написати бригадиру в Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#273E2E]">
          <div className="text-xs text-gray-400">
            Оновлено в реальному часі • Сесія верифікована
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#273E2E] text-white text-xs font-bold rounded-full hover:bg-gray-700 transition-all"
          >
            Закрити панель
          </button>
        </div>
      </div>
    </div>
  );
}
