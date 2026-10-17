import React, { useReducer } from 'react';

const initialState = {
  step: 1,
  type: 'gazebo',
  size: 'medium',
  wood: 'spruce',
  roof: 'bitumen',
  estimatedPrice: 45000
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'SET_TYPE': {
      const basePrices = { gazebo: 45000, house: 145000, swing: 18000, custom: 55000 };
      return { ...state, type: action.payload, estimatedPrice: basePrices[action.payload] || 45000 };
    }
    case 'NEXT_STEP':
      return { ...state, step: Math.min(state.step + 1, 3) };
    case 'PREV_STEP':
      return { ...state, step: Math.max(state.step - 1, 1) };
    default:
      return state;
  }
}

export default function QuizConfigurator() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <section id="quiz" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">Швидкий розрахунок вартості зрубу</h2>
        <p className="text-sm sm:text-base text-gray-400">Дайте відповіді на 3 прості питання, і наш технолог прорахує точну вартість вашого проєкту</p>
      </div>

      <div className="bg-[#1A2C1F] border border-[#273E2E] rounded-2xl p-6 sm:p-10 shadow-2xl">
        {/* Progress bar */}
        <div className="w-full bg-[#121E15] h-2 rounded-full mb-8 overflow-hidden">
          <div 
            className="bg-[#C99B63] h-full transition-all duration-300"
            style={{ width: `${(state.step / 3) * 100}%` }}
          />
        </div>

        <div className="text-xs uppercase font-bold tracking-wider text-[#C99B63] mb-2">Крок {state.step} з 3</div>
        <h3 className="text-xl font-bold text-white mb-6">
          {state.step === 1 && "Що саме ви плануєте побудувати?"}
          {state.step === 2 && "Оберіть бажані габаритні розміри:"}
          {state.step === 3 && "Оберіть матеріал та захисне покриття:"}
        </h3>

        {/* Step 1 Options */}
        {state.step === 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { id: 'gazebo', title: 'Альтанку / Бесідку', desc: 'Зруб або брус для відпочинку', icon: '🏡' },
              { id: 'house', title: 'Будинок / Лазню зі зрубу', desc: 'Житловий котедж чи баня', icon: '🌲' },
              { id: 'swing', title: 'Садову гойдалку', desc: 'Якісну гойдалку з масиву дуба', icon: '🪵' },
              { id: 'custom', title: 'Індивідуальний виріб', desc: 'За вашими ескізами / розмірами', icon: '📐' }
            ].map(opt => (
              <button
                key={opt.id}
                onClick={() => dispatch({ type: 'SET_TYPE', payload: opt.id })}
                className={`p-5 rounded-xl border text-left transition-all flex items-start gap-3.5 ${
                  state.type === opt.id 
                    ? 'border-[#C99B63] bg-[#C99B63]/10 ring-1 ring-[#C99B63]' 
                    : 'border-[#273E2E] bg-[#121E15]/60 hover:border-gray-500'
                }`}
              >
                <span className="text-2xl">{opt.icon}</span>
                <div>
                  <div className="font-bold text-white text-sm">{opt.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{opt.desc}</div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Step 2 & 3 Placeholders for SPA reactivity */}
        {state.step > 1 && (
          <div className="p-8 text-center bg-[#121E15]/40 border border-[#273E2E] rounded-xl mb-8">
            <div className="text-[#C99B63] text-lg font-bold mb-2">Орієнтовний розрахунок сформовано!</div>
            <div className="text-2xl font-extrabold text-white mb-2">від {state.estimatedPrice.toLocaleString()} грн</div>
            <div className="text-xs text-gray-400">Включає стіновий комплект, доставку та збирання на ділянці.</div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-[#273E2E]">
          <div className="flex items-center gap-2 text-xs text-[#2ECC71] font-semibold">
            <span>🎁</span> За проходження тесту гарантована знижка -5% на монтаж!
          </div>
          <div className="flex gap-2">
            {state.step > 1 && (
              <button
                onClick={() => dispatch({ type: 'PREV_STEP' })}
                className="px-5 py-2.5 rounded-full border border-[#273E2E] text-xs font-bold hover:bg-[#121E15]"
              >
                Назад
              </button>
            )}
            <button
              onClick={() => dispatch({ type: 'NEXT_STEP' })}
              className="px-6 py-2.5 rounded-full bg-[#C99B63] text-[#121E15] text-xs font-bold hover:bg-[#b0824b]"
            >
              {state.step === 3 ? "Отримати детальний кошторис" : "Далі"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
