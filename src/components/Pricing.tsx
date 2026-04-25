import { Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const pricingTiers = [
  {
    title: 'ОСНОВНИ УСЛУГИ',
    color: 'border-teal',
    items: [
      { name: 'ДИАГНОСТИКА', price: '30 лв' },
      { name: 'СМЯНА ВОДОМЕР', price: 'от 40 лв' },
      { name: 'МЕСИТЕЛ / МИВКА', price: 'от 50 лв' },
    ]
  },
  {
    title: 'СПЕЦИАЛИЗИРАНИ',
    color: 'border-teal',
    items: [
      { name: 'ВЕРТ. ЩРАНГ', price: 'По запитв.' },
      { name: 'ХОРИЗ. ЩРАНГ', price: 'По запитв.' },
      { name: 'ОТПУШВАНЕ', price: 'от 70 лв' },
      { name: 'МОНТАЖ БОЙЛЕР', price: 'от 80 лв' },
    ]
  },
  {
    title: 'СПЕШНИ / 24X7',
    color: 'border-t-8 border-coral',
    items: [
      { name: 'НОЩНА АВАРИЯ', price: 'от 100 лв' },
      { name: 'СПЕШЕН ОГЛЕД', price: 'от 50 лв' },
      { name: 'РЕМОНТ ТЕЧ', price: 'от 90 лв' },
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 py-16 md:py-24">
      <div className="container-wide px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left Side (40%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-[40%] text-center lg:text-left w-full"
          >
            <span className="text-teal text-xs font-black tracking-[0.4em] mb-4 block uppercase leading-none">
              ПРОЗРАЧНИ ЦЕНИ
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-charcoal leading-none uppercase tracking-tighter mb-4">
              ПРОЗРАЧНИ <br /><span className="text-teal">ЦЕНОВИ</span> ЛИСТИ
            </h2>
            <p className="text-charcoal/70 text-sm font-bold mb-6 max-w-sm mx-auto lg:mx-0">
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
          <div className="lg:w-[60%] flex flex-wrap justify-center lg:grid lg:grid-cols-3 gap-3 md:gap-4 w-full">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white p-4 md:p-6 rounded-3xl border-t-8 ${tier.color} shadow-sm group hover:shadow-xl transition-all duration-300 text-center w-[calc(50%-0.5rem)] md:w-[calc(48%-1rem)] lg:w-full`}
              >
                <h3 className="text-[9px] md:text-xs font-black text-teal tracking-normal md:tracking-[0.2em] mb-6 border-b border-sand pb-4 uppercase">
                  {tier.title}
                </h3>
                <div className="space-y-4 mb-6">
                  {tier.items.map((item) => (
                    <div key={item.name} className="flex flex-col">
                      <span className="text-[10px] md:text-[11px] font-bold text-charcoal/80 uppercase tracking-widest leading-tight">{item.name}</span>
                      <span className="text-sm md:text-base font-black text-charcoal">{item.price}</span>
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
