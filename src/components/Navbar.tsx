import { useState, useEffect } from 'react';
import devilLogo from '../assets/devillogo.jpg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-1.5 md:py-2' : 'bg-black/60 md:bg-transparent py-2 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-10">
          <div className="flex flex-row items-center justify-between h-12 md:h-16 gap-2 md:gap-0">
            <div className="flex-shrink-0 flex items-center">
              <a href="index.html" className="flex items-center gap-1.5 md:gap-3 relative z-50">
                {devilLogo ? <img src={devilLogo} alt="Devil Cleanerz" className="w-[36px] h-[32px] md:w-[78px] md:h-[69px] object-cover rounded shadow-[0_0_20px_rgba(220,38,38,0.4)]" /> : null}
                <span className="text-xs sm:text-base md:text-xl font-bold tracking-tight uppercase text-white">
                  Devil <span className="text-red-600 hidden sm:inline">CLEANERZ & ENTERPRISES</span>
                </span>
              </a>
            </div>
            
            <nav className="block ml-auto mr-2 md:mr-0 md:ml-8">
              <ul className="flex items-center space-x-2.5 sm:space-x-4 md:space-x-8">
                {navLinks.map((link) => {
                  const isActive = currentPath.endsWith(link.href) || (link.href === 'index.html' && (currentPath === '/' || currentPath === ''));
                  return (
                  <li key={link.name} className="flex-shrink-0">
                    <a
                      href={link.href}
                      className={`text-[9px] sm:text-[10px] md:text-sm font-medium uppercase tracking-wider md:tracking-widest transition-colors duration-200 whitespace-nowrap ${
                          isActive ? 'text-white border-b border-red-600 pb-0.5 md:pb-1' : 'text-gray-400 hover:text-white'
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
          </div>
        </div>
      </header>
    </>
  );
}
