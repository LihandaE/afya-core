import DashboardLayout from "../components/DashboardLayout";
import { useMedication } from "../context/MedicationContext";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useAuth } from "../context/AuthContext";

export default function RetailDashboard() {
  const { medications } = useMedication();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { user } = useAuth();

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    placeOrder(cart, {
      role: "retail",
      name: user.pharmacyName,
    });

    clearCart();
    alert("Order placed successfully. Awaiting admin approval.");
  };

return (
<DashboardLayout title="Retail Pharmacy Dashboard">
      
<div className="bg-white shadow rounded-xl p-6 mb-10">
<h2 className="text-lg font-semibold mb-2 text-blue-800">
Signed in as
</h2>
<p className="text-gray-700 font-semibold">
{user.pharmacyName}
</p>
<p className="text-sm text-gray-600">
PPB Licence: {user.ppbLicence}
</p>
<p className="text-sm text-gray-600">
Location: {user.location}
</p>
</div>

   
<div className="bg-white shadow rounded-xl p-6 mb-12">
<h2 className="text-xl font-semibold mb-6 text-blue-800">
Available Medications
</h2>

{medications.length === 0 ? (
<p className="text-gray-500">
No medications available at the moment.
</p>
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
onClick={() => addToCart(m)}
className="bg-teal-600 text-white px-4 py-1 rounded-lg hover:bg-teal-700"
>
Add to Cart
</button>
</div>
))
)}
</div>

      
<div className="bg-white shadow rounded-xl p-6">
<h2 className="text-xl font-semibold mb-6 text-blue-800">
My Cart
</h2>

{cart.length === 0 ? (
<p className="text-gray-500">Your cart is empty.</p>
) : (
<>
{cart.map((item) => (
<div
key={item.id}
className="flex justify-between items-center border-b py-3 last:border-none"
>
<span>{item.name}</span>
<button
onClick={() => removeFromCart(item.id)}
className="text-red-600 text-sm">
Remove
</button>
</div>
))}

<button
onClick={handlePlaceOrder}
className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800"
>
Place Order
</button>
</>
)}
</div>
</DashboardLayout>
);
}
