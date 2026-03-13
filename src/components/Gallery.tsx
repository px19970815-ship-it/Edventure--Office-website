import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      url: "/Picture1.jpg",
      title: "小班互动"
    },
    {
      url: "/Picture2.jpg",
      title: "主动表达"
    },
    {
      url: "/Picture3.jpg",
      title: "精美作业"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="relative inline-block">
            {/* Decorative Elements */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-12 text-emerald-400 opacity-70"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -right-10 text-amber-400 opacity-80"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] relative z-10">
              走进<span className="text-[#4B1A13]">爱德问趣</span>的课堂
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, i) => (
            <div key={i} className={`rounded-3xl overflow-hidden relative group shadow-md ${i % 2 === 1 ? 'md:translate-y-8' : ''}`}>
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-bold text-xl">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
