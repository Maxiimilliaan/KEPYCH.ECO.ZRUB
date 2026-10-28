import React from 'react';

const advantages = [
  {
    id: 1,
    icon: '🌲',
    title: 'Екологічний карпатський ліс',
    desc: 'Для будівництва ми використовуємо добірну карпатську смереку, сосну та віковий дуб. Деревина заготовлюється в екологічно безпечних лісгоспах.',
  },
  {
    id: 2,
    icon: '🪓',
    title: 'Майстерна ручна робота',
    desc: 'Наші теслярі володіють автентичною технологією ручної рубки чаш. Кожна колода підганяється вручну з точністю до міліметра.',
  },
  {
    id: 3,
    icon: '⚙️',
    title: 'Власна деревообробка',
    desc: 'Повний цикл заготівлі, сушки та калібрування колод на нашому власному обладнанні. Ніяких посередників та зайвих націнок.',
  },
  {
    id: 4,
    icon: '🛠️',
    title: 'Монтаж силами профі',
    desc: 'Доставляємо конструкцію на вашу ділянку у вигляді готового стінового комплекту. Швидкий монтаж професійною бригадою за 1–2 дні.',
  },
];

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#c99b63] text-xs font-bold uppercase tracking-[2px] block mb-3">
            Чому KEPYCH ECO ZRUB?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#1e3322] leading-tight mb-4">
            Наші ключові переваги
          </h2>
          <p className="text-[#5e6c62] text-sm sm:text-base max-w-[650px] mx-auto leading-relaxed">
            Кожен зруб для нас — це окремий витвір мистецтва. Ми пильнуємо високі стандарти на
            кожному етапі.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {advantages.map(adv => (
            <div
              key={adv.id}
              className="bg-[#f9f8f5] rounded-2xl p-8 border border-[#1e3322]/5 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Bottom active line on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1e3322] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              <div>
                <div className="w-14 h-14 rounded-xl bg-white border border-[#1e3322]/5 flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:bg-[#1e3322] group-hover:text-white transition-all">
                  {adv.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3322] mb-3 group-hover:text-[#c99b63] transition-colors">
                  {adv.title}
                </h3>
                <p className="text-sm text-[#5e6c62] leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
