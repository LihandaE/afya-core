import DashboardLayout from "../components/DashboardLayout";
import { useMedication } from "../context/MedicationContext";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export default function CustomerDashboard() {
  const { medications } = useMedication();
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const { placeOrder, message, clearMessage } = useOrders();
  const { user } = useAuth();

  const MAX_ITEMS = 5;
  const [localMessage, setLocalMessage] = useState("");

  const handleAdd = (med) => {
    if (cart.length >= MAX_ITEMS) {
      setLocalMessage(
        "You can only order a maximum of 5 medications per order."
      );
      return;
    }
    addToCart(med);
  };

  const handlePlaceOrder = () => {
    const success = placeOrder(cart, user);
    if (success) clearCart();
  };

  // Auto-clear messages
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(clearMessage, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  useEffect(() => {
    if (localMessage) {
      const timer = setTimeout(() => setLocalMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [localMessage]);

  return (
    <DashboardLayout title="Patient Dashboard">
      {/* ORDER MESSAGE */}
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

      {/* LOCAL RULE MESSAGE */}
      {localMessage && (
        <div className="mb-6 rounded-lg p-3 text-sm bg-red-100 text-red-700">
          {localMessage}
        </div>
      )}

      {/* PATIENT INFO */}
      <div className="bg-white shadow rounded-xl p-6 mb-10">
        <p className="font-semibold">{user.name}</p>
        <p className="text-sm text-gray-600">
          {user.age} yrs • {user.location}
        </p>
      </div>

      {/* MEDICATIONS */}
      <div className="bg-white shadow rounded-xl p-6 mb-10">
        <h2 className="text-lg font-semibold mb-4">
          Available Medications
        </h2>

        {medications.map((m) => (
          <div
            key={m.id}
            className="flex justify-between border-b py-3"
          >
            <span>{m.name}</span>
            <button
              onClick={() => handleAdd(m)}
              className="bg-teal-600 text-white px-4 py-1 rounded"
            >
              Add
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">
          My Cart ({cart.length}/{MAX_ITEMS})
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
