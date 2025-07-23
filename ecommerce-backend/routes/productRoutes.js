const express = require('express');
const router = express.Router();
const {
  getProductsByCategory,
  getProductById
} = require('../controllers/productController');

// ⚠️ Order matters: define more specific routes (like /category/:categoryId) first
router.get('/category/:categoryId', getProductsByCategory); // ✅
router.get('/:id', getProductById);                         // ✅

module.exports = router;
