import { motion } from "framer-motion";
import dent from "../assets/dent.png"
export default function AboutPage() {
  return (
    <div className="pt-24">

      {/* HERO */}
      <div className="h-[50vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-black text-white">
        <h1 className="text-4xl font-bold">À propos de Dentica</h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <motion.img
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={dent}
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Solutions dentaires.
          </h2>

          <p className="text-gray-600">
            Notre société est spécialisée dans la fabrication et la distribution de produits dentaires professionnels de haute qualité.
            <br/> Grâce à notre expertise et à notre engagement envers l’innovation, nous proposons des solutions adaptées aux besoins des cabinets dentaires, cliniques et laboratoires. <br/>
Nous mettons à disposition une large gamme de produits : équipements dentaires, instruments de précision, consommables médicaux et produits d’hygiène, tous conçus pour garantir efficacité, sécurité et confort aux professionnels comme aux patients. <br/>
Notre priorité est d’offrir des produits fiables, conformes aux normes internationales, tout en assurant un excellent service client et un accompagnement personnalisé. <br/> En collaborant avec des partenaires de confiance et en suivant les dernières avancées technologiques, notre société contribue chaque jour à l’amélioration des soins dentaires. <br /> 
Choisir notre entreprise, c’est choisir la qualité, l’innovation et le professionnalisme au service de la santé bucco-dentaire.
          </p>
        </motion.div>

      </div>

      {/* VALUES */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

          {["Qualité", "Innovation", "Confiance"].map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <h3 className="font-bold text-lg">{v}</h3>
            </motion.div>
          ))}

        </div>
      </div>

    </div>
  );
}