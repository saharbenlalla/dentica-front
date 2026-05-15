import { motion } from "framer-motion";
import img from "../assets/cabinet.jfif"
export default function Services() {
  const advantages = [
    {
      title: "Qualité Premium",
      desc: "Produits dentaires sélectionnés avec des standards élevés.",
    },
    {
      title: "Livraison rapide",
      desc: "Service rapide et fiable partout en Tunisie.",
    },
    {
      title: "Support WhatsApp",
      desc: "Assistance directe et réponse rapide 7j/7.",
    },
    {
      title: "Prix compétitifs",
      desc: "Meilleur rapport qualité/prix pour les professionnels.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={img}
            alt="Dentisterie"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-3xl font-bold mb-6">
            Pourquoi choisir <span className="text-blue-600">Dentica</span> ?
          </h2>

          <p className="text-gray-500 mb-6">
            Nous offrons des solutions dentaires modernes, fiables et adaptées aux professionnels.
          </p>

          {/* ADVANTAGES LIST */}
          <div className="space-y-5">

            {advantages.map((item, i) => (
              <div key={i} className="flex gap-4">

                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full">
                  ✔
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>

              </div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}