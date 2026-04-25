import { motion } from 'motion/react';

const steps = [
  { id: '01', title: 'ОГЛЕД', text: 'Безплатен оглед и диагностика на място.' },
  { id: '02', title: 'ОФЕРТА', text: 'Изготвяне на детайлна оферта с фиксирана цена.' },
  { id: '03', title: 'РЕМОНТ', text: 'Професионално изпълнение от нашите специалисти.' },
  { id: '04', title: 'ГАРАНЦИЯ', text: 'Приемане на работата и издаване на гаранционна карта.' },
];

export default function Process() {
  return (
    <section className="bg-sand py-8 md:py-10 border-t-8 border-teal">
      <div className="container-wide px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-charcoal uppercase tracking-tighter leading-none mb-4">
            ПРОЦЕС НА <br /><span className="text-coral">РАБОТА</span>
          </h2>
          <div className="h-1.5 w-40 bg-charcoal"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 md:p-8 rounded-3xl relative group hover:border-teal transition-colors border-2 border-transparent"
            >
              <span className="text-8xl font-black text-sand/50 absolute top-4 right-8 select-none group-hover:text-teal/10">{step.id}</span>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-steel text-sm font-medium leading-relaxed">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
