# ShoppyGlobe Backend

Welcome to the backend of ShoppyGlobe E-Commerce platform designed to provide seamless shopping experiences. This backend handles user registration and login, product management, and cart operations, all powered by Node.js, Express, and MongoDB.

## GITHUB Link :

[https://github.com/Sonali-Nikki/ShoppyGlobe-Backend]

## Features

**User Authentication**: Secure user registration and login with password hashing.
**Product Management**: CRUD operations for products.
**Cart Management**: Add, update, and delete items from the cart.
**Middleware**: Centralized error handling, checking fields availability and authentication using JWT.
**Database**: MongoDB for data storage.


## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sonali-Nikki/ShoppyGlobe-Backend.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=3000
   DATABASE_NAME=<db_name>
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET_KEY=<your_secret_key>
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Users

| Method | Endpoint             | Description         |
| ------ | -----------------    | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login a user        |

### Products

| Method | Endpoint            | Description            |
| ------ | ---------------     | ---------------------- |
| GET    | `/api/products`     | Get all products       |
| GET    | `/api/products/:id` | Get a product by ID    |
| POST   | `/api/products`     | Add a new product      |
| PUT    | `/api/products/:id` | Update a product by ID |
| DELETE | `/api/products/:id` | Delete a product by ID |

### Cart

| Method     | Endpoint          | Description                               |
| ---------- | ----------------- | ----------------------------------------- |
| GET        | `/api/cart`       | Get all cart items for a user             |
| GET        | `/api/cart/:id`   | Get a cart items for a user               |
| POST       | `/api/cart`       | Add an item to the cart                   |
| PUT        | `/api/cart/:id`   | Update an item in the cart                |
| DELETE     | `/api/cart/:id`   | Remove an item from the cart              |



## Dependencies

- **Express**: Web framework
- **Mongoose**: MongoDB ODM
- **Bcrypt**: Password hashing
- **jsonwebtoken**: Token-based authentication
- **Dotenv**: Environment variable management

---

## Testing with ThunderClient
You can use ThunderClient or any other API testing tool to test the following API routes.

