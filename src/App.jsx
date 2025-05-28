import React, { useState } from "react";
import axios from "axios";

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [medicines, setMedicines] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMedicines(null);
    setError("");
    try {
      const response = await axios.post("/api/recommend", { symptoms });
      setMedicines(response.data.medicines);
    } catch (err) {
      setError("Could not fetch recommendations.");
    }
  };

  return (
    <div className="font-bold text-4xl bg-amber-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-8">Medicine Recommendation</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          className="text-xl p-2 rounded border border-amber-300"
          type="text"
          value={symptoms}
          onChange={e => setSymptoms(e.target.value)}
          placeholder="Enter your symptoms"
          required
        />
        <button
          type="submit"
          className="ml-4 px-4 py-2 bg-amber-400 rounded text-xl"
        >
          Get Recommendation
        </button>
      </form>
      {medicines && (
        <div className="bg-white rounded p-4 shadow text-black text-lg">
          <h2 className="font-semibold mb-2">Recommended Medicines:</h2>
          <ul>
            {medicines.map((med, idx) => (
              <li key={idx}>
                <a
                  href={med.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 underline"
                >
                  {med.name}
                </a>
                {med.description ? `: ${med.description}` : ""}
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <div className="text-red-600 mt-4">{error}</div>}
    </div>
  );
}

export default App;
