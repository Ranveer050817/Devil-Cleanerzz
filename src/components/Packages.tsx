import { motion } from 'motion/react';
import img1bhk from '../assets/1bhk.jpg';
import img2bhk from '../assets/2bhk.jpg';
import img3bhk from '../assets/3bhk.jpg';
import img4bhk from '../assets/4bhk.jpg';

const packages = [
  { name: '1 BHK Deep Cleaning', price: '2799', image: img1bhk },
  { name: '2 BHK Deep Cleaning', price: '3599', image: img2bhk },
  { name: '3 BHK Deep Cleaning', price: '4399', image: img3bhk },
  { name: '4 BHK Deep Cleaning', price: '5499', image: img4bhk },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Service <span className="text-red-600 text-glow">Packages</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Select the perfect deep cleaning plan for your space.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#0f0f0f]/90 backdrop-blur-xl border border-white/10 rounded-[24px] p-4 transition-all duration-500 hover:-translate-y-2 hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] flex flex-col items-center text-center group"
              >
                <div className="w-full mb-6 overflow-hidden rounded-xl flex items-center justify-center bg-black/20">
                  {pkg.image ? <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    loading="lazy"
                    className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  /> : null}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 mt-auto">{pkg.name}</h3>
                
                <div className="w-full">
                  <a
                    href={`https://wa.me/917208901545?text=${encodeURIComponent(`Hi, I am interested in the ${pkg.name}. Please provide more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all bg-red-600 text-white hover:bg-red-500 shadow-[0_4px_15px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)]"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
