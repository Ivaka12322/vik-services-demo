import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal pt-20 pb-10 relative overflow-hidden">
      <div className="container-wide px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-black tracking-tight uppercase text-white">ВиК <span className="text-teal">СОФИЯ</span></span>
            </div>
            <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xs">
              Професионални индустриални и битови ВиК услуги. Техническо съвършенство и безкомпромисно качество във всеки проект.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-teal mb-8">ИНФОРМАЦИЯ</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
              <li><a href="#services" className="text-slate-300 hover:text-teal transition-colors">Услуги</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-teal transition-colors">За Нас</a></li>
              <li><a href="#pricing" className="text-slate-300 hover:text-teal transition-colors">Цени</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-teal transition-colors">Контакти</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-teal mb-8">КОНТАКТИ</h4>
            <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-slate-300">
              <li>София Център & Регион</li>
              <li>office@vik-sofia.com</li>
              <li className="text-teal">+359 897 777 224</li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col lg:items-end">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-teal mb-8">СОЦИАЛНИ</h4>
            <div className="flex gap-4 mb-8">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-teal transition-all border border-white/10">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white hover:bg-teal transition-all border border-white/10">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-right">
              Последвайте ни за <br /> последни новини
            </p>
          </div>
        </div>

        {/* Legal Disclaimer & Tech Solutions Credit */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            © {currentYear} ВИК СОФИЯ ЕООД. ВСИЧКИ ПРАВА ЗАПАЗЕНИ.
          </p>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            Сайтът е изготвен от <a href="https://avltechsolutions.org" target="_blank" rel="noopener noreferrer" className="text-teal hover:text-white transition-all">AVL Tech Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
