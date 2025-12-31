import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
const { user, logout } = useAuth();

return (
<header className="bg-white shadow">
<div className="max-w-7xl mx-auto p-4 flex justify-between">
<h1 className="text-2xl font-bold text-blue-700">
AfyaCore
</h1>

<nav className="space-x-4">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/blog">Blog</Link>

{!user ? (
<>
<Link to="/login" className="text-teal-600">
Sign In
</Link>
<Link to="/register" className="text-teal-600">
Register
</Link>
</>
) : (
<button
onClick={logout}
className="text-red-600">
Sign Out
</button>
)}
</nav>
</div>
</header>
);
}
