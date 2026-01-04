import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  const navBase =
    "relative px-3 py-2 font-medium text-gray-700 transition duration-300";

  const navHover =
    "hover:text-teal-700 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full";

  const navActive =
    "text-teal-700 after:w-full after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-teal-600";

  return (
<header className="bg-white shadow-sm border-b sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
       
<Link
to="/"
className="text-2xl font-extrabold text-blue-800 tracking-tight"
>
          AfyaCore
</Link>

        
<nav className="flex items-center space-x-4">
<NavLink
to="/"
className={({ isActive }) =>
`${navBase} ${navHover} ${isActive ? navActive : ""}`
}
>
Home
</NavLink>

<NavLink
to="/about"
className={({ isActive }) =>
`${navBase} ${navHover} ${isActive ? navActive : ""}`
}
>
About
</NavLink>

<NavLink
to="/blog"
className={({ isActive }) =>
`${navBase} ${navHover} ${isActive ? navActive : ""}`
}
>
Blog
</NavLink>

{!user ? (
<>
<NavLink
to="/login"
className="ml-4 px-4 py-2 rounded-full text-teal-700 font-semibold hover:bg-teal-50 active:scale-95 transition"
>
Sign In
</NavLink>

<NavLink
to="/register"
className="px-5 py-2 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 active:scale-95 transition shadow-sm"
>
Register
</NavLink>
</>
) : (
<button
onClick={logout}
className="ml-4 px-4 py-2 rounded-full text-red-600 font-semibold hover:bg-red-50 active:scale-95 transition"
>
Sign Out
</button>
)}
</nav>
</div>
</header>
  );
}
