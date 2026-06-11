# 🛍️ Elora Store — Modern Clothing E-Commerce Platform

> A full-stack clothing e-commerce web application built with a clean **Client–Server (MVC)** architecture. Elora Store delivers a seamless shopping experience for customers alongside a powerful admin panel for store management — designed to be scalable, maintainable, and production-ready.

---

## 🏅 Badges

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SCSS](https://img.shields.io/badge/SCSS-Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r180-000000?style=for-the-badge&logo=three.js&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

---

## ✨ Features

### 🛒 Customer (Storefront)
- **Home Page** — Featured products, categories, promotions, and best-sellers showcase.
- **Shop Page** — Browse all items with filters by category, price range, new arrivals (`/shop/new_arrival`), and sale items (`/shop/sale`).
- **Product Detail Page** — Rich product descriptions, images, selectable size & color variations, stock status, and sale price display.
- **Shopping Cart** — Add, update quantity, and remove items; real-time total calculation.
- **Checkout Flow** — Collect shipping information, select payment method, and confirm orders.
- **User Account** — Full account management: profile editing, saved shipping addresses (add/delete), and tabbed order history tracking.
- **Authentication** — Secure JWT-based login and sign-up with HTTP-only cookie storage and bcrypt password hashing.
- **3D Product Viewer** — Interactive Three.js / React Three Fiber integration for immersive product previews.
- **Product Search** — Full-text search endpoint (`/products/search?q=`) for quick product discovery.

### 🔧 Admin Panel (`/admin`)
- **Dashboard** — High-level overview of store activity, revenue, and order statistics.
- **Product Management** — Create and manage products with image uploads (Multer), sale pricing, tags, categories, stock, and slug auto-generation.
- **User Management** — Search and manage customer accounts with avatar upload support.
- **Order Management** — View all orders, filter by latest, modify order status.
- **Best-Seller Tracking** — Auto-computed best-seller products based on `sold` count.

### 🔒 Security & Reliability
- **Helmet** — Security headers applied to all responses.
- **Rate Limiting** — 200 requests per 15-minute window via `express-rate-limit`.
- **CORS** — Configured cross-origin resource sharing.
- **Morgan** — HTTP request logging in development.
- **Database Seeding** — `npm run seed` script for rapid initial data population.

---

## 🧰 Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Frontend** | React | 19.x |
| **Frontend Routing** | React Router DOM | 7.x |
| **3D Rendering** | Three.js + React Three Fiber | r180 / 9.x |
| **Styling** | SCSS (Sass) | 1.x |
| **Backend** | Node.js + Express | 18+ / 5.x |
| **Database** | MongoDB + Mongoose | 8.x |
| **Auth** | JSON Web Token (JWT) + bcrypt | 9.x / 5.x |
| **File Upload** | Multer | 2.x |
| **Template Engine** | Handlebars (HBS) | 4.x |
| **Security** | Helmet + express-rate-limit | 7.x / 6.x |
| **Dev Tools** | Nodemon + Concurrently + Morgan | Latest |

---

## 📋 Prerequisites

Make sure the following are installed on your machine before proceeding:

| Tool | Version |
|---|---|
| **Node.js** | `v18.0.0` or higher |
| **npm** | `v9.0.0` or higher |
| **MongoDB** | Local instance **or** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster |
| **Git** | Any modern version |

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ZzzNTKzzZ/EloraStore.git
cd EloraStore
```

### 2. Configure Environment Variables

Create a `.env` file inside the `server/` directory:

```bash
# server/.env
PORT=5000
URL=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key_here
```

> **Tip:** For MongoDB Atlas, your `URL` will look like:
> `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/elorastore`

### 3. Install Dependencies

**Root (concurrently runner):**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
cd ..
```

**Frontend:**
```bash
cd client
npm install
cd ..
```

### 4. Seed the Database *(Optional but Recommended)*

Populate the database with sample products and users:

```bash
cd server
npm run seed
cd ..
```

---

## 💻 Running the Application

### Development Mode

Run both frontend and backend simultaneously from the project root:

```bash
npm run dev
```

This uses `concurrently` to start both servers at once:

| Service | URL |
|---|---|
| 🖥️ Frontend (React) | http://localhost:3000 |
| ⚙️ Backend (Express) | http://localhost:5000 |

### Run Services Individually

**Backend only:**
```bash
npm run server
# or: cd server && npm start
```

**Frontend only:**
```bash
npm run client
# or: cd client && npm start
```

### Production Build

Build the React client for production:

```bash
cd client
npm run build
```

The optimized static files will be output to `client/build/`.

---

## 📡 API Reference

Base URL: `http://localhost:5000`

### Products

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/products` | Get all products |
| `GET` | `/products/bestSeller` | Get best-selling products |
| `GET` | `/products/tag/:tag` | Filter products by tag |
| `GET` | `/products/search?q=` | Search products by keyword |
| `GET` | `/products/:slug` | Get a single product by slug |
| `POST` | `/products/add` | Create a new product *(with image upload)* |

### Users & Auth

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/users/login` | Authenticate a user, returns JWT cookie |
| `POST` | `/users/signUp` | Register a new user |
| `GET` | `/users/:id` | Get a user by ID |
| `PATCH` | `/users/edit/:id` | Update profile *(with avatar upload)* |
| `POST` | `/users/edit/address/:id` | Add a new shipping address |
| `DELETE` | `/users/delete/address/:id` | Remove a shipping address |

### Cart

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/cart/:cartId` | Get cart contents |
| `POST` | `/cart/:cartId/items` | Add an item to the cart |
| `PATCH` | `/cart/:cartId/items` | Update item quantity |
| `DELETE` | `/cart/:cartId/items` | Remove an item from the cart |

### Orders

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/orders` | Get all orders *(admin)* |
| `GET` | `/orders/latest` | Get latest orders |
| `GET` | `/orders/user/:userId` | Get orders for a specific user |
| `GET` | `/orders/:id` | Get order by ID |
| `POST` | `/orders/:userId/create` | Create a new order |
| `PUT` | `/orders/modify/:orderId` | Update order status |

---

## 🖼️ Application Pages

| Route | Page |
|---|---|
| `/` | 🏠 Home — Hero section, featured products, promotions |
| `/shop` | 🛍️ Shop — Full catalog with filters |
| `/shop/new_arrival` | 🆕 New Arrivals |
| `/shop/sale` | 🏷️ Sale Items |
| `/shop/products/:slug` | 📦 Product Detail |
| `/cart` | 🛒 Shopping Cart |
| `/checkout` | 💳 Checkout |
| `/account/profile` | 👤 Profile Management |
| `/account/address` | 📍 Shipping Addresses |
| `/account/order/:tabPath` | 📋 Order History |
| `/login` | 🔑 Login / Register |
| `/admin/dashboard` | 📊 Admin Dashboard |
| `/admin/product` | 🗂️ Admin Product Management |
| `/admin/user` | 👥 Admin User Management |
| `/admin/order` | 📦 Admin Order Management |

---

## 📁 Project Structure

```
EloraStore/
├── client/                   # React frontend
│   └── src/
│       ├── Api/              # Axios/fetch API service layer
│       ├── Components/       # Reusable UI components (Navigation, Footer, ...)
│       ├── Hook/             # Custom React Context hooks (User, Cart, CheckOut)
│       ├── Page/             # Route-level page components
│       │   ├── Home/
│       │   ├── Shop/
│       │   ├── ProductDetail/
│       │   ├── Cart/
│       │   ├── CheckOut/
│       │   ├── Account/
│       │   ├── Login/
│       │   └── Admin/
│       ├── Styles/           # SCSS global styles and partials
│       └── App.jsx           # Root router configuration
│
└── server/                   # Node.js + Express backend
    ├── Controllers/          # Business logic (User, Product, Cart, Order, ...)
    ├── Model/                # Mongoose schemas (User, Product, Cart, Order, ...)
    ├── Routes/               # Express route definitions
    ├── seed/                 # Database seeding scripts
    ├── views/                # Handlebars templates (HBS)
    ├── db.js                 # MongoDB connection
    └── index.js              # Express app entry point
```

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">
  <p>Made with ❤️ by <strong>ZzzNTKzzZ</strong></p>
  <p>
    <a href="https://github.com/ZzzNTKzzZ/EloraStore">⭐ Star this repo</a> if you found it helpful!
  </p>
</div>

