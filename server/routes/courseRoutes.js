const express = require("express");
const router = express.Router();
const db = require("../models/db");

// GET all courses
router.get("/", (req, res) => {
  db.query("SELECT * FROM courses", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ADD course
router.post("/", (req, res) => {
  const { title, description, price } = req.body;

  const sql = "INSERT INTO courses (title, description, price) VALUES (?, ?, ?)";
  db.query(sql, [title, description, price], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Course added successfully" });
  });
});

// DELETE course
router.delete("/:id", (req, res) => {
  const courseId = req.params.id;

  db.query("DELETE FROM courses WHERE id = ?", [courseId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Course deleted" });
  });
});

module.exports = router;