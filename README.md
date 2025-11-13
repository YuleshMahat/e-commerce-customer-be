# E‑Commerce — Customer API (Node + Express + MongoDB)

Backend API for the customer application: products, auth, cart/checkout, Stripe payments, orders, and reviews.

## ✨ Features

- REST endpoints for catalog, auth, reviews
- Stripe **Payment Intent** creation
- Orders created only after a successful payment
- JWT-based auth
- CORS allow‑listing

## 🧱 Tech Stack

- **Node.js**, **Express**
- **MongoDB/Mongoose**
- **Dependencies**
  "@google-ai/generativelanguage": "^3.5.0",
  "@google/genai": "^1.27.0",
  "@google/generative-ai": "^0.24.1",
  "axios": "^1.12.2",
  "bcryptjs": "^3.0.2",
  "cors": "^2.8.5",
  "dotenv": "^17.2.2",
  "express": "^5.1.0",
  "fetch": "^1.1.0",
  "joi": "^18.0.1",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.18.1",
  "nodemailer": "^7.0.9",
  "openai": "^6.7.0",
  "slugify": "^1.6.6",
  "stripe": "^19.1.0",
  "uuid": "^13.0.0"

## 📂 Project Structure (typical)

```
src/
  config/
  controllers/
  middlewares/
  models/
  routes/
  utils/
  app.js / index.js
```

## ⚙️ Environment

**.env.example**

```
PORT=4001
MONGO_URI=mongodb+srv://...
JWT_ACCESS_SECRET=replace_me
JWT_REFRESH_SECRET=replace_me
CLIENT_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
STRIPE_SECRET_KEY=sk_test_replace_me
CLOUDINARY_URL=cloudinary://...
```

## ▶️ Getting Started

```bash
yarn install
yarn dev     # nodemon
```
