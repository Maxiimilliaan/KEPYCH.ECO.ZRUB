import React, { useState, useEffect } from 'react';

const portfolioItems = [
  {
    id: 1,
    category: 'gazebo',
    title: 'Літня альтанка з бруса',
    location: 'м. Житомир',
    image: '/photo/besed.jpg',
    desc: 'Відкрита садова альтанка 3×4 м з декоративними решітками та бітумною черепицею.',
  },
  {
    id: 2,
    category: 'house',
    title: 'Дачний котедж зі зрубу',
    location: 'м. Яремче, Карпати',
    image: '/photo/dim.jpg',
    desc: 'Двоповерховий житловий котедж із карпатської смереки Ø26 см із терасою та балконом.',
  },
  {
    id: 3,
    category: 'swing',
    title: 'Садова гойдалка з масиву дуба',
    location: 'смт. Бородянка, Київська обл.',
    image: '/photo/goidalka.jpg',
    desc: 'Посилена конструкція на 4 особи з захисним дашком та анатомічним сидінням.',
  },
  {
    id: 4,
    category: 'gazebo',
    title: 'Зрубова альтанка з меблями',
    location: 'м. Буча, Київська обл.',
    image: '/photo/1.jpg',
    desc: 'Комплексне рішення з масивним столом та двома лавами під ключ.',
  },
  {
    id: 5,
    category: 'swing',
    title: 'Садова гойдалка «Еко-Комфорт»',
    location: 'с. Гореничі, Київська обл.',
    image: '/photo/2.jpg',
    desc: 'Виготовлена з кругляка смереки, покрита фінським маслом Tikkurila Valtti.',
  },
  {
    id: 6,
    category: 'swing',
    title: 'Авторська гойдалка зі зрубу',
    location: 'м. Фастів, Київська обл.',
    image: '/photo/4.jpg',
    desc: 'Міцна А-подібна ферма з підвісами на оцинкованих підшипникових ланцюгах.',
  },
  {
    id: 7,
    category: 'swing',
    title: 'Посилена гойдалка «Богатир»',
    location: 'смт. Ворзель, Київська обл.',
    image: '/photo/5.jpg',
    desc: 'Масивні колоди Ø22 см здатні витримувати навантаження до 500 кг.',
  },
  {
    id: 8,
    category: 'gazebo',
    title: 'Виробництво гойдалки з перголами',
    location: 'м. Київ, наше виробництво',
    image: '/photo/6.jpg',
    desc: 'Контрольне складання та виготовлення садових конструкцій з перголами.',
  },
  {
    id: 9,
    category: 'swing',
    title: 'Тонована гойдалка з навісом',
    location: 'м. Житомир',
    image: '/photo/7.jpg',
    desc: 'Глибоке тонування під темний горіх з потрійним захистом від ультрафіолету.',
  },
  {
    id: 10,
    category: 'swing',
    title: 'Преміальна Х-гойдалка з гратами',
    location: 'с. Гатне, Київська обл.',
    image: '/photo/8.jpg',
    desc: 'Дизайнерські бічні стійки з діагональними розкосами та фігурною обробкою торців.',
  },
  {
    id: 11,
    category: 'gazebo',
    title: 'Шестигранна зрубова альтанка',
    location: 'с. Плюти, Київська обл.',
    image: '/photo/9.jpg',
    desc: 'Містка кругла альтанка діаметром 4 метри для великої компанії до 14 осіб.',
  },
  {
    id: 12,
    category: 'swing',
    title: 'Класична гойдалка зі зрубу',
    location: 'м. Обухів, Київська обл.',
    image: '/photo/10.jpg',
    desc: 'Традиційний карпатський стиль, ідеально вписується у ландшафт саду.',
  },
  {
    id: 13,
    category: 'custom',
    title: 'Дитячий комплекс «Зруб-Ленд»',
    location: 'с. Вишеньки, Київська обл.',
    image: '/photo/11.jpg',
    desc: 'Ігрове містечко з вежею, хвилястою гіркою та безпечними підвісами.',
  },
  {
    id: 14,
    category: 'custom',
    title: 'Садові меблі зі зрубу',
    location: 'смт. Східниця, Львівська обл.',
    image: '/photo/12.jpg',
    desc: 'Масивний стіл та лави зі струганого карпатського дуба ручної тески.',
  },
  {
    id: 15,
    category: 'gazebo',
    title: 'Різьблена альтанка',
    location: 'м. Косів, Івано-Франківська обл.',
    image: '/photo/13.jpg',
    desc: 'Гуцульські орнаменти, різьблені карнизи та декоративні кутові консолі.',
  },
  {
    id: 16,
    category: 'gazebo',
    title: 'Альтанка з декоративною решіткою',
    location: 'с. Яблуниця, Івано-Франківська обл.',
    image: '/photo/14.jpg',
    desc: 'Стінові перголи для в’юнких рослин та зона для встановлення барбекю.',
  },
  {
    id: 17,
    category: 'house',
    title: 'Зруб садового будинку',
    location: 'с. Микуличин, Івано-Франківська обл.',
    image: '/photo/15.jpg',
    desc: 'Затишний гостьовий котедж 5×6 м з оциліндрованого бруса смереки.',
  },
  {
    id: 18,
    category: 'house',
    title: 'Зруб лазні на виробництві',
    location: 'наше виробництво',
    image: '/photo/16.jpg',
    desc: 'Контрольна збірка парної та кімнати відпочинку перед доставкою клієнту.',
  },
  {
    id: 19,
    category: 'custom',
    title: "Дерев'яне ліжко зі зрубу",
    location: 'в процесі виготовлення',
    image: '/photo/17.jpg',
    desc: 'Масивне двоспальне ліжко з масиву сосни з виразною природною текстурою.',
  },
  {
    id: 20,
    category: 'gazebo',
    title: 'Накрита альтанка зі зрубу',
    location: 'с. Синевирська Поляна, Закарпаття',
    image: '/photo/18.jpg',
    desc: 'Капітальна всесезонна конструкція з дикого кругляка великого калібру.',
  },
  {
    id: 21,
    category: 'custom',
    title: 'Декоративний колодязь',
    location: 'м. Яремче, Івано-Франківська обл.',
    image: '/photo/19.jpg',
    desc: 'Оздоблювальний зрубовий оголовок колодязя з коловоротом та різьбленим дашком.',
  },
  {
    id: 22,
    category: 'gazebo',
    title: 'Садова бесідка-навіс',
    location: 'смт. Верховина, Івано-Франківська обл.',
    image: '/photo/21.jpg',
    desc: 'Широкий навіс для літніх обідів на свіжому повітрі біля річки.',
  },
  {
    id: 23,
    category: 'house',
    title: "Дерев'яний каркас будинку",
    location: 'с. Татарів, Івано-Франківська обл.',
    image: '/photo/22.jpg',
    desc: 'Потужна кроквяна система та каркасні перекриття житлового шале.',
  },
  {
    id: 24,
    category: 'house',
    title: 'Зруб лазні з оциліндрованої колоди',
    location: 'м. Коломия, Івано-Франківська обл.',
    image: '/photo/23.jpg',
    desc: 'Автентична баня на дровах з канадським замком та екологічним утеплювачем.',
  },
  {
    id: 25,
    category: 'swing',
    title: 'Садова гойдалка з навісом',
    location: 'м. Ужгород, Закарпаття',
    image: '/photo/24.jpg',
    desc: 'Темне захисне покриття, містке сидіння 180 см з дубових ламелей.',
  },
  {
    id: 26,
    category: 'custom',
    title: 'Різьблені скульптури Ведмедя та Сови',
    location: 'авторська ручна робота',
    image: '/photo/25 (1).png',
    desc: 'Художнє різьблення по дереву бензопилою для оформлення подвір’я.',
  },
  {
    id: 27,
    category: 'gazebo',
    title: 'Бесідка-навіс для дачі',
    location: 'с. Поляниця (Буковель), Івано-Франківська обл.',
    image: '/photo/26.png',
    desc: 'Відкрита конструкція з масивними кутовими колодами та мангальною зоною.',
  },
  {
    id: 28,
    category: 'custom',
    title: 'Двоспальне ліжко зі зрубу',
    location: 'с. Козин, Київська обл.',
    image: '/photo/27.png',
    desc: 'Ексклюзивні меблі ручної роботи з дикого карпатського кругляка.',
  },
  {
    id: 29,
    category: 'gazebo',
    title: 'Монтаж круглої альтанки',
    location: 'м. Вишгород, Київська обл.',
    image: '/photo/28.png',
    desc: 'Процес чистового складання конструкції на ділянці клієнта.',
  },
  {
    id: 30,
    category: 'swing',
    title: "Дерев'яна садова гойдалка",
    location: 'смт. Ворохта, Івано-Франківська обл.',
    image: '/photo/29.png',
    desc: 'Класична карпатська гойдалка з натуральним захистом лляною олією.',
  },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(null);

  const filtered =
    filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = e => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') setCurrentIndex(null);
      if (e.key === 'ArrowRight') {
        setCurrentIndex(prev => (prev + 1) % filtered.length);
      }
      if (e.key === 'ArrowLeft') {
        setCurrentIndex(prev => (prev - 1 + filtered.length) % filtered.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, filtered.length]);

  const activeItem = currentIndex !== null ? filtered[currentIndex] : null;

  return (
    <section id="portfolio" className="py-24 bg-[#f9f8f5]">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#c99b63] text-xs font-bold uppercase tracking-[2px] block mb-3">
            Портфоліо
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#1e3322] leading-tight mb-4">
            Галерея наших об'єктів ({portfolioItems.length})
          </h2>
          <p className="text-[#5e6c62] text-sm sm:text-base max-w-[650px] mx-auto leading-relaxed">
            Реальні фотографії побудованих нами альтанок, будинків зі зрубу та гойдалок у різних
            куточках України.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', title: `Всі роботи (${portfolioItems.length})` },
              {
                id: 'gazebo',
                title: `Альтанки (${portfolioItems.filter(i => i.category === 'gazebo').length})`,
              },
              {
                id: 'house',
                title: `Будинки та лазні (${portfolioItems.filter(i => i.category === 'house').length})`,
              },
              {
                id: 'swing',
                title: `Садові гойдалки (${portfolioItems.filter(i => i.category === 'swing').length})`,
              },
              {
                id: 'custom',
                title: `Індивідуальні вироби (${portfolioItems.filter(i => i.category === 'custom').length})`,
              },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-[#1e3322] text-white shadow-md'
                    : 'bg-white text-[#5e6c62] border border-[#1e3322]/10 hover:border-[#c99b63] hover:text-[#c99b63]'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - Responsive 30 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer h-64 border border-[#1e3322]/5"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121e15]/90 via-[#121e15]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xs border border-white/30 text-white">
                  🔍
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1 line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#c99b63] font-medium">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Next / Prev */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in"
            onClick={() => setCurrentIndex(null)}
          >
            {/* Prev Button */}
            <button
              onClick={e => {
                e.stopPropagation();
                setCurrentIndex(prev => (prev - 1 + filtered.length) % filtered.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl flex items-center justify-center transition-all border border-white/20"
              aria-label="Попереднє фото"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={e => {
                e.stopPropagation();
                setCurrentIndex(prev => (prev + 1) % filtered.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl flex items-center justify-center transition-all border border-white/20"
              aria-label="Наступне фото"
            >
              ›
            </button>

            {/* Close Button */}
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/15 hover:bg-[#c99b63] text-white flex items-center justify-center font-bold text-lg transition-all border border-white/20"
              aria-label="Закрити"
            >
              ✕
            </button>

            {/* Lightbox Box */}
            <div
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="max-h-[65vh] bg-[#0c140e] flex items-center justify-center relative">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full max-h-[65vh] object-contain"
                />
                <span className="absolute bottom-3 right-4 text-[11px] text-white/80 bg-black/60 px-3 py-1 rounded-full border border-white/15">
                  {currentIndex + 1} / {filtered.length}
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <div className="text-xs font-bold text-[#c99b63] uppercase tracking-wider mb-1">
                  📍 {activeItem.location}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1e3322] mb-2">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-[#5e6c62] leading-relaxed">{activeItem.desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
