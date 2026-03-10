import { motion } from "framer-motion";
import { FiClock, FiShoppingCart, FiCoffee, FiTruck } from "react-icons/fi";

export default function Services() {
  const services = [
    {
      title: "Same Day Delivery",
      desc: "Get your packages delivered before the sun sets. Lightning fast.",
      icon: <FiClock size={32} />
    },
    {
      title: "Ecommerce Delivery",
      desc: "Reliable logistics solutions for online businesses of all sizes.",
      icon: <FiShoppingCart size={32} />
    },
    {
      title: "Food Delivery",
      desc: "Hot, fresh, and on time. Specialized delivery for restaurants.",
      icon: <FiCoffee size={32} />
    },
    {
      title: "Express Courier",
      desc: "Urgent documents and parcels handled with priority care.",
      icon: <FiTruck size={32} />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive delivery solutions tailored to meet your unique needs with speed and security.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/5 hover:border-orange-500/50 p-8 rounded-3xl transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg">
                {s.icon}
              </div>
              <h3 className="font-bold text-xl text-white mb-3 tracking-wide">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}