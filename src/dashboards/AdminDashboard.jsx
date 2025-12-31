import DashboardLayout from "../components/DashboardLayout";
import { useMedication } from "../context/MedicationContext";
import { useOrders } from "../context/OrderContext";
import { useState } from "react";

export default function AdminDashboard() {
const { medications, addMedication, removeMedication } = useMedication();
const { orders, updateStatus } = useOrders();

const [form, setForm] = useState({
    name: "",
    quantity: "",
    price: "",
    expiry: "",
  });

const handleAddMedication = () => {
if (!form.name || !form.quantity || !form.price || !form.expiry) {
alert("All medication fields are required");
return;
}

addMedication({
      name: form.name,
      quantity: Number(form.quantity),
      price: Number(form.price),
      expiry: form.expiry,
    });

setForm({ name: "", quantity: "", price: "", expiry: "" });
};

return (
<DashboardLayout title="Admin Lihanda – System Control">
      
<div className="bg-white p-6 shadow rounded-xl mb-10">
<h2 className="text-lg font-semibold mb-4">
Add Medication
</h2>

<div className="grid md:grid-cols-4 gap-4">
<input placeholder="Medication Name" className="border p-2 rounded" value={form.name}
onChange={(e) =>
setForm({ ...form, name: e.target.value })
}
/>
<input
placeholder="Quantity"
type="number"
className="border p-2 rounded"
value={form.quantity}
onChange={(e) =>
setForm({ ...form, quantity: e.target.value })
}
/>
<input
placeholder="Price (KES)"
type="number"
className="border p-2 rounded"
value={form.price}
onChange={(e) =>
setForm({ ...form, price: e.target.value })
}
/>
<input
type="date"
className="border p-2 rounded"
value={form.expiry}
onChange={(e) =>
setForm({ ...form, expiry: e.target.value })
}
/>
</div>

<button
onClick={handleAddMedication}
className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-lg"
>
Add Medication
</button>
</div>

      
<div className="bg-white p-6 shadow rounded-xl mb-12">
<h2 className="text-lg font-semibold mb-4">
Medication Inventory
</h2>

{medications.length === 0 ? (
<p className="text-gray-500">No medications added yet.</p>
) : (
medications.map((m) => (
<div
key={m.id}
className="flex justify-between items-center border-b py-3 last:border-none"
>
<div>
<p className="font-semibold">{m.name}</p>
<p className="text-sm text-gray-600">
Qty: {m.quantity} | KES {m.price} | Exp: {m.expiry}
</p>
</div>

<button
onClick={() => removeMedication(m.id)}
className="text-red-600 text-sm">
Remove
</button>
</div>
))
)}
</div>

     
<div className="bg-white p-6 shadow rounded-xl">
<h2 className="text-lg font-semibold mb-4">
Orders & Approvals
</h2>

{orders.length === 0 ? (
<p className="text-gray-500">No orders placed yet.</p>
) : (
orders.map((o) => (
<div
key={o.id}
className="border-b py-4 last:border-none">
<p className="font-semibold">
Order #{o.id}
</p>
<p className="text-sm text-gray-600">
Placed by: <strong>{o.placedBy}</strong>
</p>
<p className="text-sm text-gray-600">
Role: {o.role}
</p>

<div className="mt-2">
<label className="text-sm mr-2 font-semibold">
Status:
</label>
<select
value={o.status}
onChange={(e) =>
updateStatus(o.id, e.target.value)
}
className="border p-1 rounded">
  <option>Pending</option>
  <option>Approved</option>
  <option>Dispatched</option>
  <option>Delivered</option>
</select>
</div>
</div>
))
)}
</div>
</DashboardLayout>
);
}
