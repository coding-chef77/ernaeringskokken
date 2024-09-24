import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Takk for din melding!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-800">Kontakt Oss</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Navn"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="p-2 border border-gray-400 rounded w-full"
        />
        <input
          type="email"
          placeholder="E-post"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="p-2 border border-gray-400 rounded w-full"
        />
        <textarea
          placeholder="Melding"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="p-2 border border-gray-400 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;
