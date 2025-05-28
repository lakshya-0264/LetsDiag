import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Diagnosis() {
  const [symptoms, setSymptoms] = useState("");
  const [medicines, setMedicines] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visibleWiki, setVisibleWiki] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMedicines(null);
    setError("");
    setLoading(true);
    setVisibleWiki({});
    try {
      const response = await axios.post(`${BASE_URL}/api/recommend`, { symptoms });
      setMedicines(response.data.medicines);
    } catch (err) {
      setError("Could not fetch recommendations.");
    } finally {
      setLoading(false);
    }
  };

  const toggleWiki = (index) => {
    setVisibleWiki((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-amber-100">
      <Header />
      <main className="flex-grow flex flex-col items-center px-6 pt-10">
        <form onSubmit={handleSubmit} className="mb-6 flex items-center">
          <input
            className="text-xl p-2 rounded border border-amber-300 w-72"
            type="text"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder="Enter your symptoms"
            required
          />
          <motion.button
            type="submit"
            className="ml-4 px-4 py-2 bg-amber-400 rounded text-xl text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Diagnose
          </motion.button>
        </form>

        {loading && (
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-amber-600 border-opacity-75 my-4"></div>
        )}

        {medicines && (
          <div className="space-y-4 w-full max-w-2xl mt-10 mb-8">
            <h2 className="text-2xl font-semibold text-black text-center mb-4">
              Recommended Medicines:
            </h2>
            {medicines.map((med, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-lg text-black text-lg"
              >
                <div className="flex flex-col gap-1">
                  <a
                    href={med.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-700 underline font-semibold"
                  >
                    {med.name}
                  </a>
                  {med.description && <p>{med.description}</p>}
                  <button
                    onClick={() => toggleWiki(idx)}
                    className="text-sm text-amber-500 underline w-fit mt-1 hover:text-amber-700"
                  >
                    {visibleWiki[idx] ? "Hide Wikipedia" : "View Wikipedia"}
                  </button>
                </div>

                <AnimatePresence>
                  {visibleWiki[idx] && (
                    <motion.div
                      key="wiki"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-2"
                    >
                      <iframe
                        src={`https://en.wikipedia.org/wiki/${encodeURIComponent(
                          med.name
                        )}`}
                        title={med.name}
                        width="100%"
                        height="200"
                        className="rounded border"
                      ></iframe>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}

        {error && <div className="text-red-600 mt-4">{error}</div>}

        <Link
          to="/"
          className="mt-10 mb-6 text-amber-600 underline hover:text-amber-800 text-lg"
        >
          ← Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default Diagnosis;