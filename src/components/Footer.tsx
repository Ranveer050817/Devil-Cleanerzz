import { Instagram, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="z-50 px-6 md:px-10 py-8 bg-white/5 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Location</span>
            <span className="text-sm font-semibold text-white">Mumbai, Maharashtra</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">WhatsApp</span>
            <a href="https://wa.me/917208901545" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-red-500 transition-colors">
              +91 72089 01545
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Email</span>
            <a href="mailto:devilcleanerzenterprises@gmail.com" className="text-sm font-semibold text-white hover:text-red-500 transition-colors">
              devilcleanerzenterprises@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-4 items-center">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-red-500 hover:text-red-500 transition-all cursor-pointer text-white"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-60 hover:opacity-100 hover:border-white transition-all cursor-pointer text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">#DevilCleanerz &copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
