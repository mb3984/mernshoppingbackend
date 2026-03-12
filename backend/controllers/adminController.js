const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const User = require("../models/userModel"); // Make sure you have a User model

const getDashboardStats = async (req, res) => {
  try {
    const productsCount = await Product.countDocuments();
    const ordersCount = await Order.countDocuments();
    const usersCount = await User.countDocuments({ role: "user" });

    // Calculate total revenue from all orders
    const revenueData = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
    ]);

    const revenue = revenueData.length > 0 ? revenueData[0].totalRevenue : 0;

    res.status(200).json({
      products: productsCount,
      orders: ordersCount,
      revenue: revenue,
      users: usersCount,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch stats", error: error.message });
  }
};

module.exports = { getDashboardStats };
