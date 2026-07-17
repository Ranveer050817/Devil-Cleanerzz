import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import img1bhk from '../assets/1bhk.jpg';
import img2bhk from '../assets/2bhk.jpg';
import img3bhk from '../assets/3bhk.jpg';
import img4bhk from '../assets/4bhk.jpg';

const packages = [
  { name: '1 BHK', price: '2799', popular: false, image: img1bhk },
  { name: '2 BHK', price: '3599', popular: true, image: img2bhk },
  { name: '3 BHK', price: '4399', popular: false, image: img3bhk },
  { name: '4 BHK', price: '5499', popular: false, image: img4bhk },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">Service <span className="text-red-600 text-glow">Packages</span></h2>
              <p className="text-gray-400 mt-2">Select the perfect deep cleaning plan for your space.</p>
            </div>
            <span className="text-xs text-gray-500 italic font-bold tracking-widest uppercase">Starting Prices</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-[#0f0f0f]/90 backdrop-blur-xl border rounded-[24px] transition-all duration-500 group flex flex-col overflow-hidden hover:-translate-y-2 ${
                  pkg.popular 
                    ? 'border-red-600/50 shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:border-red-600/80 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]' 
                    : 'border-white/10 hover:border-red-600/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]'
                }`}
              >
                {/* Image Section (50-60% of card visual weight) */}
                <div className="relative w-full h-[390px] overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-30"></div>
                  <img 
                    src={pkg.image} 
                    alt={pkg.name} 
                    loading="lazy" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(220,38,38,0.6)]">
                      Most Popular
                    </div>
                  )}
                </div>
                
                {/* Content Section Below Image */}
                <div className="p-8 md:p-10 flex flex-col flex-1 relative z-20 bg-gradient-to-b from-[#0f0f0f] to-[#141414]">
                  <div className="flex justify-between items-end border-b border-white/5 pb-6 mb-6">
                    <div>
                      <p className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2">{pkg.name}</p>
                      <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-red-500 transition-colors">Deep Cleaning</h3>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">Starts at</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl text-red-600 font-medium">₹</span>
                        <p className="text-3xl md:text-4xl font-black text-white">{pkg.price}</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {['Intensive Living Room Clean', 'Deep Bedroom Dusting & Mop', 'Full Kitchen Degreasing', 'Bathroom Scrub & Sanitization'].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm md:text-base text-gray-300 font-medium">
                        <div className="bg-red-600/10 p-1 rounded-full mt-0.5">
                          <Check className="w-4 h-4 text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/917208901545?text=${encodeURIComponent(`Hi, I am interested in the ${pkg.name} Deep Cleaning package priced at ₹${pkg.price}. Please provide more details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 block rounded-xl font-black text-center text-sm md:text-base uppercase tracking-widest transition-all mt-auto ${
                      pkg.popular
                        ? 'bg-red-600 text-white hover:bg-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]'
                        : 'bg-white/5 text-white hover:bg-white/15 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10'
                    }`}
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
