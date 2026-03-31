import { useState } from "react";
import API from "../api/axios";

const BookStore = () => {
  const [form, setForm] = useState({
    user_name: "",
    email: "",
    book_name: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/orders", form)
      .then(() => {
        alert("Order placed successfully!");
        setForm({ user_name: "", email: "", book_name: "", address: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Book Purchase</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={form.user_name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="book_name"
          placeholder="Book Name"
          value={form.book_name}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 w-full"
        ></textarea>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default BookStore;