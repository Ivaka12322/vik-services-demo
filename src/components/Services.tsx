import { Droplets, Wrench, Thermometer, ArrowDownToLine, Hammer, AlertCircle, Check } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    num: '01',
    title: 'ВиК Инсталации',
    description: 'Цялостна подмяна на стари корозирали тръби с модерни решения.',
    icon: Droplets,
    image: '/Photo 4.jpg',
  },
  {
    num: '02',
    title: 'Ремонт на Канализация',
    description: 'Ремонт и прочистване на канали за дъждовни и отпадни води.',
    icon: Wrench,
    image: '/Photo 11.jpg',
  },
  {
    num: '03',
    title: 'Отоплителни Инсталации',
    description: 'Монтаж на парно, водно подово отопление и термопомпи.',
    icon: Thermometer,
    image: '/Photo 13.jpeg',
  },
  {
    num: '04',
    title: 'Смяна на Щрангове',
    description: 'Цялостна подмяна на стари корозирали тръби с модерни безшумни решения.',
    icon: ArrowDownToLine,
    image: '/Photo 2.jpg',
  },
  {
    num: '05',
    title: 'Къртачни Услуги',
    description: 'Професионално къртене на бетон и тухла за нови инсталации.',
    icon: Hammer,
    image: '/Photo 15.jpg',
  },
  {
    num: '06',
    title: 'Спешни Аварии',
    description: 'Мобилни екипи с бърза реакция при течове и сериозни аварии.',
    icon: AlertCircle,
    image: '/Photo 14.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-charcoal pt-8 md:pt-10 pb-20 relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5 grid-pattern pointer-events-none"></div>
      
      {/* Fade into the next section (white) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-20"></div>

      <div className="container-wide px-4 relative z-10">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-teal text-xs font-black tracking-[0.4em] mb-4 block uppercase leading-none">
              КАКВО ПРАВИМ
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-none uppercase tracking-tighter">
              ВСИЧКИ <span className="text-teal">ВиК УСЛУГИ</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-5 rounded-xl group overflow-hidden h-[240px] md:h-[280px]"
            >
              {/* Background Image with Gradient Overlay */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90 z-10"></div>
              
              <div className="relative z-20 h-full flex flex-col">
                <div className="flex justify-between items-start mb-auto">
                  <div className="w-12 h-12 bg-teal/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all duration-500">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black text-white/20 select-none group-hover:text-white/40 transition-colors">
                    {service.num}
                  </span>
                </div>
                
                <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sand/80 text-xs font-medium leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>

                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-[10px] font-black text-teal hover:text-white transition-colors uppercase tracking-[0.2em] mt-auto"
                >
                  ПОРЪЧАЙ СЕГА
                  <ArrowDownToLine className="w-3 h-3 rotate-[270deg]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
