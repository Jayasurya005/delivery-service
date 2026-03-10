import { motion } from "framer-motion";
import { FiArrowRight, FiBox } from "react-icons/fi";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left pt-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Ultra-Fast Logistics
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            Deliver on <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">
              Your Promises
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Experience seamless, same-day delivery solutions engineered for modern businesses and individuals. Speed, reliability, and real-time tracking at your fingertips.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#partner" className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 group">
              Become a Partner
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold transition-all border border-white/10 flex items-center justify-center gap-2">
              Explore Services
            </a>
          </motion.div>
        </motion.div>
        
        {/* Abstract Hero Image Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="relative w-full aspect-square max-w-md">
             {/* Floating cards simulation */}
             <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 w-48 h-48 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl -rotate-6 opacity-80 blur-sm mix-blend-screen"
             />
             <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-10 w-56 h-56 bg-gradient-to-br from-rose-500 to-purple-600 rounded-3xl rotate-12 opacity-80 blur-sm mix-blend-screen"
             />
             
             <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl overflow-hidden p-8">
                <FiBox size={80} className="text-orange-400 mb-6 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]" />
                <h3 className="text-2xl font-bold text-white mb-2">Live Tracking</h3>
                <div className="w-full h-2 bg-slate-800 rounded-full mt-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-orange-400 to-rose-500"
                  />
                </div>
                <div className="flex justify-between w-full mt-2 text-xs text-slate-400 font-medium">
                  <span>Processing</span>
                  <span>Delivered</span>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}