import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Products() {
  const API_URL = "https://dentica-back.onrender.com/api/collections";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 👇 NEW: image zoom state
  const [selectedImage, setSelectedImage] = useState(null);

  // 🔄 FETCH PRODUCTS FROM BACKEND
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(API_URL);
        setProducts(res.data);
      } catch (err) {
        console.error("Erreur fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="pt-24 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="text-center py-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <h1 className="text-4xl font-bold">Nos Produits</h1>
        <p className="mt-2 text-gray-200">
          Qualité professionnelle pour dentistes et Laboratoires Dentaires.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {loading ? (
          <p className="text-center col-span-3">Chargement...</p>
        ) : (
          products.map((p) => (
            <motion.div
              key={p._id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <h1 className="text-red-500 text-5xl">TEST IMAGE</h1>
              {/* IMAGE */}
              {p.image && (
                <img
                  src={p.image}
                  className="h-72 w-full object-cover cursor-pointer"
                  alt={p.title}
                  onClick={() => setSelectedImage(p.image)}
                />
              )}

              <div className="p-5">
                <h3 className="font-bold text-lg">{p.title}</h3>

                <p className="text-blue-600 font-semibold mt-2">
                  {p.price}
                </p>

                <p className="text-gray-600 mt-2">
                  {p.description}
                </p>

                <a
                  href={`https://wa.me/21694417945?text=Bonjour%2C%20je%20veux%20commander%20ce%20produit%3A%20${encodeURIComponent(
                    p.title
                  )}%20-%20Prix%3A%20${p.price}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700">
                    Commander maintenant
                  </button>
                </a>
              </div>
            </motion.div>
          ))
        )}

      </div>

      {/* 🔥 IMAGE ZOOM MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[90%] max-w-[90%] rounded-xl shadow-2xl"
            alt="Zoom"
          />
        </div>
      )}
    </div>
  );
}