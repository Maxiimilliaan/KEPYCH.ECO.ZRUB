import React, { useReducer, useEffect } from 'react';

const basePrices = {
  gazebo: 45000,
  house: 145000,
  swing: 18000,
  custom: 55000,
};

const sizeMultipliers = {
  compact: 1.0,
  medium: 1.35,
  large: 1.8,
  custom: 2.1,
};

const woodMultipliers = {
  spruce: 1.0,
  pine: 1.15,
  oak: 1.45,
};

const initialState = {
  step: 1,
  type: 'gazebo',
  size: 'compact',
  wood: 'spruce',
  roof: 'bitumen',
  estimatedPrice: 45000,
};

function calculatePrice(type, size, wood) {
  const base = basePrices[type] || 45000;
  const sizeMod = sizeMultipliers[size] || 1.0;
  const woodMod = woodMultipliers[wood] || 1.0;
  return Math.round(base * sizeMod * woodMod);
}

function quizReducer(state, action) {
  switch (action.type) {
    case 'SET_TYPE': {
      const newType = action.payload;
      const price = calculatePrice(newType, state.size, state.wood);
      return { ...state, type: newType, estimatedPrice: price };
    }
    case 'SET_SIZE': {
      const newSize = action.payload;
      const price = calculatePrice(state.type, newSize, state.wood);
      return { ...state, size: newSize, estimatedPrice: price };
    }
    case 'SET_WOOD': {
      const newWood = action.payload;
      const price = calculatePrice(state.type, state.size, newWood);
      return { ...state, wood: newWood, estimatedPrice: price };
    }
    case 'NEXT_STEP':
      return { ...state, step: Math.min(state.step + 1, 3) };
    case 'PREV_STEP':
      return { ...state, step: Math.max(state.step - 1, 1) };
    case 'RESTORE_STATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default function QuizConfigurator({ onCompleteQuiz }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  // Restore state from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kepych_quiz_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        dispatch({ type: 'RESTORE_STATE', payload: parsed });
      }
    } catch {
      // LocalStorage access may be restricted
    }
  }, []);

  // Save state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('kepych_quiz_data', JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const handleFinish = () => {
    if (onCompleteQuiz) {
      onCompleteQuiz(state);
    }
  };

  return (
    <section
      id="quiz"
      className="py-20 px-4 bg-[#121E15] relative overflow-hidden text-white border-y border-[#273E2E]/40"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#1A2C1F] border border-[#C99B63]/40 text-[#C99B63] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            Онлайн-конфігуратор
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Швидкий розрахунок вартості зрубу
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Дайте відповіді на 3 прості питання, і наш технолог прорахує точну вартість вашого
            проєкту
          </p>
        </div>

        <div className="bg-[#1A2C1F] border border-[#273E2E] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Progress bar */}
          <div className="w-full bg-[#121E15] h-2.5 rounded-full mb-8 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#C99B63] to-[#E5C189] h-full transition-all duration-300"
              style={{ width: `${(state.step / 3) * 100}%` }}
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="text-xs uppercase font-bold tracking-wider text-[#C99B63]">
              Крок {state.step} з 3
            </div>
            <div className="text-xs font-bold text-gray-300 bg-[#121E15] px-3 py-1 rounded-full border border-[#273E2E]">
              Попередня вартість:{' '}
              <span className="text-[#C99B63]">
                від {state.estimatedPrice.toLocaleString()} грн
              </span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            {state.step === 1 && 'Що саме ви плануєте побудувати?'}
            {state.step === 2 && 'Оберіть бажані габаритні розміри:'}
            {state.step === 3 && 'Оберіть матеріал та захисне покриття:'}
          </h3>

          {/* Step 1 Options */}
          {state.step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  id: 'gazebo',
                  title: 'Альтанку / Бесідку',
                  desc: 'Зруб або брус для відпочинку на дачі',
                  icon: '🏡',
                  priceNote: 'від 45 000 грн',
                },
                {
                  id: 'house',
                  title: 'Будинок / Лазню зі зрубу',
                  desc: 'Житловий котедж, сауна чи баня',
                  icon: '🌲',
                  priceNote: 'від 145 000 грн',
                },
                {
                  id: 'swing',
                  title: 'Садову гойдалку',
                  desc: 'Якісну гойдалку з масиву дуба чи смереки',
                  icon: '🪵',
                  priceNote: 'від 18 000 грн',
                },
                {
                  id: 'custom',
                  title: 'Індивідуальний виріб',
                  desc: 'За вашими ескізами, кресленнями чи фото',
                  icon: '📐',
                  priceNote: 'від 55 000 грн',
                },
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => dispatch({ type: 'SET_TYPE', payload: opt.id })}
                  className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
                    state.type === opt.id
                      ? 'border-[#C99B63] bg-[#C99B63]/10 ring-1 ring-[#C99B63] shadow-lg shadow-[#C99B63]/10'
                      : 'border-[#273E2E] bg-[#121E15]/60 hover:border-gray-500'
                  }`}
                >
                  <span className="text-3xl p-2 rounded-xl bg-[#121E15] border border-[#273E2E]">
                    {opt.icon}
                  </span>
                  <div className="flex-1">
                    <div className="font-bold text-white text-base">{opt.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{opt.desc}</div>
                    <div className="text-xs font-semibold text-[#C99B63] mt-2">{opt.priceNote}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2 Options */}
          {state.step === 2 && (
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: 'compact',
                    title: 'Компактний варіант',
                    size: '3.0 × 3.0 м (9 м²)',
                    desc: 'Ідеально для затишного подвір’я до 6 осіб',
                  },
                  {
                    id: 'medium',
                    title: 'Оптимальний розмір',
                    size: '4.0 × 4.0 м (16 м²)',
                    desc: 'Найпопулярніший формат для сімейного відпочинку до 10 осіб',
                  },
                  {
                    id: 'large',
                    title: 'Просторий комплекс',
                    size: '4.0 × 6.0 м (24 м²)',
                    desc: 'Для великої компанії, з місцем під BBQ/мангал',
                  },
                  {
                    id: 'custom',
                    title: 'Індивідуальні габарити',
                    size: 'Понад 25 м²',
                    desc: 'За індивідуальним архітектурним проектом',
                  },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => dispatch({ type: 'SET_SIZE', payload: opt.id })}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      state.size === opt.id
                        ? 'border-[#C99B63] bg-[#C99B63]/10 ring-1 ring-[#C99B63] shadow-lg shadow-[#C99B63]/10'
                        : 'border-[#273E2E] bg-[#121E15]/60 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-white text-base">{opt.title}</span>
                      <span className="text-xs font-semibold text-[#C99B63] bg-[#121E15] px-2.5 py-1 rounded-md border border-[#273E2E]">
                        {opt.size}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{opt.desc}</p>
                  </button>
                ))}
              </div>

              <div className="p-5 text-center bg-[#121E15] border border-[#273E2E] rounded-2xl">
                <div className="text-[#C99B63] text-sm font-bold mb-1">
                  Орієнтовний розрахунок сформовано!
                </div>
                <div className="text-2xl font-black text-white">
                  від {state.estimatedPrice.toLocaleString()} грн
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Включає стіновий комплект, доставку та збирання на ділянці.
                </div>
              </div>
            </div>
          )}

          {/* Step 3 Options */}
          {state.step === 3 && (
            <div className="space-y-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    id: 'spruce',
                    title: 'Карпатська смерека',
                    desc: 'Екологічна, легка деревина з приємним хвойним ароматом',
                    badge: 'Базовий вибір',
                  },
                  {
                    id: 'pine',
                    title: 'Високогірна сосна',
                    desc: 'Підвищена смолистість та стійкість до опадів',
                    badge: '+15% довговічність',
                  },
                  {
                    id: 'oak',
                    title: 'Віковий карпатський дуб',
                    desc: 'Максимальна твердість та преміальна благородна текстура',
                    badge: 'Преміум клас',
                  },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => dispatch({ type: 'SET_WOOD', payload: opt.id })}
                    className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      state.wood === opt.id
                        ? 'border-[#C99B63] bg-[#C99B63]/10 ring-1 ring-[#C99B63] shadow-lg shadow-[#C99B63]/10'
                        : 'border-[#273E2E] bg-[#121E15]/60 hover:border-gray-500'
                    }`}
                  >
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase text-[#C99B63] bg-[#121E15] px-2 py-0.5 rounded border border-[#273E2E] mb-2">
                        {opt.badge}
                      </span>
                      <div className="font-bold text-white text-base mb-1">{opt.title}</div>
                      <div className="text-xs text-gray-400 leading-relaxed">{opt.desc}</div>
                    </div>
                    <div className="mt-4 text-xs font-semibold text-[#2ECC71]">
                      ✓ Антисептик Tikkurila у комплекті
                    </div>
                  </button>
                ))}
              </div>

              <div className="p-6 text-center bg-[#121E15] border border-[#273E2E] rounded-2xl space-y-2">
                <div className="text-xs uppercase font-bold tracking-wider text-[#C99B63]">
                  Фінальний кошторис розраховано
                </div>
                <div className="text-3xl font-extrabold text-white">
                  від {state.estimatedPrice.toLocaleString()} грн
                </div>
                <p className="text-xs text-gray-400">
                  Включає повну комплектацію: стіновий комплект зі зрубу, кроквяну систему,
                  антисептичну обробку та монтаж.
                </p>
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#273E2E]">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#2ECC71] font-semibold">
              <span className="text-base">🎁</span> За проходження тесту гарантована знижка -5% на
              монтаж!
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {state.step > 1 && (
                <button
                  onClick={() => dispatch({ type: 'PREV_STEP' })}
                  className="flex-1 sm:flex-initial px-6 py-3 rounded-full border border-[#273E2E] text-xs font-bold text-gray-300 hover:text-white hover:border-[#C99B63] transition-all"
                >
                  Назад
                </button>
              )}
              <button
                onClick={() => {
                  if (state.step === 3) {
                    handleFinish();
                  } else {
                    dispatch({ type: 'NEXT_STEP' });
                  }
                }}
                className="flex-1 sm:flex-initial px-8 py-3 rounded-full bg-[#C99B63] text-[#121E15] text-xs sm:text-sm font-extrabold hover:bg-[#b0824b] transition-all shadow-lg shadow-[#C99B63]/25"
              >
                {state.step === 3 ? 'Отримати детальний кошторис' : 'Далі'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
