import { motion } from "framer-motion";
import { FiZap, FiMapPin, FiSmile, FiShield } from "react-icons/fi";

export default function WhyUs() {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Lightning fast deliveries across cities. We value your time.",
      icon: <FiZap size={24} />
    },
    {
      title: "Live Tracking",
      desc: "Track every shipment in real-time with granular updates.",
      icon: <FiMapPin size={24} />
    },
    {
      title: "Affordable Pricing",
      desc: "Best rates for businesses and individuals without hidden fees.",
      icon: <FiSmile size={24} />
    },
    {
      title: "24/7 Support",
      desc: "Our dedicated support team is always available to help you.",
      icon: <FiShield size={24} />
    }
  ];

  return (
    <section id="whyus" className="py-24 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            We deliver more than just packages
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            From the moment your package is picked up to its final destination, we ensure a seamless, secure, and rapid delivery process. Discover why thousands trust us every day.
          </p>
          
          <div className="flex gap-4">
            <div className="flex -space-x-4">
              <img className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=1" alt="User" />
              <img className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=2" alt="User" />
              <img className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=3" alt="User" />
              <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-orange-500 flex items-center justify-center text-white font-bold text-xs">
                +10k
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-white font-bold">Happy Customers</div>
              <div className="text-orange-400 text-sm flex gap-1">
                {'★★★★★'}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-950/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-orange-400 mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-lg text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}