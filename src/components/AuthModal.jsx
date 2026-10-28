import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose, onSuccess }) {
  const [loginMethod, setLoginMethod] = useState('otp'); // 'otp' | 'pass'
  const [identifier, setIdentifier] = useState('maksym.kepych@student.uzhnu.edu.ua');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#152217] border border-[#C99B63] max-w-md w-full rounded-2xl p-7 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="inline-block bg-[#1A2C1F] border border-[#C99B63]/40 text-[#C99B63] text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-2">
            Кабінет замовника KEPYCH
          </div>
          <h3 className="text-2xl font-extrabold text-white">Авторизація</h3>
          <p className="text-xs text-gray-400 mt-1">
            Доступ до кошторису, статусу виготовлення зрубу та live-камер
          </p>
        </div>

        {/* Diia SSO */}
        <button
          type="button"
          onClick={onSuccess}
          className="w-full bg-[#1A2C1F] border border-[#273E2E] hover:border-[#C99B63] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 mb-4 transition-all shadow-md"
        >
          <span>🪪</span> Увійти через Дія.Підпис / Google ID
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-[#273E2E]"></div>
          <span className="px-3 text-[10px] text-gray-400 uppercase font-bold tracking-wider">
            або за номером телефону
          </span>
          <div className="flex-1 border-t border-[#273E2E]"></div>
        </div>

        {/* Method Switcher */}
        <div className="grid grid-cols-2 gap-2 mb-4 bg-[#121E15] p-1 rounded-xl border border-[#273E2E]">
          <button
            type="button"
            onClick={() => setLoginMethod('otp')}
            className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
              loginMethod === 'otp'
                ? 'bg-[#C99B63] text-[#121E15]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Одноразовий SMS/Telegram код
          </button>
          <button
            type="button"
            onClick={() => setLoginMethod('pass')}
            className={`py-1.5 rounded-lg text-xs font-semibold transition-all ${
              loginMethod === 'pass'
                ? 'bg-[#C99B63] text-[#121E15]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Пароль клієнта
          </button>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            onSuccess();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              Номер телефону або університетський email:
            </label>
            <input
              type="text"
              value={identifier}
              onChange={e => setIdentifier(e.target.value)}
              className="w-full bg-[#121E15] border border-[#273E2E] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C99B63]"
              placeholder="+380... або student@uzhnu.edu.ua"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-300 mb-1.5">
              {loginMethod === 'otp'
                ? 'Одноразовий 6-значний код підтвердження:'
                : 'Пароль доступу:'}
            </label>
            <input
              type={loginMethod === 'otp' ? 'text' : 'password'}
              defaultValue={loginMethod === 'otp' ? '884210' : '12345678'}
              className="w-full bg-[#121E15] border border-[#273E2E] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C99B63]"
              placeholder={loginMethod === 'otp' ? 'Введіть код з повідомлення' : '••••••••'}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="accent-[#C99B63]" />
              <span>Запам'ятати сесію</span>
            </label>
            <button
              type="button"
              onClick={() => setLoginMethod(loginMethod === 'otp' ? 'pass' : 'otp')}
              className="text-[#C99B63] hover:underline cursor-pointer bg-transparent border-none p-0 text-xs"
            >
              {loginMethod === 'otp' ? 'Вхід за паролем' : 'OTP через Telegram?'}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C99B63] text-[#121E15] font-extrabold py-3 rounded-xl text-sm hover:bg-[#b0824b] transition-all mt-2 shadow-lg shadow-[#C99B63]/25"
          >
            Увійти в кабінет замовника
          </button>
        </form>

        <div className="text-center text-[10px] text-gray-400 border-t border-[#273E2E] pt-4 mt-6">
          🔒 256-бітне SSL шифрування • Захищений сесійний JWT-токен
        </div>
      </div>
    </div>
  );
}
