import { Droplets, Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'УСЛУГИ', href: '#services' },
    { name: 'ПРОЕКТИ', href: '#projects' },
    { name: 'ЦЕНИ', href: '#pricing' },
    { name: 'КОНТАКТИ', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-200/95 backdrop-blur-md border-b border-slate-300 shadow-lg py-3' 
          : 'bg-slate-200/80 backdrop-blur-md border-b border-slate-300/50 shadow-md py-5'
      }`}
    >
      <div className="container-wide px-4 flex items-center justify-between">
        {/* LEFT SIDE: Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-teal rounded-xl group-hover:rotate-45 transition-transform duration-500"></div>
            <Droplets className="relative z-10 text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-charcoal tracking-tighter leading-none">
              ВиК СОФИЯ
            </span>
          </div>
        </div>

        {/* CENTER: Empty (Asymmetric philosophy) */}
        <div className="hidden lg:flex flex-grow"></div>

        {/* RIGHT SIDE: Menu + CTA */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-steel hover:text-teal tracking-widest transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="tel:+359897777224"
            className="px-6 py-3 bg-coral text-white text-xs font-black tracking-widest rounded-2xl hover:bg-steel transition-all flex items-center gap-2 group"
          >
            БЕЗПЛАТНА КОНСУЛТАЦИЯ
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle Bubble */}
        <button
          className="md:hidden w-12 h-12 bg-white rounded-full shadow-lg border-2 border-teal flex items-center justify-center text-charcoal z-[101]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-charcoal z-[100] flex flex-col justify-center p-10 md:hidden h-screen"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-black text-sand hover:text-teal transition-colors tracking-tighter"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="h-2 w-20 bg-teal mt-4"></div>
              <a
                href="tel:+359897777224"
                className="inline-block bg-teal text-white text-center py-5 rounded-2xl text-xl font-black uppercase tracking-widest mt-4 shadow-xl active:scale-95 transition-all"
              >
                +359 897 777 224
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
