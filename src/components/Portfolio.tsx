import { motion } from 'motion/react';
import officeImg from '../assets/dcoffice.jpg';
import shopImg from '../assets/dcshop.jpg';
import hotelImg from '../assets/dchotel.jpg';
import warehouseImg from '../assets/dcwarehouse.jpg';
import restaurantImg from '../assets/dcresraunt.jpg';
import resortImg from '../assets/dcresort.jpg';
import bungalowVillaImg from '../assets/dcbunglow&villa.jpg';

const projects = [
  { id: 1, name: 'Office Deep Cleaning', image: officeImg },
  { id: 2, name: 'Shop Deep Cleaning', image: shopImg },
  { id: 3, name: 'Hotel Deep Cleaning', image: hotelImg },
  { id: 4, name: 'Warehouse Deep Cleaning', image: warehouseImg },
  { id: 5, name: 'Restaurant Deep Cleaning', image: restaurantImg },
  { id: 6, name: 'Resort Deep Cleaning', image: resortImg },
  { id: 7, name: 'Bungalow & Villa Deep Cleaning', image: bungalowVillaImg },
];

export default function Portfolio() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/50">
      {/* Subtle red glow accent matching theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-red-600/5 blur-[120px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4"
          >
            MORE <span className="text-red-600 text-glow">DEEP CLEANING SERVICES</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            From homes to hospitality - we bring the same relentless standard everywhere.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-[18px] overflow-hidden bg-white/5 border border-white/10 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-500"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Premium red and black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent pointer-events-none mix-blend-overlay group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              
              {/* Content (Title and Button) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-white drop-shadow-lg max-w-full sm:max-w-[60%]">
                  {project.name}
                </h3>
                <a
                  href={`https://wa.me/917208901545?text=${encodeURIComponent(`Hello Devil Cleanerz, I would like to book your ${project.name} service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 shrink-0 px-5 py-2.5 bg-gradient-to-r from-red-700 to-red-500 rounded-full font-bold text-sm uppercase tracking-wider text-white shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] hover:scale-105 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-white/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity overflow-hidden"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
