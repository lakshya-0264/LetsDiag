import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LetsDiag() {
  return (
    <div className="bg-amber-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Are you feeling low??
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Let’s diagnose through some medicines!
        </motion.p>
        <motion.p
          className="text-red-700 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          ⚠️ This is an AI-based recommendation. Always consult a certified doctor before taking any medicine.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-400 text-black px-6 py-3 rounded-lg shadow-lg cursor-pointer"
        >
          <Link to="/diagnosis" className="text-xl font-semibold">
            Let's Begin
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default LetsDiag;
