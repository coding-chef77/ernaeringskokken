import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-800">Om Ernæringskokken</h1>
    </motion.div>
  );
}

export default About;
