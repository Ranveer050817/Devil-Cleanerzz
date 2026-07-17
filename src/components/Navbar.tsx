import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import devilLogo from '../assets/devillogo.jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: 'index.html' },
    { name: 'Services', href: 'services.html' },
    { name: 'Products', href: 'products.html' },
  ];

  const currentPath = window.location.pathname;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="index.html" className="flex items-center gap-3 relative z-50">
                <img src={devilLogo} alt="Devil Cleanerz" className="w-[78px] h-[69px] object-cover rounded shadow-[0_0_20px_rgba(220,38,38,0.4)]" />
                <span className="text-xl font-bold tracking-tight uppercase text-white hidden sm:block">
                  Devil <span className="text-red-600">CLEANERZ & ENTERPRISES</span>
                </span>
              </a>
            </div>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => {
                  const isActive = currentPath.endsWith(link.href) || (link.href === 'index.html' && (currentPath === '/' || currentPath === ''));
                  return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
                          isActive ? 'text-white border-b-2 border-red-600 pb-1' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                )})}
              </ul>
            </nav>
            <div className="hidden md:block">
              <a
                href="contact.html"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-red-600 text-white rounded-full font-bold shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:scale-105 transform transition-all text-sm uppercase tracking-wider"
              >
                Book Now
              </a>
            </div>
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-zinc-300 hover:text-white p-2"
              >
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'circOut' }}
            className="fixed inset-0 z-[100] bg-black flex flex-col pt-32 pb-8 px-6 overflow-y-auto w-full h-full"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-zinc-300 hover:text-white p-2 z-[110]"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center justify-center flex-grow space-y-8 relative z-10">
              {navLinks.map((link, index) => {
                const isActive = currentPath.endsWith(link.href) || (link.href === 'index.html' && (currentPath === '/' || currentPath === ''));
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl font-black uppercase tracking-widest transition-colors duration-200 ${
                        isActive ? 'text-red-600' : 'text-white hover:text-red-500'
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-red-600/10 blur-[100px] pointer-events-none z-0"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
