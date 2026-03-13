import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#e0f2fe] via-[#f0f9ff] to-[#ffe4e6] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-[0_20px_50px_rgb(0,0,0,0.1)] p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative inline-block mb-6">
                {/* Decorative Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -left-8 text-blue-400 opacity-70"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C12 2 12 10 20 12C12 14 12 22 12 22C12 22 12 14 4 12C12 10 12 2 12 2Z" />
                  </svg>
                </motion.div>
                
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -right-8 text-rose-400 opacity-60"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] relative z-10">
                  欢迎来<span className="text-[#4B1A13]">爱德问趣</span>，<br/>亲身体验不止于课堂的学习
                </h2>
              </div>
              
              <p className="text-slate-600 text-lg mb-10">
                留下您的联系方式，我们的课程顾问将尽快与您联系，为您安排专属免费试听课。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">校区地址</h4>
                    <p className="text-slate-500 text-sm">成都市郫都区凉水井街366号附240号</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">咨询热线</h4>
                    <a href="tel:028-61543722" className="text-slate-500 text-sm hover:text-blue-600">028-61543722</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">营业时间</h4>
                    <p className="text-slate-500 text-sm">周一周二休息日，周三周四周五14:00-21:00，周六周天09:00-18:30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 flex flex-col justify-center h-full relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-rose-100 rounded-full opacity-50 blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">预约免费试听课</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  为了给您提供更专业、贴心的服务，<br className="hidden sm:block" />
                  请点击下方按钮填写您的预约信息。<br className="hidden sm:block" />
                  我们的课程顾问将在收到后第一时间与您联系！
                </p>
                
                <a 
                  href="https://wj.qq.com/s2/25971945/fbc7/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 bg-[#ef4444] hover:bg-[#dc2626] text-white font-bold py-4 rounded-2xl transition-all text-lg shadow-md hover:shadow-lg hover:-translate-y-1 gap-2 group"
                >
                  <span>前往填写预约表单</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
                <p className="text-xs text-slate-400 mt-6">
                  * 将跳转至腾讯问卷安全填写页面
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
