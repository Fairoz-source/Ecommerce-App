const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser"); // Ensure this is installed
const productRoutes = require('./routes/productRoutes');

// Import routes
const authRoutes = require("./routes/authRoutes"); // Correct path to the routes folder
 // Correct path to the product routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // Enable JSON parsing

// Route handling
app.use("/api/auth", authRoutes); // Handles authentication-related routes
app.use("/api/products", productRoutes); // Handles product-related routes

// Serve static images
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
