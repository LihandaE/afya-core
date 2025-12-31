export default function StatCard({ title, value, subtitle }) {
  
return (
<div className="bg-white rounded-xl shadow p-6 border-l-4 border-teal-600">
<p className="text-sm text-gray-500 mb-1">
{title}
</p>

<h3 className="text-3xl font-bold text-blue-800">
{value}
</h3>

{subtitle && (
<p className="text-xs text-gray-400 mt-1">
{subtitle}
</p>
)}
</div>
);
}
