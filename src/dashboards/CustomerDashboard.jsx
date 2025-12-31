import DashboardLayout from "../components/DashboardLayout";
import { useMedication } from "../context/MedicationContext";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useAuth } from "../context/AuthContext";

export default function CustomerDashboard() {
  const { medications } = useMedication();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { user } = useAuth();

  const MAX_ITEMS = 5;

  const handleAddToCart = (med) => {
    if (cart.length >= MAX_ITEMS) {
      alert("You can only order a maximum of 5 medications at a time.");
      return;
    }
    addToCart(med);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    placeOrder(cart, {
      role: "customer",
      name: user.name,
    });

    clearCart();
    alert("Order placed successfully. Awaiting admin approval.");
  };

return (
  <DashboardLayout title="Patient Dashboard">
     
  <div className="bg-white shadow rounded-xl p-6 mb-10">
  <h2 className="text-lg font-semibold mb-2 text-blue-800">
  Patient Details
  </h2>
  <p className="font-semibold text-gray-800">
  {user.name}
  </p>
  <p className="text-sm text-gray-600">
  Age: {user.age}
  </p>
  <p className="text-sm text-gray-600">
  Contact: {user.contact}
  </p>
  <p className="text-sm text-gray-600">
  Location: {user.location}
  </p>
  <p className="text-sm text-teal-600 mt-2">
  Prescription uploaded ✔
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
  KES {m.price} | Exp: {m.expiry}
  </p>
  </div>

  <button
  onClick={() => handleAddToCart(m)}
  className="bg-teal-600 text-white px-4 py-1 rounded-lg hover:bg-teal-700"
  >
  Add
  </button>
  </div>
  ))
  )}
  </div>

      
  <div className="bg-white shadow rounded-xl p-6">
  <h2 className="text-xl font-semibold mb-4 text-blue-800">
  My Cart ({cart.length}/{MAX_ITEMS})
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
  className="text-red-600 text-sm"
  >
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
