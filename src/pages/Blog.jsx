import axios from "axios";
import { useEffect, useState } from "react";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.fda.gov/drug/label.json?limit=6")
      .then((res) => {
        setArticles(res.data.results || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">
        Medication Education & Quality Assurance
      </h1>

      <p className="text-gray-600 mb-10">
        Learn how medicines are developed, handled, stored, and maintained
        safely from manufacturer to patient.
      </p>

      {loading ? (
        <p>Loading articles...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((item, i) => (
            <div key={i} className="bg-white shadow rounded-xl p-6">
              <h3 className="font-semibold mb-2">
                {item.openfda?.brand_name?.[0] || "Medication Safety"}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Proper storage, transportation, and dispensing of medicines
                ensures quality and patient safety.
              </p>
              <p className="text-xs text-gray-500">
                Source: openFDA
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
