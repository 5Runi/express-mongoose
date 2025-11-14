# 🛒 Grocery Tracker API

A simple **Express + MongoDB (Mongoose)** backend that supports full CRUD (Create, Read, Update, Delete) operations for a grocery list.

This project is designed as a teaching demo for understanding the **request–response cycle**, **Express routes & controllers**, and **MongoDB data persistence**.  
You’ll be able to send HTTP requests (via Postman or Thunder Client) and watch your data change in a live MongoDB Atlas cluster!

---

## 🚀 Features

- Express REST API with modular routes and controllers  
- MongoDB Atlas connection using Mongoose  
- MVC-style structure with Models, Controllers, and Routes  
- Full CRUD support:
  - **GET**: Fetch all groceries
  - **POST**: Add a new grocery
  - **PUT**: Update an existing grocery
  - **DELETE**: Remove a grocery
- Error handling middleware  
- Environment variable configuration via `.env`

---

## 📁 Project Structure
express-mongoose/  

├── server.js  

├── package.json  

├── .env  

├── dbConfig/  

│ └── db.js  

├── models/  

│ └── groceryModel.js  

├── controllers/  

│ └── groceryController.js

## 🧑‍💻 Getting Started

### 1️⃣ Fork and Clone the Repo

2️⃣ Install Dependencies

Run this once to install all required packages:

npm install


This installs:

express

mongoose

dotenv

nodemon (for dev mode)

3️⃣ Set Up Environment Variables

Create a new file called .env in the project root:

touch .env

Then add the following lines (update with your own MongoDB Atlas credentials):

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/groceryDB?retryWrites=true&w=majority&appName=Cluster0  

PORT=3000

💡 Tips:

Replace <username> and <password> with your Atlas user credentials.

Make sure your Atlas IP whitelist includes your current IP or 0.0.0.0/0 for demo use.

If your password contains special characters (@, $, !, etc.), you must URL-encode
 them.

4️⃣ Start the Server

In development (auto-reloads on save):

npm run dev


In production mode:

npm start


If everything works, your terminal should show:

Server running on port 3000  

MongoDB Connected
