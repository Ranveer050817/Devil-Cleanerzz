import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Living Room & Bedrooms',
    items: [
      'Deep dusting of all furniture and surfaces',
      'Dust removal & wall cleaning',
      'Bed, wardrobe & dressing table cleaning',
      'Cobweb removal',
      'Door and door frame cleaning',
      'Switchboard cleaning',
      'Window glass, tracks & grill cleaning',
      'Floor scrubbing and mopping',
      'Skirting cleaning',
      'Wall cleaning (Wet or Dry)'
    ]
  },
  {
    title: 'Kitchen',
    items: [
      'Kitchen platform and sink cleaning',
      'Cabinet cleaning (inside & outside)',
      'Chimney exterior cleaning',
      'Wall tile degreasing and cleaning',
      'Exhaust fan exterior cleaning',
      'Floor scrubbing and mopping'
    ]
  },
  {
    title: 'Bathrooms',
    items: [
      'Wash basin cleaning',
      'Wall and floor tile descaling',
      'Mirror cleaning',
      'Tap and fitting polishing',
      'Drain cover cleaning',
      'Exhaust fan exterior cleaning'
    ]
  },
  {
    title: 'Furniture Cleaning',
    items: [
      'Dusting of all furniture',
      'Dining table cleaning',
      'TV unit cleaning',
      'Wardrobe cleaning',
      'Study table and shelves cleaning'
    ]
  },
  {
    title: 'Balcony / Utility Area',
    items: [
      'Floor cleaning and scrubbing',
      'Railing cleaning',
      'Cobweb removal'
    ]
  }
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Complete Deep <span className="text-red-600 text-glow">Cleaning</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything included in our comprehensive cleaning service.</p>
        </div>

        <div className="space-y-4">
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg md:text-xl font-bold tracking-widest uppercase">{category.title}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-red-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 border-t border-white/5 pt-6 bg-black/20">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {category.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></div>
                            <span className="text-sm md:text-base leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
