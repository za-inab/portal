# 🔐 Auth Starter (React + Vite + TypeScript + Node.js + Express + MongoDB)

A **full-stack authentication starter kit** with a ready to use backend and frontend.  
This project saves you from writing authentication from scratch every time, just clone/fork it, add your own features, and start building!

---

## 🚀 Features

- **Frontend (React + Vite + TypeScript)**
  - User registration form
  - User login form
  - Email verification (OTP)
  - Password reset (via OTP)
  - - `.env` support for url config

- **Backend (Node.js + Express + MongoDB)**
  - User schema in MongoDB
  - User registration & login APIs
  - Password hashing with **bcrypt**
  - JWT-based authentication
  - Email verification with OTP
  - Password reset flow with OTP
  - `.env` support for sensitive configuration

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, TypeScript
- **Backend:** Node.js, Express.js 
- **Database:** MongoDB  
- **Authentication:** JWT, bcrypt, OTP verification  
- **Emailing:**  Nodemailer and (any) SMTP provider
- **Styling/UI:** TailwindCSS, react-toastify
- **Context:** Context API
- **Network Requests:** Axios

---

## 📂 Project Structure

```
project-root/
│── Client/        # React + Vite + TS (frontend)
│── Server/        # Node.js + Express (backend)
│── .env           # Environment variables for BE
│── package.json
│── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```
git clone https://github.com/za-inab/portal.git
cd portal
```


### 2. Setup Backend
```
npm install
```

Create a `.env` file inside `portal/`:
```
PORT=5000
DB_URI=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/your-db
DB_USER=yourUser
DB_PASSWORD=yourPassword
JWT_SECRET=yourSuperSecretKey
EMAIL_USER=yourEmail@example.com
EMAIL_PASS=yourEmailPassword
NODE_ENV=yourEnvironment
```

Run the server:
```
npm run dev
```

### 3. Setup Frontend
```
cd Client
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port).  
The backend will run on `http://localhost:5000` (or your configured port).

---

## 🔑 Usage

- **Register** → Creates a new user & sends OTP verification email.  
- **Login** → Authenticates user & stores JWT in cookies/session storage.  
- **Email Verification** → Verifies OTP for new accounts.  
- **Password Reset** → Sends OTP to email for password recovery.  

---

## 🧩 Why Use This?

- Saves time setting up **basic authentication boilerplate**.  
- Clean separation of **frontend** and **backend**.  
- Secure defaults: **bcrypt**, **JWT**, **OTP**, `.env`.  
- Perfect starter for SaaS apps, dashboards, or any full-stack project.  

---

## 📌 Roadmap / Possible Extensions

- Add OAuth (Google/GitHub login)  
- Add role-based authorization  
- Add refresh tokens & token rotation  
- Add tests (Jest / Vitest)  
- Dockerize for easier deployment  

---

## 🤝 Contributing

Feel free to fork, clone, and improve this starter!  
Pull requests are welcome.

---

## 📜 License

MIT License © 2025 Zainab Asif
