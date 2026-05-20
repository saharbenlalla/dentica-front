import { motion } from "framer-motion";
import logo from "../assets/logo-white.jpeg";

export default function Contact() {
  const phone = "21694417945";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Bonjour Dentica 👋 je veux des informations ou un devis sur vos produits"
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white pt-28 px-4">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold">Contactez Dentica</h1>
        <p className="text-gray-300 mt-2">
          Réponse rapide via WhatsApp ⚡
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >

          <img
            src={logo}
            className="rounded-2xl shadow-2xl w-full max-w-sm object-cover mx-auto"
            alt="Contact Dentica"
          />

          <div className="bg-white/10 p-5 rounded-xl space-y-3 backdrop-blur-md">
            <p>📍 <strong>Localisation :</strong> Menzel Bouzelfa, Nabeul, Tunisie</p>
            <p>📞 <strong>Téléphone :</strong> +216 94 417 945</p>
            <p>📧 <strong>Email :</strong> dentica.tn@gmail.com</p>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg shadow-2xl text-center"
        >

          <h2 className="text-2xl font-bold mb-4">
            Besoin d’un devis rapide ?
          </h2>

          <p className="text-gray-300 mb-6">
            Cliquez ci-dessous pour discuter directement avec nous sur WhatsApp 💬
          </p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-500 hover:bg-green-600 py-4 rounded-full font-bold text-lg shadow-lg"
            >
              💬 Ouvrir WhatsApp
            </motion.button>
          </a>

          <p className="text-sm text-gray-400 mt-4">
            Réponse en moins de 5 minutes ⚡
          </p>

        </motion.div>

      </div>
    </div>
  );
}