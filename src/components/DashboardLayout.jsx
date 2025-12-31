import { useAuth } from "../context/AuthContext";

export default function DashboardLayout({ title, children }) {
  const { user } = useAuth();

return (
<div className="min-h-screen bg-gray-50">
    
<div className="bg-white shadow-sm border-b">
<div className="max-w-7xl mx-auto px-6 py-6">
<h1 className="text-3xl font-bold text-blue-800">
{title}
</h1>
{user && (
<p className="text-sm text-gray-600 mt-1">
Signed in as{" "}
<span className="font-semibold text-teal-600">
{user.role === "retail" ? user.pharmacyName || "Retail Pharmacy" : user.name || user.role}
</span>
</p>
)}
</div>
</div>

      
<main className="max-w-7xl mx-auto px-6 py-8">
{children}
</main>
</div>
);
}
