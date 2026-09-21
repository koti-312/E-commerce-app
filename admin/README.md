# E-Commerce Website - Admin Panel

An admin panel built with React.js for managing products in the e-commerce application. Admins can add and remove products and upload product images.

## Features

* Admin product management
* Add new products
* Remove products
* Upload product images
* Cloudinary image integration
* Product listing
* Backend API integration
* Responsive admin interface

## Tech Stack

* React.js
* JavaScript
* CSS
* Vite
* REST API
* Cloudinary

## Installation

Clone the repository:

```bash
git clone https://github.com/koti-312/E-commerce-app.git
```

Go to the admin folder:

```bash
cd E-commerce-app/admin
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file inside the admin folder:

```env
VITE_API_URL=http://localhost:4000/api
```

For the deployed backend:

```env
VITE_API_URL=https://e-commerce-app-backend-31uv.onrender.com/api
```

## Run Locally

Start the admin panel:

```bash
npm run dev
```

The admin panel will run using the local Vite development URL.

## Project Structure

```text
admin/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

## Backend

The admin panel communicates with the Node.js and Express.js backend for product management.

Backend API:

https://e-commerce-app-backend-31uv.onrender.com

## Product Management

The admin panel communicates with the following product APIs:

```text
POST /api/products/addproduct
POST /api/products/removeproduct
GET  /api/products/allproducts
POST /api/products/upload
```

Product images are uploaded to Cloudinary through the backend.

## Deployment

Admin panel can be deployed separately using Vercel.

Backend is deployed using Render.

## Author

**Koteswar Singh**

GitHub: https://github.com/koti-312
