import { motion } from 'motion/react';
import { ShieldCheck, Tags, Sparkles, Droplet, ThumbsUp, Clock } from 'lucide-react';

const features = [
  { icon: ShieldCheck, title: 'Professional Team', desc: 'Highly trained and verified experts.' },
  { icon: Tags, title: 'Affordable Pricing', desc: 'Premium service at competitive rates.' },
  { icon: Sparkles, title: 'Premium Equipment', desc: 'Industrial-grade cleaning machines.' },
  { icon: Droplet, title: 'Safe Chemicals', desc: 'Eco-friendly, non-toxic cleaning agents.' },
  { icon: ThumbsUp, title: '100% Satisfaction', desc: 'We don\'t leave until you are happy.' },
  { icon: Clock, title: 'On-Time Service', desc: 'Punctuality is our priority.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Why Choose <span className="text-red-600 text-glow">Us?</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We bring professionalism and perfection to every job.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300 hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-red-600/20 group-hover:border-red-600/30 transition-all">
                <feature.icon className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-2">{feature.title}</h3>
              <p className="text-gray-400 font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
