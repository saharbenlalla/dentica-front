import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
          className="rounded-2xl shadow-lg"
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Excellence en produits dentaires
          </h2>
          <p className="text-gray-600">
            Dentica propose des solutions modernes pour les professionnels.
          </p>
          <button
  onClick={() => navigate("/products")}
  className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
>
  Nos produits
</button>
        </motion.div>
      </div>
    </section>
  );
}