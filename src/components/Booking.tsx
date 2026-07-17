import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Calendar, Clock, MapPin, Package, User, Phone, MessageSquare } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    package: '',
    date: '',
    timeSlot: '',
    instructions: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*New Booking Enquiry* 🧹😈\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Address:* ${formData.address}\n` +
      `*Package:* ${formData.package}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time Slot:* ${formData.timeSlot}\n` +
      `*Special Instructions:* ${formData.instructions || 'None'}`;
      
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917208901545?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red-glow rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Book Your <span className="text-red-600 text-glow">Cleaning</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Fill out the details below and we will confirm your booking via WhatsApp.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl relative"
        >
          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <User size={14} className="text-red-600" /> Full Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Phone size={14} className="text-red-600" /> Mobile Number
                </label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-medium"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <MapPin size={14} className="text-red-600" /> Complete Address
                </label>
                <input
                  required
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Flat No, Building Name, Street, Area, Mumbai"
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all font-medium"
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Package size={14} className="text-red-600" /> Select Package / Service
                </label>
                <select
                  required
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-white [&>option]:bg-zinc-900 font-medium"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="1 BHK Deep Cleaning">1 BHK Deep Cleaning (From ₹2799)</option>
                  <option value="2 BHK Deep Cleaning">2 BHK Deep Cleaning (From ₹3599)</option>
                  <option value="3 BHK Deep Cleaning">3 BHK Deep Cleaning (From ₹4399)</option>
                  <option value="4 BHK Deep Cleaning">4 BHK Deep Cleaning (From ₹5499)</option>
                  <option value="Sofa Shampooing">Sofa Shampooing</option>
                  <option value="Bathroom Deep Cleaning">Bathroom Deep Cleaning</option>
                  <option value="Kitchen Deep Cleaning">Kitchen Deep Cleaning</option>
                  <option value="Custom Service">Custom / Other Service</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Calendar size={14} className="text-red-600" /> Preferred Date
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-white [color-scheme:dark] font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <Clock size={14} className="text-red-600" /> Preferred Time Slot
                </label>
                <select
                  required
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-white [&>option]:bg-zinc-900 font-medium"
                >
                  <option value="" disabled>Select a time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 3 PM)">Afternoon (12 PM - 3 PM)</option>
                  <option value="Evening (3 PM - 6 PM)">Evening (3 PM - 6 PM)</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                  <MessageSquare size={14} className="text-red-600" /> Special Instructions (Optional)
                </label>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  placeholder="Any specific stains, areas of focus, or add-ons requested?"
                  rows={3}
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all resize-none font-medium"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-red-600 text-white rounded-xl font-black text-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] hover:-translate-y-1 uppercase tracking-widest mt-8"
            >
              <Send size={20} />
              Book on WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
