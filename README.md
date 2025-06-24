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


📮 API Endpoints (CRUD)

GET /api/users

🔹 Fetch all users

🔸 Body Example:

```bash
[
    {
        "id": "2001",
        "name": "Alice",
        "email": "alice@example.com"
    },
    {
        "id": "2002",
        "name": "Bob",
        "email": "bob@example.com"
    },
    {
        "id": "2003",
        "name": "Mr. Kevin",
        "email": "kevin@example.com"
    },
    {
        "id": "2004",
        "name": "Cody",
        "email": "cody@example.com"
    }
]
```

POST /api/users

🔹 Create a new user

🔸 Body Example:

```bash
{
  "id": "2004"
  "name": "Bob",
  "email": "bob@example.com"
}
```

PUT /api/users/:id

🔹 Update an existing user by ID

🔸 Body Example:

```bash
{
  "name": "Bob Updated",
  "email": "bob.updated@example.com"
}
```

DELETE /api/users/:id

🔹 Delete a user by ID

## 📌 Notes
This project is ideal for learning purposes.

For production, consider using a database like MongoDB or PostgreSQL.

## 🤝 Contributing
Pull requests are welcome! If you find bugs or have suggestions, feel free to open an issue.

## 📄 License
This project is licensed under the MIT License.

## 👤 Author
[Rashedul Alam](https://github.com/rashedulalam46)
