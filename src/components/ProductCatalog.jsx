import React, { useState } from 'react';

const products = [
  {
    id: 'EZ-G02',
    category: 'gazebo',
    name: 'Сучасна літня альтанка з бруса',
    desc: 'Елегантна альтанка відкритого типу з бруса з декоративною перголою для заміського будинку.',
    material: 'Сушений сосновий брус',
    size: '3x4 м, 4x4 м',
    price: 'від 45 000 грн',
    image: '/photo/1.jpg'
  },
  {
    id: 'EZ-H01',
    category: 'house',
    name: 'Дерев’яні будинки & Лазні зі зрубу',
    desc: 'Затишні гостьові або житлові будинки, літні котеджі та бані зі зрубу кругляка під ключ.',
    material: 'Зимовий карпатський кругляк',
    size: 'Індивідуальні розміри',
    price: 'Договірна (прорахунок)',
    image: '/photo/dim.jpg'
  },
  {
    id: 'EZ-S01',
    category: 'swing',
    name: 'Ексклюзивні садові гойдалки',
    desc: 'Міцні та ергономічні садові гойдалки з масиву дерева та кругляка із захисним навісом.',
    material: 'Дуб або масив сосни',
    size: '3-4 дорослих особи',
    price: 'від 18 000 грн',
    image: '/photo/goidalka.jpg'
  }
];

export default function ProductCatalog({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="catalog" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">Каталог наших виробів</h2>
        <p className="text-sm sm:text-base text-gray-400">Ми спеціалізуємось на спорудах з масиву дерева та дикого зрубу. Оберіть категорію:</p>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {[
            { id: 'all', title: 'Всі вироби' },
            { id: 'gazebo', title: 'Альтанки & Бесідки' },
            { id: 'house', title: 'Будинки зі зрубу' },
            { id: 'swing', title: 'Садові гойдалки' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#C99B63] text-[#121E15]'
                  : 'bg-[#1A2C1F] text-gray-300 border border-[#273E2E] hover:border-[#C99B63]'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div key={item.id} className="bg-[#1A2C1F] border border-[#273E2E] rounded-2xl overflow-hidden hover:border-[#C99B63]/60 transition-all flex flex-col group">
            <div className="h-56 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
              />
              <span className="absolute top-3 left-3 bg-[#121E15]/90 border border-[#C99B63]/30 text-[#C99B63] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                {item.id}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-white mb-2">{item.name}</h3>
                <p className="text-xs text-gray-300 mb-4 line-clamp-2 leading-relaxed">{item.desc}</p>
                <div className="border-t border-[#273E2E] pt-3 text-xs space-y-1.5 text-gray-400 mb-6">
                  <div>Матеріал: <span className="text-white font-medium">{item.material}</span></div>
                  <div>Розмір: <span className="text-white font-medium">{item.size}</span></div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#273E2E]">
                <div>
                  <div className="text-[10px] uppercase text-gray-400 font-bold">Орієнтовна ціна</div>
                  <div className="text-sm font-extrabold text-[#C99B63]">{item.price}</div>
                </div>
                <button
                  onClick={() => onSelectProduct(item)}
                  className="bg-[#121E15] text-white border border-[#273E2E] px-4 py-2 rounded-full text-xs font-bold hover:border-[#C99B63] transition-all"
                >
                  Детальніше
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
