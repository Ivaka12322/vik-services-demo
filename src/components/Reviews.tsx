import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Иван П.',
    category: 'Вертикален щранг',
    text: 'Отличен екип, бързо и качествено свършиха вертикалния щранг. Професионално отношение от първия оглед до завършването.',
  },
  {
    name: 'Мария С.',
    category: 'ВиК инсталация',
    text: 'Професионално отношение, справедливи цени. Бяхме притеснени за големия ремонт, но всичко мина гладко и чисто.',
  },
  {
    name: 'Георги Т.',
    category: 'Спешен ремонт',
    text: '24/7 услугата им спаси апартамента ми при голяма авария в полунощ. Дойдоха за 20 минути и спряха теча веднага.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-8 md:py-10 overflow-hidden">
      <div className="container-wide px-4">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-charcoal uppercase tracking-tighter leading-none mb-4">
            КАКВО КАЗВАТ <br /><span className="text-teal">КЛИЕНТИТЕ</span>
          </h2>
          <div className="h-1.5 w-40 bg-teal"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-sand p-6 md:p-8 rounded-3xl relative group"
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-teal/10 group-hover:text-teal/20 transition-colors" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                ))}
              </div>

              <p className="text-lg font-medium text-charcoal mb-10 leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="border-t border-teal/20 pt-6">
                <p className="text-xl font-black text-charcoal uppercase tracking-tight">{t.name}</p>
                <p className="text-[10px] font-bold text-steel uppercase tracking-widest">{t.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

