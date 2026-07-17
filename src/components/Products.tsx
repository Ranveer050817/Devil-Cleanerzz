import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import floorCleanerImg from '../assets/floorcleaner.jpg';
import toiletCleanerImg from '../assets/toiletcleaner.jpg';
import glassCleanerImg from '../assets/glasscleaner.jpg';
import bathroomCleanerImg from '../assets/bathroomcleaner.jpg';
import kitchenDegreaserImg from '../assets/kitchendegreaser.jpg';
import multiPurposeImg from '../assets/multipurpose.jpg';
import hardWaterRemoverImg from '../assets/hardwaterremover.jpg';
import furniturePolishImg from '../assets/furniturepolish.jpg';
import tileCleanerImg from '../assets/tilecleaner.jpg';
import microfiberImg from '../assets/microfiber.jpg';
import toiletBrushImg from '../assets/toiletbrush.jpg';
import mopImg from '../assets/mop.jpg';
import sprayBottleImg from '../assets/spraybottle.jpg';

const products = [
  { name: 'Floor Cleaner', desc: 'Industrial grade floor shining solution.', image: floorCleanerImg },
  { name: 'Toilet Cleaner', desc: 'Tough on stains, kills 99.9% germs.', image: toiletCleanerImg },
  { name: 'Glass Cleaner', desc: 'Streak-free shine for all glass surfaces.', image: glassCleanerImg },
  { name: 'Bathroom Cleaner', desc: 'Removes tough soap scum and grime.', image: bathroomCleanerImg },
  { name: 'Kitchen Degreaser', desc: 'Cuts through tough oil and grease instantly.', image: kitchenDegreaserImg },
  { name: 'Multi-Purpose Surface Cleaner', desc: 'Safe for all hard surfaces.', image: multiPurposeImg },
  { name: 'Hard Water Stain Remover', desc: 'Dissolves mineral deposits easily.', image: hardWaterRemoverImg },
  { name: 'Furniture Polish', desc: 'Restores wood shine and protects.', image: furniturePolishImg },
  { name: 'Tile & Marble Cleaner', desc: 'Gentle on natural stone, tough on dirt.', image: tileCleanerImg },
  { name: 'Microfiber Cloths', desc: 'Ultra-absorbent, lint-free cleaning cloths.', image: microfiberImg },
  { name: 'Toilet Brushes', desc: 'Durable bristles for deep cleaning.', image: toiletBrushImg },
  { name: '3 in 1 Mops', desc: 'Sweep, scrub, and mop effortlessly.', image: mopImg },
  { name: 'Spray Bottles', desc: 'Heavy-duty adjustable spray bottles.', image: sprayBottleImg },
];

export default function Products() {
  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Our Cleaning <span className="text-red-600 text-glow">Products</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Professional grade chemicals and equipment available for purchase.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 4) * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden group hover:border-red-600/50 transition-all flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]"
            >
              <div className="aspect-square bg-black/20 relative overflow-hidden flex items-center justify-center p-6">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="font-bold text-lg uppercase tracking-wide group-hover:text-red-500 transition-colors mb-6 flex-grow flex items-center justify-center text-white">{product.name}</h3>
                
                <a
                  href={`https://wa.me/917208901545?text=${encodeURIComponent(`Hello, I want to order: ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest transition-all bg-red-600 text-white hover:bg-red-500 shadow-[0_4px_15px_rgba(220,38,38,0.3)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
