import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  { src: '/Photo 1.jpg', type: 'horizontal' },
  { src: '/Photo 2.jpg', type: 'vertical' },
  { src: '/Photo 3.jpg', type: 'horizontal' },
  { src: '/Photo 4.jpg', type: 'horizontal' },
  { src: '/Photo 5.jpg', type: 'vertical' },
  { src: '/Photo 6.jpg', type: 'horizontal' },
  { src: '/Photo 7.jpg', type: 'vertical' },
  { src: '/Photo 8.jpg', type: 'horizontal' },
  { src: '/Photo 9.jpg', type: 'horizontal' },
  { src: '/Photo 10.jpg', type: 'vertical' },
  { src: '/Photo 11.jpg', type: 'horizontal' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
      if (e.key === 'ArrowRight') setSelectedImage((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="projects" className="bg-white py-8 md:py-10 overflow-hidden">
      <div className="container-wide px-4">
        <div className="mb-6 text-center">
          <span className="text-teal text-xs font-black tracking-[0.4em] mb-4 block uppercase leading-none">
            ПОРТФОЛИО
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-charcoal uppercase tracking-tighter leading-none mb-5">
            НАШИТЕ <span className="text-teal">ПРОЕКТИ</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[140px] grid-flow-dense">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className={`relative overflow-hidden group rounded-lg cursor-pointer ${
                item.type === 'vertical' ? 'row-span-2' : 'col-span-1'
              }`}
            >
              <img 
                src={item.src} 
                alt="Проект" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-bold uppercase tracking-widest border border-white/50 px-4 py-2 bg-charcoal/50 backdrop-blur-sm">
                  Преглед
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 md:p-8"
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div 
              className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute left-0 md:-left-16 text-white/50 hover:text-white transition-colors p-2 z-10"
                onClick={() => setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1))}
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              
              <img 
                src={galleryItems[selectedImage].src} 
                alt="Проект пълен размер" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
              
              <button 
                className="absolute right-0 md:-right-16 text-white/50 hover:text-white transition-colors p-2 z-10"
                onClick={() => setSelectedImage((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0))}
              >
                <ChevronRight className="w-10 h-10" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
