# 🛒 ShopVerse (Backend API)

The robust server-side infrastructure for **ShopVerse**, a premium MERN-stack e-commerce platform. This API handles secure authentication, complex product management, and real-time order processing with a focus on scalability and role-based security.

## 🚀 Live API

**Base URL:** `https://mernshoppingbackend-ygpp.onrender.com`  
**API Documentation:** `https://mernshoppingbackend-ygpp.onrender.com/api`

---

## ✨ Key Features

### 🔐 Security & Authentication

- **JWT Authentication:** Secure user sessions using JSON Web Tokens.
- **Password Encryption:** Industry-standard hashing using `bcryptjs` to protect user data.
- **Role-Based Access Control (RBAC):** Middleware-level protection to separate Admin capabilities from standard User access.

### 📦 Product & Inventory Management

- **Full CRUD API:** Comprehensive endpoints to Create, Read, Update, and Delete products.
- **Stock Tracking:** Backend logic to monitor inventory levels and flag low stock.
- **Categorization:** Support for dynamic filtering by category (Grocery, Electronics, etc.) and price sorting.

### 🛍️ Order & Transaction System

- **Order Processing:** Automated generation of order IDs and timestamps.
- **User Order History:** Persistent storage of purchase history for every registered user.
- **Admin Oversight:** Dedicated dashboard endpoints to monitor all customer orders and update delivery statuses.

---

## 🛠️ Tech Stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Atlas)
- **Object Modeling:** Mongoose
- **Auth Strategy:** JWT (JSON Web Tokens)
- **Deployment:** Render

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [your-backend-repo-link]
   cd [your-folder-name]
   ```

Install dependencies:

Bash
npm install
Environment Variables:
Create a .env file in the root directory and add your credentials:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key
Run the application:

Bash

# For production

npm start

# For development (with nodemon)

npm run dev
📂 Project Structure
src/models/ - Mongoose schemas for Users, Products, and Orders.

src/routes/ - Express route definitions for Auth, Products, and Orders.

src/controllers/ - Logical functions handling the request-response cycle.

src/middleware/ - Authentication checks and Admin verification logic.
