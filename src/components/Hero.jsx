import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Fast & Reliable Delivery Services
        </motion.h1>

        <p className="text-gray-300 mb-8">
          Same-day delivery solutions for businesses and individuals.
        </p>

        <button className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold">
          Become a Partner
        </button>
      </div>
    </section>
  );
}