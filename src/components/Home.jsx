import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-extrabold text-red-700">
        Hei Fra Ernæringskokken!!
      </h1>
      <h2 className="text-4xl font-bold text-green-600">
        Det ser ut til å fungere
      </h2>
      <p className="text-xl text-gray-800">Hei igjen fra Ernæringskokken!!</p>
    </motion.div>
  );
}

export default Home;
