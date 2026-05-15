import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Admin() {
  const API_URL = "https://dentica-back.onrender.com/api/collections";

  const [products, setProducts] = useState([]);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
  });

  // 🔐 SAFE TOKEN (toujours relu)
  const getToken = () => localStorage.getItem("token");

  // 🔄 LOAD PRODUCTS (PUBLIC GET)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(API_URL);
        setProducts(res.data);
      } catch (err) {
        console.error("GET error:", err);
      }
    };

    fetchProducts();
  }, []);

  // ➕ ADD PRODUCT
  const addProduct = async (e) => {
    e.preventDefault();

    const token = getToken();

    if (!token) {
      console.error("No token found");
      return;
    }

    if (!form.title || !form.price || !form.description) return;

    try {
      const data = new FormData();
      data.append("title", form.title);
      data.append("price", form.price);
      data.append("description", form.description);

      if (file) data.append("image", file);

      const res = await axios.post(API_URL, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts((prev) => [...prev, res.data]);

      setForm({ title: "", price: "", description: "" });
      setFile(null);
      setPreview(null);
    } catch (err) {
      console.error("Erreur ajout:", err);
    }
  };

  // ❌ DELETE PRODUCT
  const deleteProduct = async (id) => {
    const token = getToken();

    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // 📁 IMAGE PREVIEW
  const handleImage = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Gestion des produits</p>
      </div>

      {/* FORM */}
      <motion.form
        onSubmit={addProduct}
        className="bg-white p-6 rounded-2xl shadow-lg space-y-4 max-w-xl mx-auto"
      >
        <h2 className="text-xl font-semibold">Ajouter produit</h2>

        <input
          type="text"
          placeholder="Nom produit"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="w-full p-3 border rounded"
        />

        <input
          type="text"
          placeholder="Prix"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
          className="w-full p-3 border rounded"
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full p-3 border rounded"
        />

        {/* IMAGE */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="w-full p-3 border rounded"
        />

        {preview && (
          <img
            src={preview}
            className="w-32 h-32 object-cover rounded"
            alt="preview"
          />
        )}

        <button className="w-full bg-blue-600 text-white py-3 rounded-full">
          Ajouter produit
        </button>
      </motion.form>

      {/* LIST */}
      <div className="max-w-6xl mx-auto mt-10 space-y-4">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div className="flex gap-4 items-center">

              {p.image && (
                <img
                  src={p.image}
                  className="w-16 h-16 object-cover rounded"
                  alt="product"
                />
              )}

              <div>
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-blue-600">{p.price}</p>
                <p className="text-gray-500 text-sm">
                  {p.description}
                </p>
              </div>
            </div>

            <button
              onClick={() => deleteProduct(p._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-full"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}