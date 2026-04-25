import { ShieldCheck, Ruler, Briefcase, Zap, Settings, Award } from 'lucide-react';
import { motion } from 'motion/react';

const badges = [
  { icon: ShieldCheck, title: 'ЛИЦЕНЗИРАНИ', text: 'Пълна сертификация за ВиК дейности в България.' },
  { icon: Ruler, title: 'ПРЕЦИЗНОСТ', text: 'Работа по технически чертежи и стриктни стандарти.' },
  { icon: Briefcase, title: 'ОПИТ', text: 'Над 10 години в индустриалното строителство.' },
  { icon: Zap, title: 'БЪРЗИНА', text: 'Реакция до 30 минути за спешни аварии.' },
  { icon: Settings, title: 'ТЕХНИКА', text: 'Последно поколение професионални инструменти.' },
  { icon: Award, title: 'ГАРАНЦИЯ', text: 'Писмена гаранция до 10 години за всеки ремонт.' },
];

export default function Expertise() {
  return (
    <section className="bg-charcoal py-8 md:py-10 relative">
      <div className="container-wide px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-teal text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all duration-300">
                  <badge.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{badge.title}</h3>
                  <p className="text-sand/60 text-sm font-medium leading-relaxed">{badge.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
