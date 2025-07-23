// controllers/productController.js
const Product = require('../models/Product');

exports.getProductsByCategory = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId); // Correct param name
    if (!categoryId) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const products = await Product.findAll({
      where: { category_id: categoryId },
    });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
