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
          ? 'bg-sand/90 backdrop-blur-md border-b-3 border-teal shadow-xl py-3' 
          : 'bg-sand border-b-3 border-teal py-5'
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
            <Droplets className="relative z-10 text-sand w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-charcoal tracking-tighter leading-none">
              ВиК СОФИЯ
            </span>
            <span className="text-[10px] font-bold text-coral tracking-[0.2em]">ПРОФЕСИОНАЛИСТИ</span>
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
          className="md:hidden w-12 h-12 bg-white rounded-full shadow-lg border-2 border-teal flex items-center justify-center text-charcoal z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-charcoal z-50 flex flex-col justify-center p-10 md:hidden"
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
                className="text-xl font-bold text-coral underline underline-offset-8 mt-4"
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
