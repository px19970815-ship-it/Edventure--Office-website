export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-1">
            <img src="/LOGO.PNG" alt="爱德问趣 Ed venture" className="h-8 w-auto object-contain" />
          </div>
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} <span className="text-[#4B1A13] font-bold">爱德问趣</span> (Ed venture). All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
