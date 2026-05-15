import { Link } from "react-router-dom";
import img from "../assets/bg.png"
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-black text-white">

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          {/* <img src={logo} alt="logo" /> */}
          <img src={img} alt="logo" />
          <p className="text-gray-400 mt-3">
            Solutions modernes pour vos cabines dentaires
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-gray-400">

            <li>
              <Link to="/" className="hover:text-white">Accueil</Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-white">Produits</Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <p className="text-gray-400">📞 +216 94 417 945</p>
          <p className="text-gray-400">📧 dentica.tn@gmail.com</p>
          <p className="text-gray-400">📍 Menzel Bouzelfa, Nabeul, Tunisie</p>

          <a
            href="https://wa.me/21694417945?text=Bonjour Dentica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-white"
          >
            💬 WhatsApp
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Dentica. Tous droits réservés. Sahar BenLalla
      </div>

    </footer>
  );
}