export default function WhatsAppButton() {
  const link = "https://wa.me/21612345678?text=Bonjour Dentica";

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-xl z-50"
    >
      💬
    </a>
  );
}