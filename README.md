# 🛒 E-Commerce Website

A full-stack, responsive, and modern e-commerce web application built using **React.js (Frontend)**, **Node.js/Express.js (Backend)**, and **MySQL (Database)**. This project allows users to browse products, view details, register/login, and make purchases online. Ideal for selling skincare or any other physical products.

---

## 🚀 Features

### ✅ User Features
- User Registration and Login
- Secure authentication with JWT
- Browse products by category (Face, Hair, Body)
- View product details
- Responsive UI (mobile & desktop)

### ✅ Admin Features (extendable)
- Add, update, or delete products
- View customer orders (future scope)

---

## 🧱 Tech Stack

| Layer       | Technology              |
|------------|--------------------------|
| Frontend   | React.js, CSS, JSX       |
| Backend    | Node.js, Express.js      |
| Database   | MySQL                    |
| Auth       | JWT, bcrypt              |
| Hosting    | (Optional) Render, Vercel, Railway |

---

## 📂 Folder Structure

ECOMMERCE-APP/
│
├── backend/
│ ├── config/ # Database connection
│ ├── models/ # DB Models (User, Product)
│ ├── routes/ # API Routes
│ ├── controllers/ # Logic handlers
│ ├── middleware/ # JWT Auth
│ └── server.js # Main server file
│
├── frontend/
│ ├── public/ # Static files
│ ├── src/
│ │ ├── pages/ # React pages (Home, Login, Signup, Category)
│ │ ├── components/ # Navbar, ProductCard etc.
│ │ ├── App.js
│ │ └── index.js
│
└── README.md



---

## 🔧 Setup Instructions

### 🖥️ Backend (Node.js + MySQL)
1. Navigate to `backend/`:
   ```bash
   cd backend
Install dependencies:

npm install
Create .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=skincare_shop
JWT_SECRET=your_jwt_secret
Start the server:

node server.js
🌐 Frontend (React.js)
Navigate to frontend/:
cd frontend
Install dependencies:
npm install
Start the React app:
npm start

📌 Future Enhancements
Payment Gateway Integration (Razorpay/Stripe)

Admin Dashboard

Order Tracking System

Wishlist and Reviews

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


👤 Author
Shaik Fairoz


