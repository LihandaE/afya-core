import { Link } from "react-router-dom";

export default function Home() {
  return (
  <div className="bg-white">
     
  <section className="bg-gradient-to-br from-blue-50 via-white to-green-50">
  <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          
          
  <div>
  <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-teal-100 text-teal-700">
  Trusted Pharmaceutical Wholesaler
  </span>

  <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
  Powering Reliable Pharmaceutical Distribution Across Africa
  </h1>

  <p className="text-gray-600 text-lg mb-10 leading-relaxed">
    AfyaCore is a modern pharmaceutical wholesaler delivering
    quality-assured medicines to retail pharmacies, healthcare
    providers, and institutions with speed, transparency, and
    innovation.
  </p>

  <div className="flex flex-wrap gap-4">
  <Link
  to="/login"
  className="bg-blue-900 text-white px-7 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition"
  >
  Sign In
  </Link>

  <Link
  to="/retail"
  className="border-2 border-blue-700 text-blue-700 px-7 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
  >
  Explore Products
  </Link>
  </div>
  </div>

          
  <div className="hidden md:block">
  <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
  <img
  src="public/ChatGPT Image Dec 30, 2025, 12_18_53 PM.png"
  alt="Pharmaceutical supply chain"
  className="rounded-xl"
  />
  </div>
  </div>
  </div>
  </section>

    
  <section className="max-w-7xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
  What We Do
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
  {[
  {
  title: "Wholesale Distribution",
  text: "Bulk supply of essential and specialty medicines to licensed retail pharmacies.",
  },
  {
  title: "Technology-Driven Ordering",
  text: "Smart dashboards for pharmacies and customers to place, track, and manage orders seamlessly.",
  },
  {
  title: "Regulatory & Quality Compliance",
  text: "All products are sourced from approved manufacturers and comply with strict pharmacy regulations.",
  },
  ].map((item) => (
  <div
  key={item.title}
  className="bg-white shadow-sm hover:shadow-lg transition rounded-2xl p-8 text-center border border-gray-100"
  >
  <h3 className="text-xl font-semibold mb-4 text-blue-800">
  {item.title}
  </h3>
  <p className="text-gray-600 leading-relaxed">
  {item.text}
  </p>
  </div>
  ))}
  </div>
  </section>

      
  <section className="bg-gradient-to-r from-gray-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
  Who We Serve
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
  {[
  "Retail Pharmacies",
  "Hospitals & Clinics",
  "Healthcare Institutions",
  "Individual Customers",
  ].map((item) => (
  <div
  key={item}
  className="bg-white shadow-sm hover:shadow-md transition rounded-2xl p-6 font-semibold text-gray-700 border border-gray-100"
  >
  {item}
  </div>
  ))}
  </div>
  </div>
  </section>

      
  <section className="max-w-7xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
  Why AfyaCore
  </h2>

  <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
  {[
  "Secure ordering system",
  "Transparent pricing",
  "Efficient logistics",
  "Real-time inventory updates",
  ].map((item, index) => (
  <li
  key={index}
  className={`bg-white shadow-sm rounded-2xl p-6 border border-gray-100 ${
  index === 4 ? "md:col-span-2" : ""}`}>
  {item}
  </li>
  ))}
  </ul>
  </section>


  <section className="bg-gradient-to-r from-blue-800 to-teal-700 text-white">
  <div className="max-w-7xl mx-auto px-6 py-24 text-center">
  <h2 className="text-3xl font-bold mb-4">
  Join AfyaCore Today
  </h2>

  <p className="mb-10 text-blue-100 max-w-2xl mx-auto">
            Experience seamless pharmaceutical distribution powered by
            technology, compliance, and trust.
  </p>

  <div className="flex justify-center gap-4 flex-wrap">
  <Link
  to="/login"
  className="bg-white text-blue-800 px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
  >
  Sign In
  </Link>

  <Link
  to="/register"
  className="border-2 border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-800 transition"
  >
  Create Account
  </Link>
  </div>
  </div>
  </section>
  </div>
  );
}
