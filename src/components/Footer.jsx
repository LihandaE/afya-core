export default function Footer() {
  
return (
<footer className="bg-blue-900 text-white">
<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
<div>
<h3 className="font-bold text-lg mb-3">AfyaCore</h3>
<p className="text-sm text-blue-100">
Reliable pharmaceutical distribution powered by technology,
integrity, and healthcare expertise.
</p>
</div>

<div>
<h4 className="font-semibold mb-3">Contact Us</h4>
<p className="text-sm">📞 +254 712 345 000</p>
<p className="text-sm">📧 info@afyacore.com</p>
</div>

<div>
<h4 className="font-semibold mb-3">Location</h4>
<p className="text-sm">
AfyaCore House, Medical Plaza<br />
Nairobi, Kenya
</p>
</div>
</div>

<div className="text-center text-sm text-blue-200 py-4 border-t border-blue-800">
© {new Date().getFullYear()} AfyaCore Pharmaceuticals
</div>
</footer>
);
}
