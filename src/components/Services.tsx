import { motion } from 'motion/react';

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
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Complete Deep <span className="text-red-600 text-glow">Cleaning</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-3">Everything included in our comprehensive cleaning service.</p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-base text-gray-300 font-medium max-w-2xl mx-auto tracking-wide"
          >
            ✨ No one gives you <span className="text-red-500 font-semibold">this many services</span> at such an <span className="text-red-500 font-semibold">amazing price</span>.
          </motion.p>
        </div>

        <div className="space-y-4">
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="w-full px-8 py-6 flex items-center text-left bg-white/[0.02]">
                <span className="text-lg md:text-xl font-bold tracking-widest uppercase">{category.title}</span>
              </div>
              
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
          ))}
        </div>
      </div>
    </section>
  );
}
