export default function About() {

return (
<div className="bg-white">
      
<section className="bg-gradient-to-br from-blue-50 via-white to-green-50">
<div className="max-w-7xl mx-auto px-6 py-24 text-center">
<h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
About AfyaCore
</h1>
<p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
AfyaCore is a technology-driven pharmaceutical wholesaler dedicated
to strengthening healthcare systems by ensuring safe, reliable, and
timely access to quality medicines.
</p>
</div>
</section>

      
<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid md:grid-cols-2 gap-14 items-center">
<div>
<h2 className="text-3xl font-bold text-blue-900 mb-6">
AfyaCore Story
</h2>
<p className="text-gray-600 leading-relaxed mb-4">
AfyaCore was founded to address critical gaps in pharmaceutical
access across Africa. We recognized the need for a wholesaler
that not only distributes medicines, but also upholds the
highest standards of quality, transparency, and regulatory
compliance.
</p>
<p className="text-gray-600 leading-relaxed">
By combining healthcare expertise with modern digital solutions,
AfyaCore enables pharmacies, hospitals, and healthcare providers
to access medicines efficiently while maintaining patient safety
from manufacturer to end user.
</p>
</div>

<div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
<ul className="space-y-4 text-gray-700">
<li>✔ Quality-assured pharmaceutical sourcing</li>
<li>✔ Technology-enabled ordering systems</li>
<li>✔ Reliable supply chain & logistics</li>
<li>✔ Strong regulatory compliance culture</li>
</ul>
</div>
</div>
</section>

      
<section className="bg-gray-50">
<div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10">
<div className="bg-white shadow rounded-2xl p-8 border border-gray-100">
<h3 className="text-2xl font-bold text-blue-900 mb-4">
Our Mission
</h3>
<p className="text-gray-600 leading-relaxed">
To ensure timely, affordable, and secure access to quality
medicines by empowering pharmacies and healthcare providers
through efficient wholesale distribution and smart technology.
</p>
</div>

<div className="bg-white shadow rounded-2xl p-8 border border-gray-100">
<h3 className="text-2xl font-bold text-blue-900 mb-4">
Our Vision
</h3>
<p className="text-gray-600 leading-relaxed">
To become Africa’s most trusted pharmaceutical wholesaler,
supporting healthier communities through innovation, integrity,
and strong healthcare partnerships.
</p>
</div>
</div>
</section>

      
<section className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
Our Core Values
</h2>

<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
{[
{
title: "Integrity",
text: "Ethical sourcing and transparent operations",
},
{
title: "Quality",
text: "Strict adherence to pharmaceutical standards",
},
{
title: "Innovation",
text: "Technology-driven healthcare solutions",
},
{
title: "Partnership",
text: "Empowering pharmacies and healthcare providers",
},
].map((value) => (
<div
key={value.title}
className="bg-white shadow-sm hover:shadow-lg transition rounded-2xl p-6 border border-gray-100"
>
<h4 className="font-semibold text-lg mb-2 text-blue-800">
{value.title}
</h4>
<p className="text-gray-600 text-sm">
{value.text}
</p>
</div>
))}
</div>
</section>

      
<section className="bg-gradient-to-br from-gray-50 to-blue-50">
<div className="max-w-7xl mx-auto px-6 py-24">
<h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
Leadership Team
</h2>

        
<div className="bg-white shadow-xl rounded-2xl p-10 mb-16 flex flex-col md:flex-row gap-10 items-center border border-gray-100">
<img
src=""
alt="Dr. Martin"
className="w-44 h-44 rounded-full object-cover"
/>
<div>
<h3 className="text-2xl font-bold text-blue-900 mb-1">
Dr. Martin
</h3>
<p className="text-teal-600 font-semibold mb-4">
Founder & Chief Executive Officer
</p>
<p className="text-gray-600 leading-relaxed">
Dr. Martin founded AfyaCore with a vision to strengthen
healthcare systems through reliable pharmaceutical
distribution. With deep experience in clinical practice and
healthcare leadership, he drives AfyaCore’s commitment to
quality, compliance, and innovation.
</p>
</div>
</div>

          
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
{[
{
name: "Dr. Maxine",
role: "Clinical Operations Lead",
},
{
name: "Dr. Louis",
role: "Supply Chain & Quality Lead",
},
{
name: "Dr. Noella",
role: "Regulatory & Compliance Lead",
},
].map((member) => (
<div
key={member.name}
className="bg-white shadow-sm hover:shadow-lg transition rounded-2xl p-8 text-center border border-gray-100"
>
<img
src=""
alt={member.name}
className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
/>
<h4 className="font-semibold text-lg text-blue-800">
{member.name}
</h4>
<p className="text-teal-600 text-sm">
{member.role}
</p>
</div>
))}
</div>
</div>
</section>
</div>
);
}
