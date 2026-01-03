import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const placeOrder = (items, user) => {
    if (!items || items.length === 0) {
      setMessage({
        type: "error",
        text: "Cannot place an order with an empty cart.",
      });
      return false;
    }

    setOrders((prev) => [
      ...prev,
      {
        id: Date.now(),
        items,
        placedBy: user.name || user.pharmacyName,
        role: user.role,
        status: "Pending",
        paymentStatus: "Unpaid",
        date: new Date().toLocaleString(),
      },
    ]);

    setMessage({
      type: "success",
      text: "Order placed successfully. Awaiting admin approval.",
    });

    return true;
  };

  const updateStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, status } : o
      )
    );

    setMessage({
      type: "success",
      text: `Order status updated to ${status}.`,
    });
  };

  const markPaid = (id) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, paymentStatus: "Paid" } : o
      )
    );

    setMessage({
      type: "success",
      text: "Payment marked as successful.",
    });
  };

  const clearMessage = () => {
    setMessage({ type: "", text: "" });
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        placeOrder,
        updateStatus,
        markPaid,
        message,
        clearMessage,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => useContext(OrderContext);
