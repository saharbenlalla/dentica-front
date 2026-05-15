import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img from "../assets/img1.jfif"
export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="h-screen relative flex items-center overflow-hidden">

      {/* Background */}
      <img
        src={img}
        className="absolute w-full h-full object-cover"
        alt="Dentica hero"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-white z-10">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Produits dentaires <br />
          <span className="text-blue-300">haut de gamme</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 max-w-lg text-gray-200"
        >
          Dentica CapBon accompagne les professionnels avec des équipements
          modernes et fiables.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-col sm:flex-row gap-4"
        >

          {/* PRODUCTS */}
          <button
            onClick={() => navigate("/products")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition"
          >
            Voir produits
          </button>

          {/* CONTACT */}
          <button
            onClick={() => navigate("/contact")}
            className="glass px-6 py-3 hover:scale-105 transition"
          >
            Contact
          </button>

        </motion.div>
      </div>

      {/* Floating Card */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 right-10 glass p-4 hidden md:block"
      >
        <h3 className="font-bold">+500 clients</h3>
        <p className="text-sm text-gray-200">satisfaits</p>
      </motion.div>

    </section>
  );
}