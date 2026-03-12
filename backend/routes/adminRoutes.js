const express = require("express");
const router = express.Router();
const { getDashboardStats } = require("../controllers/adminController");
const { protect, admin } = require("../middleware/authMiddleware");

// This matches the frontend call: GET /api/admin/dashboard
router.get("/dashboard", protect, admin, getDashboardStats);

module.exports = router;
