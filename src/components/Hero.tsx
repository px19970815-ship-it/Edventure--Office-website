import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-28 md:pb-24 overflow-hidden">
      {/* Colorful Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#fffaf0] via-[#fff0f5] to-white">
        {/* Blurred color orbs for glassmorphism effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#fef08a] filter blur-[120px] opacity-40"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-[#fbcfe8] filter blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#e0f2fe] filter blur-[150px] opacity-40"></div>
      </div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 z-0 bg-white/60 backdrop-blur-[30px]"></div>
      
      {/* Bottom white fade */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative inline-block">
          {/* Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -left-12 text-yellow-400 opacity-80"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -right-16 text-pink-400 opacity-70"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-4 -right-8 text-blue-400 opacity-60"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C12 2 12 10 20 12C12 14 12 22 12 22C12 22 12 14 4 12C12 10 12 2 12 2Z" />
            </svg>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-1/2 -left-16 text-emerald-400 opacity-70"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="4" transform="rotate(45 12 12)" />
            </svg>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1e3a8a] tracking-tight mb-4 leading-tight max-w-4xl mx-auto relative z-10">
            <span className="text-[#4B1A13]">爱德问趣！</span>不止于课堂，<br/>
            让英语像母语一样自然生长
          </h1>
        </div>
        
        <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-2xl mx-auto font-medium">
          我们的中外教团队将为您打造最有效、最有趣的英语启蒙体验。3-15岁少儿英语成长规划。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a href="#contact" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white text-lg px-8 py-3.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            联系我们，领取免费试听课
          </a>
        </div>

        {/* Playful Overlapping Image Layout */}
        <div className="relative max-w-5xl mx-auto h-[400px] sm:h-[500px] md:h-[600px] w-full z-20 mt-4 md:mt-8 mb-12">
          {/* Left Image */}
          <div className="absolute left-0 md:left-[2%] top-[10%] w-[45%] md:w-[32%] aspect-[3/4] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10">
            <img 
              src="/Children 1.png" 
              alt="Happy learning child" 
              className="w-full h-[115%] object-cover object-top"
            />
          </div>
          
          {/* Center Image */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[50%] md:w-[38%] aspect-[3/4] z-30 transform hover:-translate-y-4 hover:scale-105 transition-all duration-500">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="/children 2.png" 
                alt="Engaged student" 
                className="w-full h-[115%] object-cover object-top"
              />
            </div>
            {/* Logo overlay on top left */}
            <div className="absolute top-4 -left-2 md:-left-4 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center z-40 pointer-events-none">
              <img src="/LOGO.PNG" alt="爱德问趣 Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
          </div>
          
          {/* Right Image */}
          <div className="absolute right-0 md:right-[2%] top-[20%] w-[45%] md:w-[32%] aspect-[3/4] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20">
            <img 
              src="/children 3.png" 
              alt="Smiling student" 
              className="w-full h-[115%] object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Torn paper edge at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#ffffff"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#ffffff"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
}
