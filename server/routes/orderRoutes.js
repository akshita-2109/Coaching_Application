const express = require("express");
const router = express.Router();
const db = require("../models/db");

// POST order
router.post("/", (req, res) => {
  const { user_name, email, book_name, address } = req.body;

  const sql =
    "INSERT INTO orders (user_name, email, book_name, address) VALUES (?, ?, ?, ?)";

  db.query(sql, [user_name, email, book_name, address], (err, result) => {
    if (err) return res.status(500).json(err);

    // simulate email sending
    console.log(`Order confirmation email sent to ${email}`);

    res.json({ message: "Order placed successfully" });
  });
});

// GET all orders (for admin)
router.get("/", (req, res) => {
  db.query("SELECT * FROM orders", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

module.exports = router;