import { Target, Trophy, BookOpen, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-[#fafafa] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -12, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -left-10 text-indigo-400 opacity-70"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0], x: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-12 text-purple-400 opacity-60"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="4" transform="rotate(45 12 12)" />
              </svg>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 relative z-10">
              为孩子铺好每一步英语路
            </h2>
          </div>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
            CLIL（内容与语言整合学习）结合 TPR（全身反应法），从课前预习到课中互动，再到课后跟踪闭环，确保学习效果。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col mt-4">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="text-sm font-bold text-slate-400 mb-2">3-6岁</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">幼儿启蒙阶段</h3>
            <p className="text-slate-500 mb-8">《My Little Island》</p>
            
            <div className="text-sm font-bold text-slate-400 mb-4">能力目标</div>
            <div className="w-full h-px bg-slate-100 mb-6"></div>
            
            <ul className="space-y-4 flex-1">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                </div>
                <span className="text-slate-700 font-medium">自然拼读</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                </div>
                <span className="text-slate-700 font-medium">300+ 听力词汇</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                </div>
                <span className="text-slate-700 font-medium">日常口语</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                </div>
                <span className="text-slate-700 font-medium">英语语感</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_20px_40px_rgb(168,85,247,0.15)] border-2 border-purple-500 relative flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-bold shadow-lg">
              <Zap className="w-4 h-4 fill-current" />
              热门推荐双轨路径
            </div>
            <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-8 mt-2">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-sm font-bold text-slate-400 mb-2">6-12岁</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">培生趣学岛</h3>
            <p className="text-slate-500 mb-8">Our Discovery Island</p>
            
            <div className="text-sm font-bold text-slate-400 mb-4">能力目标</div>
            <div className="w-full h-px bg-slate-100 mb-6"></div>
            
            <ul className="space-y-4 flex-1">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                </div>
                <span className="text-slate-700 font-medium">CEFR A2 认证</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                </div>
                <span className="text-slate-700 font-medium">流利日常对话</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-purple-500" />
                </div>
                <span className="text-slate-700 font-medium">听说读写全面夯实</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col mt-4">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-sm font-bold text-slate-400 mb-2">6-12岁</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">剑桥国际路</h3>
            <p className="text-slate-500 mb-8">Power Up (剑桥官方推荐)</p>
            
            <div className="text-sm font-bold text-slate-400 mb-4">能力目标</div>
            <div className="w-full h-px bg-slate-100 mb-6"></div>
            
            <ul className="space-y-4 flex-1">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-slate-700 font-medium">对接剑桥 YLE/KET</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-slate-700 font-medium">学术英语能力</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-slate-700 font-medium">通过剑桥等级考试</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
