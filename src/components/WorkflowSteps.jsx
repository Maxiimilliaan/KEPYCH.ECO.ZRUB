import React from 'react';

const steps = [
  {
    step: '1',
    title: 'Дзвінок або Квіз',
    desc: 'Ви залишаєте заявку або телефонуєте нам. Ми обговорюємо загальні побажання щодо проекту, розмірів та матеріалу.',
  },
  {
    step: '2',
    title: 'Ескіз & Кошторис',
    desc: 'Створюємо 3D-модель (ескіз) майбутньої конструкції, погоджуємо всі деталі та фіксуємо остаточну вартість у договорі.',
  },
  {
    step: '3',
    title: 'Виробництво комплекту',
    desc: 'На нашому заводі відбираємо деревину, калібруємо її, обробляємо вогнебіозахистом та робимо контрольну збірку стін.',
  },
  {
    step: '4',
    title: 'Доставка & Монтаж',
    desc: 'Привозимо комплект на вашу ділянку та збираємо його за 1–2 дні. Ви приймаєте готову роботу та насолоджуєтесь результатом.',
  },
];

export default function WorkflowSteps() {
  return (
    <section id="steps" className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#c99b63] text-xs font-bold uppercase tracking-[2px] block mb-3">
            Процес роботи
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#1e3322] leading-tight mb-4">
            4 простих кроки до результату
          </h2>
          <p className="text-[#5e6c62] text-sm sm:text-base max-w-[650px] mx-auto leading-relaxed">
            Ми мінімізували клопоти для клієнта. Весь процес прозорий, зрозумілий та виконується в
            строк.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map(item => (
            <div
              key={item.step}
              className="bg-[#f9f8f5] rounded-2xl p-8 border border-[#1e3322]/5 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-[#1e3322] text-[#c99b63] border-2 border-[#c99b63] flex items-center justify-center font-extrabold text-lg mx-auto mb-6 shadow-md shadow-[#1e3322]/15 group-hover:bg-[#c99b63] group-hover:text-white transition-all">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-[#1e3322] mb-3 group-hover:text-[#c99b63] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5e6c62] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
