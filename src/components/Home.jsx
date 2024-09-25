import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-extrabold text-primary-dark">
        Hei Fra Ernæringskokken!!
      </h1>
      <h2 className="text-4xl font-bold text-secondary-dark">
        Det ser ut til å fungere
      </h2>
      <p className="text-xl text-gray-700">Jeg gleder meg til fredag!</p>
      <p className="text-xl text-gray-700">
        Jeg heter Selma, og er 7 år. Jeg går på Prinsdal skole.
      </p>
    </motion.div>
  );
}

export default Home;
