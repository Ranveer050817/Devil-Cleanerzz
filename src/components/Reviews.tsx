import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Rahul Mehta', loc: 'Ghatkopar', text: 'I booked Devil Cleanerz for a complete 2BHK deep cleaning before moving in. The team was punctual, professional, and paid attention to every corner. My home looked and smelled fresh. Highly recommended!' },
  { name: 'Sneha Kapoor', loc: 'Andheri West', text: 'I was impressed with their sofa and bathroom cleaning service. The stains were completely removed, and the team was very polite. Great value for money!' },
  { name: 'Priya Shah', loc: 'Powai', text: 'Excellent service from start to finish. They cleaned my kitchen, windows, and furniture perfectly. I will definitely book Devil Cleanerz again.' },
  { name: 'Amit Verma', loc: 'Mulund', text: 'Our office needed deep cleaning before a client visit, and Devil Cleanerz exceeded expectations. The place looked spotless, and the staff was very cooperative.' },
  { name: 'Neha Arora', loc: 'Chembur', text: 'I\'ve tried a few cleaning companies before, but this was the best experience. They didn\'t rush the work and made sure everything was properly cleaned.' },
  { name: 'Rohit Patil', loc: 'Vikhroli', text: 'Honestly, service ekdum mast thi. Sofa aur bathroom dono bilkul naye jaise lag rahe the. Team bahut hardworking thi. Definitely recommend Devil Cleanerz!' },
  { name: 'Pooja Singh', loc: 'Kandivali', text: 'Ghar ki deep cleaning karwayi aur result dekh ke surprise ho gayi. Har corner clean tha aur staff bhi bahut friendly tha. Paisa vasool service!' },
  { name: 'Imran Shaikh', loc: 'Kurla', text: 'Booking se lekar cleaning complete hone tak sab kuch smooth tha. Time pe aaye aur kaam bhi bahut achha kiya. Next time bhi inhi ko call karunga.' },
  { name: 'Sagar Jadhav', loc: 'Dombivli', text: 'Service kharach khup chan hoti. Team time var aali ani complete flat perfectly clean kela. Devil Cleanerz cha experience mast hota. Highly recommended!' },
  { name: 'Vaishali Deshmukh', loc: 'Thane', text: 'Majha sofa ani kitchen khup dirty hota, pan Devil Cleanerz ne ekdum fresh banavla. Staff professional hota ani kaam pan neat hota. Thank you!' }
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setScrollWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Customer <span className="text-red-600 text-glow">Reviews</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">See what our satisfied clients have to say.</p>
        </div>

        <div className="relative">
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            ref={containerRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div 
              className="flex gap-6 min-w-max pr-8 py-8"
              drag="x"
              dragConstraints={{ right: 0, left: -scrollWidth }}
              dragElastic={0.1}
            >
              {reviews.map((review, index) => (
                <div 
                  key={index} 
                  className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-red-600/30 rounded-[24px] p-8 md:p-10 w-[350px] md:w-[450px] flex-shrink-0 select-none flex flex-col justify-between shadow-[0_0_20px_rgba(220,38,38,0.15)] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:border-red-600/60 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fill="#eab308" color="#eab308" size={16} />
                        ))}
                      </div>
                      <Quote className="text-red-600 opacity-40 group-hover:opacity-80 transition-opacity duration-300" size={32} />
                    </div>
                    <p className="text-white/90 italic font-medium leading-relaxed mb-8 text-sm md:text-base">"{review.text}"</p>
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <p className="text-[11px] uppercase font-bold tracking-widest text-white">
                      <span className="text-red-600">{review.name}</span> <span className="text-gray-500 mx-2">|</span> {review.loc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
