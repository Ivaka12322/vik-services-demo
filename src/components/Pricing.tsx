import { Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const pricingTiers = [
  {
    title: 'ОСНОВНИ УСЛУГИ',
    color: 'border-teal',
    items: [
      { name: 'Посещение и диагностика', price: '30 лв' },
      { name: 'Смяна на водомер', price: 'от 40 лв' },
      { name: 'Монтаж смесител', price: 'от 50 лв' },
      { name: 'Монтаж мивка', price: 'от 60 лв' },
    ]
  },
  {
    title: 'СПЕЦИАЛИЗИРАНИ',
    color: 'border-teal',
    items: [
      { name: 'Вертикален щранг', price: 'По запитв.' },
      { name: 'Хоризонтален щранг', price: 'По запитв.' },
      { name: 'Отпушване на канали', price: 'от 70 лв' },
      { name: 'Монтаж бойлер', price: 'от 80 лв' },
    ]
  },
  {
    title: 'СПЕШНИ / 24X7',
    color: 'border-t-8 border-coral',
    items: [
      { name: 'Авария през нощта', price: 'от 100 лв' },
      { name: 'Спешен оглед', price: 'от 50 лв' },
      { name: 'Ремонт на течове', price: 'от 90 лв' },
      { name: 'Бърза реакция', price: 'Included' },
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-sand py-8 md:py-10">
      <div className="container-wide px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Side (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%]"
          >
            <span className="text-teal text-xs font-black tracking-[0.4em] mb-4 block uppercase leading-none">
              ПРОЗРАЧНИ ЦЕНИ
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-charcoal leading-none uppercase tracking-tighter mb-4">
              ПРОЗРАЧНИ <br /><span className="text-teal">ЦЕНОВИ</span> ЛИСТИ
            </h2>
            <p className="text-steel text-sm font-bold mb-6 max-w-sm">
              Вярваме в честността. Крайната оферта се изготвя само след безплатен оглед и оценка на щетите.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-5 rounded-2xl border-l-4 border-teal bg-white/40 backdrop-blur-sm italic text-xs text-charcoal/70">
                <Info className="w-5 h-5 text-teal flex-shrink-0" />
                <p>
                  * Всички цени са ориентировъчни. Окончателната работа зависи от състоянието на инсталацията.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-block bg-coral text-white px-8 py-4 bg-coral rounded-full font-black text-xs tracking-widest hover:bg-charcoal transition-all shadow-md"
              >
                ПОИСКАЙ ОФЕРТА
              </a>
            </div>
          </motion.div>

          {/* Right Side (60%) */}
          <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-6 rounded-3xl border-t-8 ${tier.color} shadow-sm group hover:shadow-xl transition-all duration-300`}
              >
                <h3 className="text-xs font-black text-teal tracking-[0.2em] mb-6 border-b border-sand pb-4">
                  {tier.title}
                </h3>
                <div className="space-y-4 mb-6">
                  {tier.items.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <span className="text-[10px] font-bold text-steel uppercase tracking-widest">{item.name}</span>
                      <span className="text-base font-black text-charcoal">{item.price}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href="#contact"
                  className="flex items-center gap-2 text-[10px] font-black text-charcoal group-hover:text-teal transition-colors uppercase tracking-widest"
                >
                  ВИЖ ПОВЕЧЕ
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
