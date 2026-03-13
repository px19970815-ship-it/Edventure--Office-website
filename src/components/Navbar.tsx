import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="爱德问趣 Ed venture" className="h-32 w-auto object-contain" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation links removed as requested */}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="font-bold text-[#4B1A13] transition-colors">028-61543722</span>
            <a href="tel:028-61543722" className="bg-[#4B1A13] text-white p-2 rounded-full hover:bg-[#3A140E] transition-colors shadow-md">
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">首页</a>
            <a href="#teachers" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">师资团队</a>
            <a href="#curriculum" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">课程体系</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="block py-2 text-slate-700 font-medium">课堂实录</a>
            <a href="tel:028-61543722" className="block py-2 text-[#1e3a8a] font-bold flex items-center gap-2">
              <Phone className="w-4 h-4" /> 028-61543722
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
