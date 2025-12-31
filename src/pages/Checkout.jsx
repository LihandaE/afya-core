import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { user } = useAuth();
  const navigate = useNavigate();

  const total = cart.reduce((s, i) => s + Number(i.price || 0), 0);

  const handleCheckout = () => {
    placeOrder(cart, user);
    clearCart();
    navigate("/payment");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>{item.name}</span>
          <span>KES {item.price}</span>
        </div>
      ))}

      <div className="font-bold mt-4">Total: KES {total}</div>

      <button
        onClick={handleCheckout}
        className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg"
      >
        Proceed to Payment
      </button>
    </div>
  );
}
