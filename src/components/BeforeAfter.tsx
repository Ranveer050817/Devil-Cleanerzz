import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';
import kitchenB from '../assets/kitchenB.jpg';
import kitchenA from '../assets/kitchenA,jpg.jpg';
import beforeImg from '../assets/before.jpg';
import afterImg from '../assets/after.jpg';

function ComparisonSlider({ beforeImage, afterImage, title }: { beforeImage: string, afterImage: string, title?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  
  const sliderPosition = useMotionValue(50); // percentage 0-100

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDrag = (event: any, info: any) => {
    if (!containerWidth) return;
    
    const newPosition = (info.point.x - (containerRef.current?.getBoundingClientRect().left || 0));
    const percentage = Math.max(0, Math.min(100, (newPosition / containerWidth) * 100));
    
    sliderPosition.set(percentage);
  };

  const clipPathStyle = useTransform(sliderPosition, (val) => `inset(0 ${100 - val}% 0 0)`);
  const leftPosition = useTransform(sliderPosition, (val) => `${val}%`);

  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6">
      {title && <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-6 text-center">{title}</h3>}
      <div 
        ref={containerRef}
        className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-black/40 border border-white/5 select-none group touch-none"
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img src={afterImage} alt="After Cleaning" className="w-full h-full object-cover" />
        </div>

        {/* Before Image (Foreground, clipped) */}
        <motion.div 
          className="absolute inset-0"
          style={{ clipPath: clipPathStyle }}
        >
          <img src={beforeImage} alt="Before Cleaning" className="w-full h-full object-cover" />
        </motion.div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest z-10 pointer-events-none">
          BEFORE
        </div>
        <motion.div 
          className="absolute top-4 right-4 bg-red-600/80 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white z-10 pointer-events-none shadow-[0_0_10px_rgba(220,38,38,0.5)]"
        >
          AFTER
        </motion.div>

        {/* Slider Handle */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-red-600 cursor-col-resize z-20 shadow-[0_0_15px_rgba(220,38,38,1)] flex items-center justify-center"
          style={{ left: leftPosition }}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag}
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-red-600 text-black hover:scale-110 transition-transform">
            <MoveHorizontal size={24} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">See The <span className="text-red-600 text-glow">Difference</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Experience the magic of deep cleaning with our premium service.</p>
        </div>

        <div className="flex flex-col gap-12">
          <ComparisonSlider 
            beforeImage={kitchenB} 
            afterImage={kitchenA} 
            title="Kitchen Deep Cleaning"
          />
          <ComparisonSlider 
            beforeImage={beforeImg} 
            afterImage={afterImg} 
            title="Living Room Transformation"
          />
        </div>
      </div>
    </section>
  );
}
