# E-Commerce Website - Frontend

A responsive e-commerce website built with React.js where users can browse products, view product details, create an account, log in, and manage their shopping cart.

## Live Demo

https://e-commerce-app-frontend-zeta-seven.vercel.app

## Features

* User signup and login
* JWT authentication
* Browse products
* Men's, Women's and Gadgets categories
* Product details
* Add to cart
* Remove from cart
* Cart quantity management
* User cart stored in MongoDB
* Responsive design
* Backend API integration

## Tech Stack

* React.js
* JavaScript
* React Router
* CSS
* Vite
* REST API
* JWT

## Installation

Clone the repository:

```bash
git clone https://github.com/koti-312/E-commerce-app.git
```

Go to the frontend folder:

```bash
cd E-commerce-app/frontend
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:4000/api
```

For the deployed backend:

```env
VITE_API_URL=https://e-commerce-app-backend-31uv.onrender.com/api
```

## Run Locally

Start the development server:

```bash
npm run dev
```

The frontend will run using the local Vite development URL.

## Project Structure

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── Component/
│   ├── Pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

## Backend

The frontend communicates with a separate Node.js and Express.js backend.

Backend API:

https://e-commerce-app-backend-31uv.onrender.com

## Deployment

Frontend deployed with Vercel.

Backend deployed with Render.

## Author

**Koteswar Singh**

GitHub: https://github.com/koti-312
