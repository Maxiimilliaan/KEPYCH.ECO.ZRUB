import React, { useState } from 'react';

const products = [
  {
    id: 'EZ-G01',
    category: 'gazebo',
    badge: 'Хіт продажу',
    name: 'Альтанка з дикого смерекового зрубу',
    desc: 'Масивна карпатська альтанка ручної рубки з канадським замком. Ідеальна для саду, тераси та сімейного відпочинку.',
    material: 'Карпатська смерека Ø24–28 см',
    size: '3×4 м, 4×5 м (12–20 м²)',
    price: 'від 45 000 грн',
    image: '/photo/besed.jpg',
  },
  {
    id: 'EZ-G02',
    category: 'gazebo',
    badge: 'Популярне',
    name: 'Сучасна літня альтанка з бруса',
    desc: 'Елегантна альтанка відкритого типу з профільованого бруса з декоративними рейковими перголами.',
    material: 'Сушений сосновий брус 150×150 мм',
    size: '3×3 м, 4×4 м (9–16 м²)',
    price: 'від 38 000 грн',
    image: '/photo/1.jpg',
  },
  {
    id: 'EZ-G03',
    category: 'gazebo',
    badge: 'Преміум',
    name: 'Шестигранна альтанка «Панорама»',
    desc: 'Простора кругова альтанка для великих компаній до 14 осіб із вбудованими лавами по периметру.',
    material: 'Кругляк смереки Ø22 см',
    size: 'Діаметр 4.2 м (14 м²)',
    price: 'від 52 000 грн',
    image: '/photo/9.jpg',
  },
  {
    id: 'EZ-H01',
    category: 'house',
    badge: 'Ексклюзив',
    name: 'Дачний котедж зі зрубу «Яремче»',
    desc: 'Затишний житловий або гостьовий будинок із масивного кругляка смереки. Чудова теплоізоляція та екологічність.',
    material: 'Зимовий ліс Ø26–30 см',
    size: '6×8 м (двоповерховий, 85 м²)',
    price: 'від 185 000 грн',
    image: '/photo/dim.jpg',
  },
  {
    id: 'EZ-H02',
    category: 'house',
    badge: 'Під ключ',
    name: 'Баня & Сауна зі зрубу під ключ',
    desc: 'Справжня карпатська парна з кімнатою відпочинку та мийною. Глибока обробка сертифікованим вогнебіозахистом.',
    material: 'Карпатська смерека та осика',
    size: '4×6 м (24 м²)',
    price: 'від 145 000 грн',
    image: '/photo/11.jpg',
  },
  {
    id: 'EZ-S01',
    category: 'swing',
    badge: 'Топ вибір',
    name: 'Садова гойдалка з масиву дуба',
    desc: 'Посилена дерев’яна гойдалка з захисним дахом та ергономічним сидінням для 3–4 осіб.',
    material: 'Масив дуба та кругляк смереки',
    size: 'Ширина сидіння 1.8 м, висота 2.2 м',
    price: 'від 18 000 грн',
    image: '/photo/goidalka.jpg',
  },
  {
    id: 'EZ-S02',
    category: 'swing',
    badge: 'Комплект',
    name: 'Комплект садових меблів (Стіл + 2 Лави)',
    desc: 'Масивний вуличний комплект із напівкруглого зрубу для альтанок, терас та зон BBQ.',
    material: 'Карпатський дуб / смерека',
    size: 'Стіл 2.0×0.9 м, лави 2.0 м',
    price: 'від 16 500 грн',
    image: '/photo/4.jpg',
  },
  {
    id: 'EZ-S03',
    category: 'swing',
    badge: 'Посилена',
    name: 'Посилена гойдалка «Богатир»',
    desc: 'Міцна ферма з колод Ø22 см з підвісом на оцинкованих ланцюгах із підшипниками.',
    material: 'Кругляк карпатської смереки',
    size: 'Ширина сидіння 2.0 м',
    price: 'від 21 000 грн',
    image: '/photo/5.jpg',
  },
  {
    id: 'EZ-S04',
    category: 'swing',
    badge: 'Преміум',
    name: 'Преміальна Х-гойдалка з гратами',
    desc: 'Дизайнерська гойдалка з різьбленими бічними перголами та м’яким підвісом.',
    material: 'Масив сосни та дубові планки',
    size: 'Габарити 2.2×1.8×2.3 м',
    price: 'від 22 500 грн',
    image: '/photo/8.jpg',
  },
];

export default function ProductCatalog({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = products.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.material.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="catalog" className="py-24 bg-[#f9f8f5]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#c99b63] text-xs font-bold uppercase tracking-[2px] block mb-3">
            Наша продукція
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#1e3322] leading-tight mb-4">
            Популярні проекти та вироби
          </h2>
          <p className="text-[#5e6c62] text-sm sm:text-base max-w-[650px] mx-auto leading-relaxed">
            Оберіть готову модель або замовте індивідуальне проектування за вашими розмірами та
            побажаннями.
          </p>

          {/* Filter pills & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {[
                { id: 'all', title: 'Всі вироби' },
                { id: 'gazebo', title: 'Альтанки & Бесідки' },
                { id: 'house', title: 'Будинки & Бані' },
                { id: 'swing', title: 'Гойдалки & Меблі' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === tab.id
                      ? 'bg-[#1e3322] text-white shadow-md'
                      : 'bg-white text-[#5e6c62] border border-[#1e3322]/10 hover:border-[#c99b63] hover:text-[#c99b63]'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="w-full sm:w-64">
              <input
                type="text"
                placeholder="🔍 Пошук за назвою..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#1e3322]/15 rounded-full px-4 py-2.5 text-xs text-[#1e3322] placeholder-gray-400 focus:outline-none focus:border-[#c99b63]"
              />
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#1e3322]/5 transition-all duration-300 flex flex-col group hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden relative bg-[#eae7e2]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <span className="absolute top-5 left-5 bg-[#1e3322] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {item.badge}
                </span>
                <span className="absolute top-5 right-5 bg-black/60 backdrop-blur-sm text-[#f5ebd9] text-[10px] font-semibold px-2.5 py-1 rounded-md">
                  {item.id}
                </span>
              </div>

              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#1e3322] text-[20px] group-hover:text-[#c99b63] transition-colors mb-2.5">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5e6c62] line-clamp-2 leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  {/* Specs Table */}
                  <div className="space-y-2 text-xs mb-6">
                    <div className="flex justify-between py-1.5 border-b border-dashed border-[#1e3322]/10">
                      <span className="text-[#5e6c62]">Матеріал:</span>
                      <span className="font-bold text-[#1e3322]">{item.material}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-dashed border-[#1e3322]/10">
                      <span className="text-[#5e6c62]">Базовий розмір:</span>
                      <span className="font-bold text-[#1e3322]">{item.size}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-[#5e6c62]">Термін монтажу:</span>
                      <span className="font-bold text-[#2ecc71]">1–2 дні під ключ</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-[#1e3322]/10 mt-auto">
                  <div>
                    <span className="block text-[10px] text-[#5e6c62] uppercase font-bold tracking-wider">
                      орієнтовна ціна
                    </span>
                    <span className="text-lg font-black text-[#1e3322]">{item.price}</span>
                  </div>
                  <button
                    onClick={() => onSelectProduct(item)}
                    className="bg-[#1e3322] hover:bg-[#c99b63] text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md hover:shadow-lg"
                  >
                    Детальніше
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-[#5e6c62]">
            За вашим запитом нічого не знайдено. Спробуйте змінити категорію або очистити пошуковий
            рядок.
          </div>
        )}
      </div>
    </section>
  );
}
