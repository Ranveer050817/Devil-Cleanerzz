import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import WhyChooseUs from './components/WhyChooseUs';
import Packages from './components/Packages';
import Services from './components/Services';
import AddOns from './components/AddOns';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Portfolio from './components/Portfolio';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollProgress from './components/ScrollProgress';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <WhyChooseUs />
      <Packages />
      <Portfolio />
      <Booking />
      <Reviews />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Services />
      <AddOns />
    </>
  );
}

function ProductsPage() {
  return <Products />;
}

function PackagesPage() {
  return <Packages />;
}

function ReviewsPage() {
  return <Reviews />;
}

function ContactPage() {
  return <Booking />;
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

function CurrentPage() {
  const [path, setPath] = useState(window.location.pathname);

  let page = <HomePage />;
  if (path.includes('services')) page = <ServicesPage />;
  else if (path.includes('products')) page = <ProductsPage />;
  else if (path.includes('packages')) page = <PackagesPage />;
  else if (path.includes('reviews')) page = <ReviewsPage />;
  else if (path.includes('contact')) page = <ContactPage />;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {page}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="bg-brand-dark min-h-screen font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
      <ScrollToTop />
      <div className="fixed top-[-100px] right-[-100px] w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          <CurrentPage />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}
