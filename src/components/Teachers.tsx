import { BookOpen, Globe, Heart, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Teachers() {
  return (
    <section id="teachers" className="pt-8 pb-24 bg-white relative overflow-hidden">
      {/* Decorative dashed lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%\' height=\'100%\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M-200,500 C200,200 600,800 1000,400 C1400,0 1800,600 2200,300\' fill=\'none\' stroke=\'%231e3a8a\' stroke-width=\'4\' stroke-dasharray=\'15,15\' /%3E%3C/svg%3E")', backgroundSize: 'cover' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-24 rounded-[2.5rem] bg-gradient-to-r from-blue-50 to-transparent p-6 md:p-12 overflow-hidden flex items-center min-h-[450px]">
          {/* Background Image and Floating Elements */}
          <div className="absolute inset-0 md:left-[20%] flex justify-end items-center z-0">
            <img src="/teachers.png" alt="爱德问趣师资团队" className="w-full h-full object-cover md:object-contain object-right opacity-40 md:opacity-100 scale-110 md:scale-125 origin-right md:translate-x-12" />
            
            {/* Floating UI Elements (Visible mainly on md+ screens) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none">
              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] right-[5%] bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold">100%</div>
                  <div className="text-sm font-bold text-[#1e3a8a]">纯正母语</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[25%] right-[10%] bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold">平均教龄</div>
                  <div className="text-sm font-bold text-[#1e3a8a]">4.5年以上</div>
                </div>
              </motion.div>

              {/* Decorative floating shapes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[30%] right-[45%] text-rose-300 opacity-60"
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[30%] right-[55%] text-emerald-300 opacity-60"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </motion.div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="relative z-10 max-w-xl bg-white/85 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/60">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4" />
              <span>EXPERT TEAM</span>
            </div>
            
            <div className="relative inline-block">
              {/* Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 text-rose-400 opacity-70"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </motion.div>
              
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -right-8 text-blue-400 opacity-60"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C12 2 12 10 20 12C12 14 12 22 12 22C12 22 12 14 4 12C12 10 12 2 12 2Z" />
                </svg>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 leading-tight relative z-10">
                <span className="text-[#4B1A13]">爱德问趣</span>师资团队
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-slate-700 font-medium mb-8">
              用爱和耐心，陪孩子迈出第一步
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
                <p className="text-slate-600 text-lg">
                  <strong className="text-[#1e3a8a]">100%</strong> 英语教育或学前教育专业毕业
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                </div>
                <p className="text-slate-600 text-lg">
                  平均教龄 <strong className="text-[#1e3a8a]">4.5</strong> 年
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                </div>
                <p className="text-slate-600 text-lg">
                  外教均来自英语母语国家，持有 <strong className="text-[#1e3a8a]">TEFL/TESOL</strong> 资格证书
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow lg:translate-y-0">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">专业学术背景</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              本科及以上学历，持有英语专业八级或国际教师资格，完成幼儿教育心理学专项培训。
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow lg:translate-y-12">
            <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">纯正母语外教</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              来自美国、英国、加拿大等国，平均在华少儿教学经验 3.5 年，完成岗前培训。
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow lg:translate-y-24">
            <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Star className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">特色教学法</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              擅长将 TPR、绘本故事、音乐游戏结合，课堂用语简单清晰，关注初学儿童情绪适应。
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-shadow lg:translate-y-10">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">贴心课后服务</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              课后一对一语音/视频点评，每周至少 2 次。蹲下来和孩子说话，是一种态度。
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
