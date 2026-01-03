import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [role, setRole] = useState("retail");
  const [form, setForm] = useState({
    pharmacyName: "",
    ppbLicence: "",
    location: "",
    name: "",
    age: "",
    contact: "",
    prescription: null,
  });

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const handleRegister = () => {
    
    setMessage({ type: "", text: "" });

    if (role === "retail") {
      if (!form.pharmacyName || !form.ppbLicence || !form.location) {
        setMessage({
          type: "error",
          text: "All pharmacy fields are required.",
        });
        return;
      }

      login({
        role: "retail",
        pharmacyName: form.pharmacyName,
        ppbLicence: form.ppbLicence,
        location: form.location,
      });

      setMessage({
        type: "success",
        text: "Retail pharmacy registered successfully.",
      });

      setTimeout(() => navigate("/retail"), 800);
    }

    if (role === "customer") {
      if (!form.name || !form.age || !form.contact || !form.location) {
        setMessage({
          type: "error",
          text: "All patient details are required.",
        });
        return;
      }

      login({
        role: "customer",
        name: form.name,
        age: form.age,
        contact: form.contact,
        location: form.location,
        prescription: form.prescription,
      });

      setMessage({
        type: "success",
        text: "Patient registered successfully.",
      });

      setTimeout(() => navigate("/customer"), 800);
    }
  };

  
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(
        () => setMessage({ type: "", text: "" }),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="max-w-lg mx-auto mt-20 bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
        Register
      </h2>

      
      {message.text && (
        <div
          className={`mb-6 rounded-lg p-3 text-sm ${
            message.type === "error"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message.text}
        </div>
      )}

      <select
        className="border p-3 w-full mb-6"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="retail">Retail Pharmacy</option>
        <option value="customer">Individual Patient</option>
      </select>

      {role === "retail" && (
        <>
          <input
            placeholder="Pharmacy Name"
            className="border p-3 w-full mb-3"
            onChange={(e) =>
              setForm({ ...form, pharmacyName: e.target.value })
            }
          />
          <input
            placeholder="PPB Licence Number"
            className="border p-3 w-full mb-3"
            onChange={(e) =>
              setForm({ ...form, ppbLicence: e.target.value })
            }
          />
          <input
            placeholder="Pharmacy Location"
            className="border p-3 w-full mb-3"
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
          />
        </>
      )}

      {role === "customer" && (
        <>
          <input
            placeholder="Full Name"
            className="border p-3 w-full mb-3"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Age"
            type="number"
            className="border p-3 w-full mb-3"
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />
          <input
            placeholder="Contact"
            className="border p-3 w-full mb-3"
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
          />
          <input
            placeholder="Location"
            className="border p-3 w-full mb-3"
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
          <input
            type="file"
            className="border p-3 w-full mb-3"
            onChange={(e) =>
              setForm({ ...form, prescription: e.target.files[0] })
            }
          />
        </>
      )}

      <button
        onClick={handleRegister}
        className="bg-teal-600 text-white w-full py-3 rounded-lg hover:bg-teal-700 transition"
      >
        Complete Registration
      </button>
    </div>
  );
}
