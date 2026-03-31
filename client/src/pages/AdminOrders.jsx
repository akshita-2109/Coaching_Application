import { useEffect, useState } from "react";
import API from "../api/axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">All Book Orders</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {orders.map((o) => (
          <div key={o.id} className="border p-4 rounded">
            <h3 className="font-bold">{o.book_name}</h3>
            <p>Name: {o.user_name}</p>
            <p>Email: {o.email}</p>
            <p>Address: {o.address}</p>
            <p>Status: {o.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;