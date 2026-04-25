import { Phone, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-charcoal overflow-hidden h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/Photo 12.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-40 grayscale-[20%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent"></div>
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
      </div>

      <div className="container-wide relative z-10 px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Side (Text content) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:max-w-3xl text-center lg:text-left"
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight text-white mb-4 tracking-tighter uppercase">
              Професионални <br />
              <span className="text-teal">ВиК&nbsp;&nbsp;РЕШЕНИЯ</span> <br />
              за вашия дом
            </h1>
            
            <p className="text-sm md:text-base text-slate-300 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Квалифицирани водопроводчици с над 15 години опит. 
              Индустриални стандарти за качество при всяко посещение.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal/20 rounded-xl flex items-center justify-center text-teal">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-black text-white leading-none">10+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Години опит</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal/20 rounded-xl flex items-center justify-center text-teal">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-black text-white leading-none">500+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Проекта</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6">
              <a
                href="tel:+359897777224"
                className="bg-accent text-white px-8 py-4 rounded-full font-black text-sm tracking-widest hover:bg-teal transition-all shadow-xl flex items-center gap-3 group"
              >
                ПОРЪЧАЙ УСЛУГА
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

