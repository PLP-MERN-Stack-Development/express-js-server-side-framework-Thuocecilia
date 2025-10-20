# 🧠 Express.js Server-Side Framework – Assignment

**Name:** Cecilia Thuo  
**Course:** Backend Development (Presidential Leadership Program – PLP)  
**Module:** Week 2 – Server-Side Frameworks (Express.js)  
**Project Title:** RESTful Product Management API  
**Date:** October 2025  

---

## 📖 Project Description
This project demonstrates how to build a RESTful API using Express.js, a powerful Node.js framework for server-side development.  
It covers CRUD operations, middleware, authentication, error handling, and environment configuration.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Project
```bash
git clone https://github.com/<your-username>/express-js-server-side-framework-Thuocecilia.git
cd express-js-server-side-framework-Thuocecilia

2️⃣ Install Dependencies
npm install express dotenv uuid body-parser

3️⃣ Create .env File
PORT=3000
API_KEY=mysecretkey123

4️⃣ Start the Server
node server.js


Visit http://localhost:3000/api/products

You should see your API running 🎉

📂 Folder Structure
express-js-server-side-framework-Thuocecilia/
│
├── server.js
├── .env
├── package.json
├── README_Assignment.md
│
├── routes/
│   └── productRoutes.js
│
├── middleware/
│   ├── logger.js
│   ├── auth.js
│   ├── validateProduct.js
│   └── errorHandler.js
│
└── controllers/
    └── productController.js

🔗 API Endpoints
Method	Endpoint	Description	Auth
GET	/api/products	Get all products	❌
GET	/api/products/:id	Get single product	❌
POST	/api/products	Create new product	✅
PUT	/api/products/:id	Update product	✅
DELETE	/api/products/:id	Delete product	✅
🧩 Middleware Summary
Middleware	Function
logger.js	Logs incoming requests
auth.js	Validates API key
validateProduct.js	Validates product input fields
errorHandler.js	Handles and formats errors
🧪 Testing (Postman)
Example Product JSON
{
  "name": "Wireless Headphones",
  "description": "Noise-cancelling headphones",
  "price": 2500,
  "category": "Electronics",
  "inStock": true
}

POST /api/products

Headers:

x-api-key: mysecretkey123
Content-Type: application/json


Response:

{
  "id": "auto-generated-id",
  "name": "Wireless Headphones",
  "description": "Noise-cancelling headphones",
  "price": 2500,
  "category": "Electronics",
  "inStock": true
}

🎓 Conclusion

This assignment demonstrates my understanding of Express.js fundamentals — including routing, middleware, and API handling — forming the foundation for backend development using Node.js.