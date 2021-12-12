const express = require("express");
const router = express.Router();
const db = require("./db/connection");
const inputCheck = require("../../utils/inputCheck");

// Get all employees and their employee id
router.get("/employee", (req, res) => {
  // Add relevant SQL command between the template literals
  const sql = ``;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

// Get a single employee with their employee id
router.get("/employee/:id", (req, res) => {
  const sql = ``;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Create an employee
router.post("/employee", ({ body }, res) => {
  const errors = inputCheck(body, "first_name", "last_name");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = ``;
  const params = [body.first_name, body.last_name];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
});

// Update an employee's role
router.put("/employee.:id", (req, res) => {
  const errors = inputCheck(req.body, "role_id");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = ``;
  const params = [req.body.role_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Candidate not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectdRows,
      });
    }
  });
});

module.exports = router;
