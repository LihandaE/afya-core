import { useState } from "react";
import axios from "axios";

export default function Blog() {
  const [drugName, setDrugName] = useState("");
  const [drugData, setDrugData] = useState(null);
  const [error, setError] = useState("");

  const fetchDrugInfo = async () => {
    setError("");
    setDrugData(null);

    if (!drugName.trim()) {
      setError("Please enter a drug name to search.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${encodeURIComponent(
          drugName
        )}&limit=1`
      );

      setDrugData(response.data.results[0]);
    } catch (err) {
      setError("No data found or API limit reached.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        Drug Research & Info
      </h1>

      <div className="mb-6 flex space-x-3">
        <input
          type="text"
          placeholder="Enter drug name (e.g., Aspirin)"
          value={drugName}
          onChange={(e) => setDrugName(e.target.value)}
          className="border p-3 w-full rounded"
        />
        <button
          onClick={fetchDrugInfo}
          className="bg-teal-600 text-white px-5 py-3 rounded hover:bg-teal-700"
        >
          Search
        </button>
      </div>

      {error && (
        <div className="text-red-600 mb-4 font-semibold">{error}</div>
      )}

      {drugData && (
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          {/* Drug basic info */}
          <h2 className="text-2xl font-bold text-teal-700">
            {drugName.toUpperCase()} — Research Overview
          </h2>

          {/* Mechanism of Action */}
          {drugData.openfda && drugData.openfda.pharm_class_moa && (
            <div>
              <h3 className="text-lg font-semibold">Mechanism of Action</h3>
              <p className="text-gray-700">
                {drugData.openfda.pharm_class_moa.join(", ")}
              </p>
            </div>
          )}

          {/* Indications & Uses */}
          {drugData.indications_and_usage && (
            <div>
              <h3 className="text-lg font-semibold">Indications & Uses</h3>
              {drugData.indications_and_usage.map((item, idx) => (
                <p key={idx} className="text-gray-700">
                  {item}
                </p>
              ))}
            </div>
          )}

          {/* Adverse Reactions / Side Effects */}
          {drugData.adverse_reactions && (
            <div>
              <h3 className="text-lg font-semibold">Side Effects</h3>
              {drugData.adverse_reactions.map((item, idx) => (
                <p key={idx} className="text-gray-700">
                  {item}
                </p>
              ))}
            </div>
          )}

          {/* Warnings / Contraindications */}
          {drugData.warnings && (
            <div>
              <h3 className="text-lg font-semibold">Contraindications & Warnings</h3>
              {drugData.warnings.map((item, idx) => (
                <p key={idx} className="text-gray-700">
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
