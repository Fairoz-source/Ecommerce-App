const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("skincare_shop", "fairoz", "fairoz1234", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Set to true if you want to debug queries
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection error:", err));

module.exports = sequelize;
