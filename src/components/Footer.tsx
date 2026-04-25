import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-200 pt-10 pb-6 relative overflow-hidden shadow-[inset_0_20px_25px_-5px_rgba(0,0,0,0.05)] border-t border-slate-300">
      <div className="container-wide px-4 relative z-10">
        <div className="bg-slate-100 rounded-3xl p-8 md:p-10 mb-8 shadow-2xl border border-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6 group">
                <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-xl font-black tracking-tight uppercase text-charcoal">ВиК <span className="text-teal">СОФИЯ</span></span>
              </div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
                Професионални индустриални и битови ВиК услуги. Техническо съвършенство и безкомпромисно качество във всеки проект.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-teal mb-6 text-opacity-100">ИНФОРМАЦИЯ</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
                <li><a href="#services" className="text-slate-600 hover:text-teal transition-colors">Услуги</a></li>
                <li><a href="#about" className="text-slate-600 hover:text-teal transition-colors">За Нас</a></li>
                <li><a href="#pricing" className="text-slate-600 hover:text-teal transition-colors">Цени</a></li>
                <li><a href="#contact" className="text-slate-600 hover:text-teal transition-colors">Контакти</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-teal mb-6">КОНТАКТИ</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
                <li className="text-slate-600">Цяла София</li>
                <li className="text-slate-600">office@vik-sofia.com</li>
              </ul>
            </div>

            {/* Social / Credits */}
            <div className="flex flex-col lg:items-end">
              <div className="flex gap-4 mb-6">
                <a href="#" className="w-10 h-10 bg-teal/5 rounded-xl flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-all border border-teal/10">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-teal/5 rounded-xl flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-all border border-teal/10">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <div className="text-left lg:text-right">
                <p className="text-xs font-black uppercase tracking-widest text-charcoal mb-2">ПОСЛЕДВАЙТЕ НИ</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest leading-relaxed">
                  За новини и актуализации <br /> в социалните мрежи.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Tech Solutions Credit */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-charcoal/60 uppercase tracking-[0.2em]">
            © {currentYear} ВИК СОФИЯ ЕООД. ВСИЧКИ ПРАВА ЗАПАЗЕНИ.
          </p>
          <p className="text-[10px] font-bold text-charcoal/60 uppercase tracking-[0.2em]">
            Сайтът е изготвен от <a href="https://avltechsolutions.org" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline transition-all">AVL Tech Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
