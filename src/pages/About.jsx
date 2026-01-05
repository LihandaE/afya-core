export default function About() {

return (
<div className="bg-white">
      
<section className="bg-gradient-to-br from-blue-50 via-white to-green-50">
<div className="max-w-7xl mx-auto px-6 py-20 text-center">
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

   
<div className="bg-white shadow-xl rounded-2xl p-10 mb-20 flex flex-col md:flex-row gap-10 items-center border border-gray-100">
      
      
<div>
<img src="public/ChatGPT Image Jan 4, 2026, 09_01_45 PM.png" 
alt="Dr Martin" />
</div>

<div>
<h3 className="text-2xl font-bold text-blue-900 mb-1">
    Dr. Martin
</h3>
<p className="text-teal-600 font-semibold mb-3">
    Founder & Chief Executive Officer
</p>
<p className="text-gray-600 leading-relaxed">
    Dr. Martin founded AfyaCore with a vision to strengthen healthcare
    systems through reliable pharmaceutical distribution. He provides
    strategic leadership, drives innovation, and ensures the highest
    standards of quality and compliance.
</p>
</div>
</div>

    
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

     
<div className="bg-white shadow-sm hover:shadow-lg transition rounded-2xl p-8 text-center border border-gray-100">
<div>
<img src="public/ChatGPT Image Jan 4, 2026, 08_58_32 PM.png" 
alt="Dr Maxine" />
</div>
<h4 className="font-semibold text-lg text-blue-800">
      Dr. Maxine
</h4>
<p className="text-teal-600 text-sm mb-2">
      Clinical Operations Lead
</p>
<p className="text-gray-600 text-sm leading-relaxed">
      Oversees clinical operations, ensures appropriate medicine use,
      and aligns AfyaCore’s supply with patient-care standards.
</p>
</div>

      
<div className="bg-white shadow-sm hover:shadow-lg transition rounded-2xl p-8 text-center border border-gray-100">
<div >
<img src="public/ChatGPT Image Jan 4, 2026, 08_51_00 PM.png" 
alt="Dr Louis Image" />
</div>
<h4 className="font-semibold text-lg text-blue-800">
      Dr. Louis
</h4>
<p className="text-teal-600 text-sm mb-2">
      Supply Chain & Quality Lead
</p>
<p className="text-gray-600 text-sm leading-relaxed">
      Manages pharmaceutical logistics, inventory integrity,
      and quality assurance across AfyaCore’s supply chain.
</p>
</div>

     
<div className="bg-white shadow-sm hover:shadow-lg transition rounded-2xl p-8 text-center border border-gray-100">
<div>
<img src="public/ChatGPT Image Jan 4, 2026, 08_55_26 PM.png" 
alt="Dr Noella" />
</div>
<h4 className="font-semibold text-lg text-blue-800">
      Dr. Noella
</h4>
<p className="text-teal-600 text-sm mb-2">
      Regulatory & Compliance Lead
</p>
<p className="text-gray-600 text-sm leading-relaxed">
      Ensures full compliance with PPB regulations, ethical
      pharmaceutical practices, and governance standards.
</p>
</div>

</div>
</div>
</section>

</div>
);
}
