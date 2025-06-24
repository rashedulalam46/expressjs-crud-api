# 🛠️ Node.js Express CRUD API with JSON File Storage

This is a simple RESTful API built with **Node.js** and **Express.js**. It demonstrates basic CRUD operations (`GET`, `POST`, `PUT`, `DELETE`) using a **JSON file** for data storage.

---

## 📁 Project Structure
```bash
ExpressjsCrudApi/
│
├── controllers/
│ └── userController.js # Handles business logic
├── models/
│ └── userModel.js # (Reserved for future DB or schema)
├── routes/
│ └── userRoutes.js # Routes configuration
├── data/
│ └── users.json # JSON file to store user data
├── app.js # Entry point
├── package.json
└── README.md

```

## ⬇️ Clone the Repository

Open your terminal and run the following command:

```bash
git clone https://github.com/rashedulalam46/expressjs-crud-api.git
cd expressjs-crud-api.git
npm install
```

## ▶️ Run the Project

Open your terminal and run the following command:

```bash
node app.js
```

## The API will be running at:
📍 http://localhost:3000/api/users

## 🧪 Testing with Postman
You can use Postman or any REST client to test the endpoints. Make sure the server is running at http://localhost:3000.

## 📌 Notes
This project is ideal for learning purposes.

For production, consider using a database like MongoDB or PostgreSQL.

## 📄 License
This project is open-source and available under the MIT License.