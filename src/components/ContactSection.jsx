import React, { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    structureType: 'Альтанка з дикого зрубу',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <section
      id="contacts"
      className="py-24 text-white relative"
      style={{
        background:
          "linear-gradient(135deg, rgba(18, 30, 21, 0.93) 0%, rgba(18, 30, 21, 0.97) 100%), url('/photo/besedka.png') center/cover no-repeat",
      }}
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Direct Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white leading-tight mb-5">
              Маєте індивідуальну ідею? <span className="text-[#c99b63]">Давайте обговоримо!</span>
            </h2>
            <p className="text-base text-white/85 mb-8 leading-relaxed max-w-[500px]">
              Залиште контакти, і наш провідний технолог зв'яжеться з вами для детальної
              консультації, допоможе обрати тип зрубу та прорахує орієнтовний бюджет.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.05] flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">
                    Адреса виробництва
                  </h4>
                  <p className="text-base font-bold text-white">Україна, Закарпатська область</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.05] flex items-center justify-center text-lg shrink-0">
                  📞
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">
                    Прямий зв'язок
                  </h4>
                  <a
                    href="tel:+380974004463"
                    className="text-base font-bold text-white hover:text-[#c99b63] transition-colors"
                  >
                    +38 (097) 400-4463
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.05] flex items-center justify-center text-lg shrink-0">
                  ✉️
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">
                    Електронна адреса
                  </h4>
                  <a
                    href="mailto:maksym.kepych@student.uzhnu.edu.ua"
                    className="text-base font-bold text-white hover:text-[#c99b63] transition-colors"
                  >
                    maksym.kepych@student.uzhnu.edu.ua
                  </a>
                </div>
              </div>
            </div>

            {/* Messengers */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://t.me/max1imilian"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0088cc]/20 border border-[#0088cc]/40 hover:bg-[#0088cc] transition-all"
              >
                <span>✈️</span> Telegram
              </a>
              <a
                href="viber://chat?number=%2B380974004463"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#7360f2]/20 border border-[#7360f2]/40 hover:bg-[#7360f2] transition-all"
              >
                <span>🟣</span> Viber
              </a>
            </div>
          </div>

          {/* Right Column: White Form Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl text-[#1f2721] border border-[#1e3322]/5">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#2ecc71]/20 border border-[#2ecc71] text-[#2ecc71] text-3xl flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-[#1e3322]">Дякуємо за вашу заявку!</h3>
                <p className="text-sm text-[#5e6c62] max-w-sm mx-auto leading-relaxed">
                  Наш головний технолог зв’яжеться з вами за номером{' '}
                  <span className="text-[#c99b63] font-bold">{formState.phone}</span> протягом 15
                  хвилин та надішле орієнтовний кошторис.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-[#1e3322] text-white text-xs font-bold hover:bg-[#c99b63] transition-all"
                >
                  Надіслати ще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#1e3322] text-center mb-1">
                  Залишити заявку
                </h3>
                <p className="text-center text-xs text-[#5e6c62] mb-6">
                  Ми проконсультуємо щодо проекту, точних цін та термінів виготовлення
                </p>

                <div>
                  <label className="block text-xs font-semibold text-[#1e3322] mb-1.5">
                    Ваше ім'я: *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Як до вас звертатися?"
                    className="w-full bg-[#f9f8f5] border border-[#1e3322]/15 rounded-lg px-4 py-3 text-sm text-[#1e3322] placeholder-gray-400 focus:outline-none focus:border-[#c99b63] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e3322] mb-1.5">
                    Номер телефону: *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={e => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+38 (0__) ___-__-__"
                    className="w-full bg-[#f9f8f5] border border-[#1e3322]/15 rounded-lg px-4 py-3 text-sm text-[#1e3322] placeholder-gray-400 focus:outline-none focus:border-[#c99b63] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e3322] mb-1.5">
                    Що вас цікавить?
                  </label>
                  <select
                    value={formState.structureType}
                    onChange={e => setFormState({ ...formState, structureType: e.target.value })}
                    className="w-full bg-[#f9f8f5] border border-[#1e3322]/15 rounded-lg px-4 py-3 text-sm text-[#1e3322] focus:outline-none focus:border-[#c99b63] focus:bg-white transition-all"
                  >
                    <option value="Альтанка з дикого зрубу">Альтанка з дикого зрубу</option>
                    <option value="Літня альтанка з бруса">Літня альтанка з бруса</option>
                    <option value="Житловий будинок / Котедж">Житловий будинок / Котедж</option>
                    <option value="Лазня / Сауна зі зрубу">Лазня / Сауна зі зрубу</option>
                    <option value="Садова гойдалка з дуба">Садова гойдалка з дуба</option>
                    <option value="Індивідуальний проект за фото">
                      Індивідуальний проект за фото
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e3322] mb-1.5">
                    Коментар або розміри ділянки:
                  </label>
                  <textarea
                    rows="3"
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Напишіть приблизні розміри або ваші побажання..."
                    className="w-full bg-[#f9f8f5] border border-[#1e3322]/15 rounded-lg px-4 py-3 text-sm text-[#1e3322] placeholder-gray-400 focus:outline-none focus:border-[#c99b63] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c99b63] hover:bg-[#b0824b] text-white font-bold py-3.5 rounded-lg text-sm transition-all shadow-md shadow-[#c99b63]/25 hover:-translate-y-0.5 mt-2"
                >
                  Отримати консультацію та 3D-ескіз
                </button>

                <p className="text-[11px] text-[#5e6c62] text-center mt-3">
                  🔒 Ваші дані конфіденційні та не передаються третім особам.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
