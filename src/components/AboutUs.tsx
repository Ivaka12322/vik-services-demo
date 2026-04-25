import { Target, Clock, ShieldCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  { icon: Target, value: '500+', label: 'Завършени проекта' },
  { icon: Clock, value: '10+', label: 'Години опит' },
  { icon: Award, value: '24/7', label: 'Денонощна услуга' },
  { icon: ShieldCheck, value: '100%', label: 'Гаранция за качество' },
];

const benefits = [
  {
    title: 'ПРОФЕСИОНАЛИЗЪМ',
    text: 'Нашите екипи са съставени от сертифицирани специалисти с богат опит в индустриални и битови ВиК системи.'
  },
  {
    title: 'МОДЕРНА ТЕХНИКА',
    text: 'Използваме последно поколение инструменти и материали, които гарантират дълготрайност и надеждност.'
  },
  {
    title: 'КОРЕКТНИ ЦЕНИ',
    text: 'Предлагаме прозрачно ценообразуване без скрити такси. Плащате за реално свършена работа след оглед.'
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="container-wide px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-black text-charcoal uppercase tracking-tighter mb-4">
            ЗАЩО ДА <span className="text-teal">ИЗБЕРЕТЕ</span> НАС?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 md:p-8 rounded-3xl border border-teal/20 hover:border-teal transition-all group relative bg-white/20 backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-teal mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-4xl md:text-5xl font-black text-coral mb-2 tracking-tighter leading-none">
                {stat.value}
              </p>
              <p className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] text-center mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 mt-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-black text-charcoal mb-4 tracking-tight uppercase">
                {benefit.title}
              </h3>
              <p className="text-steel text-sm font-bold leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
