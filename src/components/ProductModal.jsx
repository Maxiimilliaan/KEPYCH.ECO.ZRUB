import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function ProductModal({ product, isOpen, onClose, onOrder }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#1e3322]/10 max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-[#1e3322] border border-[#1e3322]/10 flex items-center justify-center hover:bg-[#c99b63] hover:text-white transition-all font-bold shadow-sm"
          aria-label="Закрити"
        >
          ✕
        </button>

        <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-gray-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className="absolute bottom-4 left-6 bg-[#c99b63] text-[#121e15] font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.id}
          </span>
        </div>

        <div className="p-6 sm:p-7 space-y-5">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1e3322] mb-2 font-display">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#606a62] leading-relaxed">{product.desc}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 bg-[#f9f8f5] border border-[#1e3322]/10 rounded-xl text-xs">
            <div>
              <span className="text-[#606a62] block mb-1">Матеріал виготовлення:</span>
              <span className="text-[#1e3322] font-semibold">{product.material}</span>
            </div>
            <div>
              <span className="text-[#606a62] block mb-1">Рекомендовані габарити:</span>
              <span className="text-[#1e3322] font-semibold">{product.size}</span>
            </div>
            <div>
              <span className="text-[#606a62] block mb-1">Технологія кутів:</span>
              <span className="text-[#1e3322] font-semibold">Канадська чаша з шипом</span>
            </div>
            <div>
              <span className="text-[#606a62] block mb-1">Термін монтажу:</span>
              <span className="text-[#2ecc71] font-semibold">1–2 дні під ключ</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#1e3322]/10">
            <div>
              <div className="text-[10px] text-[#606a62] uppercase font-bold tracking-wider">
                Базова вартість:
              </div>
              <div className="text-xl font-extrabold text-[#c99b63]">{product.price}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-full border border-[#1e3322]/20 text-[#1e3322] hover:border-[#c99b63] hover:text-[#c99b63] text-xs font-semibold transition-all"
              >
                Закрити
              </button>
              <button
                onClick={() => {
                  onClose();
                  if (onOrder) onOrder(product);
                }}
                className="px-6 py-2.5 rounded-full bg-[#c99b63] hover:bg-[#b0824b] text-[#121e15] font-bold text-xs transition-all shadow-md shadow-[#c99b63]/25"
              >
                Замовити розрахунок
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
