import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function Coverage() {
  const cities = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ajman",
    "Ras Al Khaimah",
    "Fujairah",
    "Umm Al Quwain",
    "Al Ain",
  ];

  return (
    <section id="coverage" className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Coverage</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-16">
          Operating across major cities, providing seamless logistics and delivery network everywhere you need us.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(249, 115, 22, 0.1)" }}
              className="flex items-center gap-2 bg-slate-900 border border-white/10 px-6 py-3 rounded-full text-slate-300 font-medium cursor-default transition-colors hover:border-orange-500/30"
            >
              <FiCheckCircle className="text-orange-500" />
              {city}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}