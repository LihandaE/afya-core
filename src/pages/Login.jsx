import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ADMIN_EMAIL = "emmanuel.lihanda@afyacore.com";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    role: "customer",
  });

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const handleLogin = () => {
    
  setMessage({ type: "", text: "" });

  if (form.role === "admin") {
  if (form.email !== ADMIN_EMAIL) {
  setMessage({
  type: "error",
  text: "Unauthorized admin access. Invalid email address.",
  });
  return;
  }

  login({
  role: "admin",
  name: "Admin Lihanda",
  email: form.email,
  });

  navigate("/admin");
  return;
  }

    
  setMessage({
  type: "info",
  text: "Please register first before signing in.",
  });
  };

  return (
  <div className="max-w-md mx-auto mt-20 bg-white shadow rounded-xl p-6">
  <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
  Sign In
  </h2>

     
  {message.text && (
  <div
  className={`mb-4 rounded-lg p-3 text-sm ${
  message.type === "error"
    ? "bg-red-100 text-red-700"
    : message.type === "info"
    ? "bg-blue-100 text-blue-700"
    : "bg-green-100 text-green-700"
    }`}
    >
  {message.text}
  </div>
      )}

  <input
  type="email"
  placeholder="Email address"
  className="border p-3 w-full mb-4"
  onChange={(e) => setForm({ ...form, email: e.target.value })}
  />

  <select
  className="border p-3 w-full mb-6"
  onChange={(e) => setForm({ ...form, role: e.target.value })}
  >
  <option value="admin">Admin</option>
  <option value="retail">Retail Pharmacy</option>
  <option value="customer">Individual Patient</option>
  </select>

  <button
  onClick={handleLogin}
  className="bg-teal-600 text-white w-full py-3 rounded-lg hover:bg-teal-700 transition"
  >
  Sign In
  </button>
  </div>
  );
}
