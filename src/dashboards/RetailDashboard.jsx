import DashboardLayout from "../components/DashboardLayout";
import { useMedication } from "../context/MedicationContext";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function RetailDashboard() {
  const { medications } = useMedication();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const { placeOrder, message, clearMessage } = useOrders();
  const { user } = useAuth();

const handlePlaceOrder = () => {
const success = placeOrder(cart, user);
if (success) clearCart();
};

 
useEffect(() => {
    if (message.text) {
      const timer = setTimeout(clearMessage, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  return (
<DashboardLayout title="Retail Pharmacy Dashboard">
     
{message.text && (
<div
className={`mb-6 rounded-lg p-3 text-sm ${
message.type === "error"
? "bg-red-100 text-red-700"
: "bg-green-100 text-green-700"
}`}
>
{message.text}
</div>
)}

     
<div className="bg-white shadow rounded-xl p-6 mb-10">
<p className="font-semibold">{user.pharmacyName}</p>
<p className="text-sm text-gray-600">
PPB: {user.ppbLicence} • {user.location}
</p>
</div>

     
<div className="bg-white shadow rounded-xl p-6 mb-10">
<h2 className="text-lg font-semibold mb-4">
Available Medications
</h2>

{medications.map((m) => (
<div
key={m.id}
className="flex justify-between border-b py-3"
>
<div>
<p className="font-semibold">{m.name}</p>
<p className="text-sm text-gray-600">
KES {m.price} | Qty {m.quantity}
</p>
</div>
<button
onClick={() => addToCart(m)}
className="bg-teal-600 text-white px-4 py-1 rounded"
>
Add
</button>
</div>
))}
</div>

     
<div className="bg-white shadow rounded-xl p-6">
<h2 className="text-lg font-semibold mb-4">
My Cart
</h2>

{cart.length === 0 ? (
<p className="text-gray-500">Cart is empty.</p>
) : (
<>
{cart.map((item) => (
<div
key={item.id}
className="flex justify-between border-b py-2"
>
<span>{item.name}</span>
<button
onClick={() => removeFromCart(item.id)}
className="text-red-600 text-sm"
>
Remove
</button>
</div>
))}

<button
onClick={handlePlaceOrder}
className="mt-6 bg-blue-700 text-white px-6 py-2 rounded"
>
Place Order
</button>
</>
)}
</div>
</DashboardLayout>
  );
}