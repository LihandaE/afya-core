import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
const [orders, setOrders] = useState([]);

const placeOrder = (items, user) => {
setOrders([...orders,
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
  };

const updateStatus = (id, status) =>
setOrders(
orders.map((o) =>o.id === id ? { ...o, status } : o
));

const markPaid = (id) =>
setOrders(
orders.map((o) =>
o.id === id ? { ...o, paymentStatus: "Paid" } : o
));

return (
<OrderContext.Provider
value={{ orders, placeOrder, updateStatus, markPaid }}>
{children}
</OrderContext.Provider>
);
}

export const useOrders = () => useContext(OrderContext);
