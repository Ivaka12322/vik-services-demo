import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactInfo() {
  return (
    <section id="contact" className="py-24 relative overflow-visible">
      <div className="container-wide px-4">
        <div className="flex flex-col lg:flex-row min-h-[500px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] overflow-hidden transform hover:-translate-y-2 transition-transform duration-700 bg-white">
          {/* Left Side (Charcoal) */}
          <div className="lg:w-1/2 bg-charcoal p-10 md:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-teal text-xs font-black tracking-[0.4em] mb-4 block uppercase leading-none">
                КОНТАКТИ
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-none uppercase tracking-tighter mb-6">
                ГОТОВИ ЛИ СТЕ <br /><span className="text-teal">ДА ЗАПОЧНЕМ?</span>
              </h2>
              <p className="text-slate-400 text-sm font-medium max-w-sm mb-8">
                Свържете се с нас за безплатна консултация и оглед на място в рамките на София и региона.
              </p>
              
              <div className="space-y-6 text-white border-t border-white/5 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal/20 rounded-xl flex items-center justify-center text-teal">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-300">гр. София, България</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal/20 rounded-xl flex items-center justify-center text-teal">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest leading-none text-slate-300">office@vik-sofia.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side (Light Surface) */}
          <div className="lg:w-1/2 bg-slate-50 p-10 md:p-16 flex flex-col justify-center relative overflow-hidden text-center lg:text-left">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="w-16 h-1 bg-teal mb-8 mx-auto lg:mx-0"></div>
              <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">ОБАДЕТЕ СЕ СЕГА</p>
              <a
                href="tel:+359897777224"
                className="inline-flex items-center gap-6 px-10 py-8 bg-charcoal rounded-3xl shadow-2xl hover:bg-teal transition-all group/btn transform hover:scale-105"
              >
                <div className="w-4 h-4 bg-teal group-hover/btn:bg-white rounded-full animate-pulse"></div>
                <span className="text-xl md:text-2xl font-black text-white tracking-widest group-hover/btn:text-white transition-colors">
                  +359 897 777 224
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
