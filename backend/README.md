# E-Commerce Website - Backend

A REST API backend for an e-commerce website built with Node.js, Express.js, and MongoDB. It handles user authentication, product management, image uploads, and shopping cart operations.

## Backend API

https://e-commerce-app-backend-31uv.onrender.com

## Features

* User signup and login
* JWT authentication
* Product management
* Add products
* Remove products
* Fetch all products
* Fetch popular products
* Product image uploads
* Cloudinary image storage
* Add products to cart
* Remove products from cart
* User cart stored in MongoDB
* MongoDB database integration
* MVC architecture

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Cloudinary
* Multer
* REST API

## Installation

Clone the repository:

```bash id="3hz6ax"
git clone https://github.com/koti-312/E-commerce-app.git
```

Go to the backend folder:

```bash id="5z2p9s"
cd E-commerce-app/backend
```

Install dependencies:

```bash id="qmj2kp"
npm install
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env id="j37i4b"
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Cloud_name=your_cloudinary_cloud_name
Cloud_API_KEY=your_cloudinary_api_key
Cloud_API_SECRET=your_cloudinary_api_secret
```

## Run Locally

Start the backend server:

```bash id="7x6jzq"
npm run dev
```

The backend runs on:

```text id="u0a6zq"
http://localhost:4000
```

## API Routes

### Authentication

```text id="8twqz5"
POST /api/users/signup
POST /api/users/login
```

### Products

```text id="wq3h8e"
POST /api/products/addproduct
POST /api/products/removeproduct
GET  /api/products/allproducts
GET  /api/products/popular
POST /api/products/upload
```

### Cart

```text id="5c7q1r"
POST /api/cart/addtocart
POST /api/cart/removefromcart
```

## Project Structure

```text id="z8d1fy"
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── seed/
├── .env
├── server.js
├── package.json
└── README.md
```

## Database

MongoDB is used to store:

* Users
* Products
* Cart data

Each user's cart is stored inside their user document using `cartData`.

## Image Storage

Product images are uploaded to Cloudinary using Multer and Cloudinary Storage.

## Deployment

Backend deployed with Render.

API:

https://e-commerce-app-backend-31uv.onrender.com

## Author

**Koteswar Singh**

GitHub: https://github.com/koti-312
