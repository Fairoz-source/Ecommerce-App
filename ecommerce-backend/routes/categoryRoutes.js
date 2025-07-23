const express = require("express");
const { getCategories, getProductsByCategory } = require("../controllers/categoryController");

const router = express.Router();

// Route to get all categories
router.get("/", getCategories);

// Route to get products by category ID
router.get("/:category_id/products", getProductsByCategory);

module.exports = router;
