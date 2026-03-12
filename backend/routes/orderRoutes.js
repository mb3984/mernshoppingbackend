const express = require("express");

const {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/my-orders", protect, getUserOrders);
router.put("/:id/status", protect, admin, updateOrderStatus);
router.get("/admin", protect, admin, getAllOrders);

module.exports = router;
