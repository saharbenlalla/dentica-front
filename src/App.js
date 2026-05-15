import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsAdmin from "./pages/admin/Products.jsx";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsappButton";
import Login from "./pages/admin/Login.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen overflow-x-hidden">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<ProductsAdmin />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
        <WhatsAppButton />

      </div>
    </BrowserRouter>
  );
}