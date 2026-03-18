const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    brand: {
      type: String,
      default: "Generic",
    },

    description: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
        required: true,
      },
    ],

    category: {
      type: String,
      required: true,
      // UPDATED: Added Fashion, Toys, and Sports
      enum: [
        "Electronics",
        "Fruits",
        "Vegetables",
        "Grocery",
        "Books",
        "Appliances",
        "Watches",
        "Drinks",
        "Fashion",
        "Toys",
        "Sports",
      ],
    },

    // NEW: Added sizes for Fashion/Sports items (e.g., ["S", "M", "L"] or ["6", "7", "8"])
    sizes: {
      type: [String],
      default: [],
    },

    // NEW: Added colors for Fashion items (e.g., ["Red", "Blue"])
    colors: {
      type: [String],
      default: [],
    },

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
    },

    discount: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      required: true,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
