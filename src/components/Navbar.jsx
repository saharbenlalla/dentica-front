import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navLink =
    "relative group px-3 py-2 font-medium tracking-wide transition duration-300";

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8 sm:w-10" alt="Dentica" />
          <span className="font-bold text-blue-900 text-lg">Dentica</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">

          <Link to="/" className={navLink}>
            Accueil
          </Link>

          <Link to="/products" className={navLink}>
            Produits
          </Link>

          <Link to="/about" className={navLink}>
            À propos
          </Link>

          <Link to="/contact" className={navLink}>
            Contact
          </Link>
          <Link to="/login" onClick={closeMenu}>
            <button className="w-full bg-blue-900 text-white py-2 px-5 rounded-full mt-2">
              Administration
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl ml-3"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col p-4 gap-4 bg-white shadow-lg">

          <Link to="/" onClick={closeMenu} className="hover:text-blue-900">
            Accueil
          </Link>

          <Link to="/products" onClick={closeMenu} className="hover:text-blue-900">
            Produits
          </Link>

          <Link to="/about" onClick={closeMenu} className="hover:text-blue-900">
            À propos
          </Link>

          <Link to="/contact" onClick={closeMenu} className="hover:text-blue-900">
            Contact
          </Link>

          {/* ADMIN MOBILE */}
          <Link to="/login" onClick={closeMenu}>
            <button className="w-full bg-blue-900 text-white py-2 rounded-full mt-2">
              Administration
            </button>
          </Link>

        </div>
      )}
    </nav>
  );
}