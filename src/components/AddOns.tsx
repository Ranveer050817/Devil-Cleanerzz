import { motion } from 'motion/react';
import { Plus } from 'lucide-react';

const addons = [
  'Sofa Shampooing',
  'Mattress Shampooing',
  'Carpet Shampooing',
  'Curtain Cleaning',
  'Water Tank Cleaning'
];

export default function AddOns() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Premium <span className="text-red-600 text-glow">Add-On</span> Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Enhance your cleaning package with these specialized services.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-red-600/10 hover:border-red-600/30 transition-all cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-sm md:text-base uppercase tracking-wider">{addon}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
