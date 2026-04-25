import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactInfo() {
  return (
    <section id="contact" className="relative group">
      <div className="flex flex-col lg:flex-row min-h-[400px]">
        {/* Left Side (Charcoal) */}
        <div className="lg:w-1/2 bg-charcoal p-8 md:p-12 flex flex-col justify-center lg:rounded-r-[3rem] lg:z-10 shadow-2xl">
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
            
            <div className="space-y-4 text-white">
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
        <div className="lg:w-1/2 bg-slate-50 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-10 grid-pattern pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center lg:text-left relative z-10"
          >
            <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] mb-4">ОБАДЕТЕ СЕ СЕГА</p>
            <a 
              href="tel:+359897777224" 
              className="text-3xl md:text-5xl lg:text-6xl font-black text-accent hover:text-teal transition-all tracking-tighter leading-none block mb-6"
            >
              +359 897 777 224
            </a>
            <div className="inline-block px-6 py-4 bg-charcoal rounded-2xl shadow-xl">
              <p className="text-xs font-black text-teal uppercase tracking-widest">РАБОТИМ 24/7 ЗА ВАС</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
