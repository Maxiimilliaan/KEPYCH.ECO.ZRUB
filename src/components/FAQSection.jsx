import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Який фундамент необхідний під альтанку чи садовий будиночок?',
    answer:
      'Для легких альтанок та гойдалок фундамент не потрібен — достатньо підготувати рівну поверхню або виставити бетонні блоки. Для великих альтанок та будинків зі зрубу ми рекомендуємо гвинтові палі або стовпчастий бетонний фундамент, який наші майстри можуть встановити безпосередньо в день монтажу.',
  },
  {
    id: 2,
    question: 'Чим обробляється деревина зрубу для довговічності?',
    answer:
      'Ми використовуємо сертифіковані антисептики та лаки європейських брендів (Tikkurila, Remmers). Вони глибоко просочують волокна дерева, захищаючи від гниття, плісняви, жуків-короїдів та вигорання на сонці. Фінішне покриття підкреслює натуральну структуру та візерунок деревини.',
  },
  {
    id: 3,
    question: 'Скільки часу триває виготовлення та монтаж споруди?',
    answer:
      'Виготовлення комплекту стін на виробництві займає від 7 до 14 робочих днів залежно від складності проекту. Збірка на вашій ділянці для альтанок та гойдалок триває лише 1–2 дні, оскільки конструкція попередньо контрольно збирається на заводі.',
  },
  {
    id: 4,
    question: 'Чи будуєте ви за індивідуальними ескізами (з фото в інтернеті)?',
    answer:
      'Так! Понад 60% наших замовлень — це ексклюзивні проекти. Ви можете надіслати нам будь-яке фото чи креслення, і наш конструктор безкоштовно розробить технічну 3D-модель та точний кошторис.',
  },
  {
    id: 5,
    question: 'Як відбувається оплата та чи фіксується ціна в договорі?',
    answer:
      'Оплата здійснюється поетапно за договором підряду: 50% аванс для фіксації вартості лісу та запуску в роботу, решта 50% — після завершення монтажу та підписання акту прийому-передачі. Вартість у договорі є фіксованою та не зростає під час будівництва.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  const toggle = id => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#f9f8f5]">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#c99b63] text-xs font-bold uppercase tracking-[2px] block mb-3">
            Часті запитання
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#1e3322] leading-tight mb-4">
            Відповіді на популярні питання
          </h2>
          <p className="text-[#5e6c62] text-sm sm:text-base leading-relaxed">
            Якщо у вас залишились сумніви, ознайомтесь з нашою інформацією або зателефонуйте
            напряму.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map(faq => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen
                    ? 'border-[#c99b63]/30 shadow-md'
                    : 'border-[#1e3322]/5 hover:border-[#c99b63]/30'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-[#1e3322] hover:text-[#c99b63] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-all duration-300 ${
                      isOpen ? 'bg-[#c99b63] text-white rotate-45' : 'bg-[#1e3322]/5 text-[#1e3322]'
                    }`}
                  >
                    +
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5e6c62] leading-relaxed border-t border-[#1e3322]/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
