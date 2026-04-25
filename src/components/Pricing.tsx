import { Info, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const servicesList = [
  { service: 'Мивка', method: 'монтаж' },
  { service: 'Шкаф мивка баня-кухня', method: 'монтаж' },
  { service: 'Тоалетна', method: 'монтаж' },
  { service: 'Казанче', method: 'монтаж' },
  { service: 'Моно блок', method: 'монтаж' },
  { service: 'Душ смесител', method: 'монтаж' },
  { service: 'Кухненска батерия', method: 'монтаж' },
  { service: 'Аксесоар за баня', method: 'монтаж' },
  { service: 'Пералня', method: 'монтаж' },
  { service: 'Радиатор лира', method: 'монтаж' },
  { service: 'Къртене', method: 'цена по договаряне' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24">
      <div className="container-wide px-4">
        <div className="mb-16 max-w-2xl mx-auto text-center">
          <span className="text-teal text-xs font-black tracking-[0.4em] mb-4 block uppercase leading-none">
            КАК РАБОТИМ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-charcoal leading-none uppercase tracking-tighter mb-4">
            ПРОФЕСИОНАЛНО <br /><span className="text-teal">ИЗПЪЛНЕНИЕ</span>
          </h2>
          <p className="text-charcoal/60 text-sm font-medium leading-relaxed">
            Всеки елемент от вашата ВиК система изисква специфичен подход и внимание към детайла. Ние гарантираме техническо съвършенство при всяко инсталиране.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Table Header */}
          <div className="flex justify-between items-end border-b-2 border-charcoal/10 pb-4 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal">Вид Услуга</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-teal">Вид СМР</span>
          </div>

          <div className="space-y-1">
            {servicesList.map((item, index) => (
              <div key={index} className="flex items-end gap-3 group py-3">
                <span className="text-sm md:text-base font-bold text-charcoal uppercase tracking-tight whitespace-nowrap group-hover:text-teal transition-colors">
                  {item.service}
                </span>
                <div className="flex-grow border-b-2 border-dotted border-slate-200 mb-1.5 transition-colors group-hover:border-teal/30"></div>
                <span className={`text-xs md:text-sm font-black uppercase tracking-widest whitespace-nowrap ${item.method.includes('договаряне') ? 'text-coral' : 'text-slate-400'}`}>
                  {item.method}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-slate-100 pt-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal flex items-center justify-center rounded-xl text-white">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-black text-charcoal uppercase tracking-widest">Индивидуални проекти</p>
              <p className="text-[11px] text-charcoal/60 font-medium italic">За обекти над 3 помещения - преференциални условия.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="bg-charcoal text-white px-10 py-5 rounded-full font-black text-xs tracking-widest hover:bg-teal transition-all shadow-xl flex items-center gap-3"
          >
            ПОИСКАЙТЕ ОГЛЕД <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
