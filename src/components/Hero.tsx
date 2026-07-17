import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#111111]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <motion.div 
          className="flex flex-col items-start text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6 uppercase"
          >
            <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">WHERE DIRT</span> <br />
            <span className="text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.2)] text-6xl md:text-8xl">MEETS THE DEVIL'S</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg text-gray-300 max-w-lg mb-10"
          >
            Premium deep cleaning services for house, office, shop, restaurant, hotel, warehouse, villa, resort & bunglow across Mumbai. We deliver spotless results with professional equipment, trained experts and guaranteed customer satisfaction.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
          >
            <a
              href="#booking"
              className="px-8 py-5 bg-white text-black font-black text-xl rounded-xl flex items-center justify-center gap-3 shadow-2xl hover:bg-gray-200 transition-all group"
            >
              <span>START QUOTE</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://wa.me/917208901545"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 border border-white/20 bg-black/40 backdrop-blur-md rounded-xl font-bold flex items-center justify-center gap-3 text-white hover:bg-white/10 transition-colors uppercase tracking-wider"
            >
              <MessageCircle className="w-6 h-6 text-red-500" />
              WhatsApp
            </a>
            
            <a
              href="tel:+917208901545"
              className="px-8 py-5 border border-white/20 bg-black/40 backdrop-blur-md rounded-xl font-bold flex items-center justify-center gap-3 text-white hover:bg-white/10 transition-colors uppercase tracking-wider"
            >
              <Phone className="w-6 h-6 text-red-500" />
              CALL NOW
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
