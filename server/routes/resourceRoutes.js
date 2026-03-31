const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../models/db");

// storage config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// UPLOAD FILE
router.post("/", upload.single("file"), (req, res) => {
  const { title, type } = req.body;
  const filePath = req.file.filename;

  const sql =
    "INSERT INTO resources (title, file_path, type) VALUES (?, ?, ?)";

  db.query(sql, [title, filePath, type], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "File uploaded successfully" });
  });
});

// GET FILES
router.get("/", (req, res) => {
  db.query("SELECT * FROM resources", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

module.exports = router;