import { useOrders } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { orders, markPaid } = useOrders();
  const navigate = useNavigate();

  const latestOrder = orders[orders.length - 1];

  const handlePay = () => {
    markPaid(latestOrder.id);
    navigate(`/${latestOrder.role}`);
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-white shadow rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        M-Pesa Payment
      </h2>

      <p className="text-gray-600 mb-4 text-center">
        Enter your phone number to receive STK Push
      </p>

      <input
        className="border p-3 w-full mb-4"
        placeholder="07XXXXXXXX"
      />

      <button
        onClick={handlePay}
        className="bg-green-600 text-white w-full py-3 rounded-lg"
      >
        Pay Now
      </button>
    </div>
  );
}
