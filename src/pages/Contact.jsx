import { motion } from "framer-motion";
import logo from "../assets/logo-white.jpeg"
export default function Contact() {

  const phone = "21694417945";

  const whatsappLink =
    `https://wa.me/${phone}?text=${encodeURIComponent(
      "Bonjour Dentica 👋 je veux des informations ou un devis sur vos produits"
    )}`;

  return (
  <div className="text-6xl text-red-600">
    TEST PRODUCTS PAGE
  </div>
);}