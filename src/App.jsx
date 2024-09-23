import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-red-600">
        Hei Fra Ernæringskokken!!
      </h1>
      <h2 className="text-3xl font-bold text-blue-600">
        Det ser ut til å fungere
      </h2>
      <p className="text-3xl font-bold text-blue-600">
        Hei igjen fra Ernæringskokken!!
      </p>
    </motion.div>
  );
}

export default App;
