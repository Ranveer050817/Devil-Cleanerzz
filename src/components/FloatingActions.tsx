import { MessageCircle, Phone, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col gap-4 items-center">
      {/* Instagram Button */}
      <div className="relative group">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          Follow Us on Instagram
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full blur-[15px] opacity-0 group-hover:opacity-60 transition-opacity"></div>
        <motion.a
          href="https://www.instagram.com/devil_cleanerz?igsh=MXhjemYxa3Fld2lnMg=="
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.2, type: 'spring', stiffness: 200, damping: 20 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-full shadow-[0_0_15px_rgba(225,48,108,0.4)] flex items-center justify-center text-white relative z-10 hover:scale-110 transition-transform cursor-pointer"
          aria-label="Follow Us on Instagram"
        >
          <Instagram size={24} className="md:w-7 md:h-7" />
        </motion.a>
      </div>

      {/* Call Button */}
      <div className="relative group">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          Call Now
        </div>
        <div className="absolute inset-0 bg-red-600 rounded-full blur-[15px] opacity-0 group-hover:opacity-60 transition-opacity"></div>
        <motion.a
          href="tel:+917208901545"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.1, type: 'spring', stiffness: 200, damping: 20 }}
          className="w-12 h-12 md:w-14 md:h-14 bg-[#E50914] rounded-full shadow-[0_0_15px_rgba(229,9,20,0.5)] flex items-center justify-center text-white relative z-10 hover:scale-110 transition-transform cursor-pointer"
          aria-label="Call Now"
        >
          <Phone size={24} className="md:w-7 md:h-7 animate-[pulse_2s_infinite]" />
        </motion.a>
      </div>

      {/* WhatsApp Button */}
      <div className="relative group">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
          Chat with Us
        </div>
        <div className="absolute inset-0 bg-green-500 rounded-full blur-[20px] opacity-0 group-hover:opacity-40 transition-opacity"></div>
        <motion.a
          href="https://wa.me/917208901545"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 20 }}
          className="w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white relative z-10 hover:scale-110 transition-transform cursor-pointer"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle size={28} className="md:w-8 md:h-8" />
          
          {/* Notification badge */}
          <span className="absolute top-0 right-0 flex h-3 w-3 md:h-4 md:w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-red-600"></span>
          </span>
        </motion.a>
      </div>
    </div>
  );
}
