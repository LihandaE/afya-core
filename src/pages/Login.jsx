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

  const handleLogin = () => {
    // ADMIN CHECK
    if (form.role === "admin") {
      if (form.email !== ADMIN_EMAIL) {
        alert("Unauthorized admin access");
        return;
      }
      login({ role: "admin", name: "Admin Lihanda", email: form.email });
      navigate("/admin");
      return;
    }

    // Retail or Customer (must register first)
    alert("Please register first to continue.");
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
        Sign In
      </h2>

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
        className="bg-teal-600 text-white w-full py-3 rounded-lg"
      >
        Sign In
      </button>
    </div>
  );
}
