# 🔐 JWT, Cookies, and Encryption Concepts – Node.js Authentication Guide

This repository serves as a beginner-friendly guide and practice project for mastering key backend authentication concepts in Node.js. It focuses on:

- Setting and reading cookies
- Encrypting and comparing passwords with `bcrypt`
- Using JSON Web Tokens (JWT) for authentication and authorization

---

## 📚 Concepts Covered

### 1. 🍪 Working with Cookies  
**File:** `cookies.js`  
- How to **set cookies** in Express using `res.cookie()`
- How to **read cookies** from incoming requests using `cookie-parser`

---

### 2. 🔒 Password Encryption using `bcrypt`  
**Files:** `encrypt.js` and `decrypt.js`  
- How to **hash passwords** using `bcrypt.hash()`
- How to **verify passwords** using `bcrypt.compare()`

---

### 3. 🔐 JWT (JSON Web Tokens)  
**File(s):** Add your relevant JWT files here (e.g., `jwt.js`, `auth.js`, etc.)  
- How to **generate a token** using `jwt.sign()`
- How to **verify and decode** a token using `jwt.verify()`
- Where and how to **store tokens** (e.g., in cookies or headers)
- Key differences between **cookies**, **JWTs**, and **sessions**

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **bcrypt**
- **jsonwebtoken**
- **cookie-parser**

---

## 📁 Folder Structure (Example)

│
├── node_modules/ # Dependencies
├── .gitignore # Git ignore file
├── app.js # Main server file
├── aut.txt # (Text file - optional / notes)
├── cookies.js # Cookie handling logic
├── decrypt.js # Password comparison with bcrypt
├── encrypt.js # Password hashing with bcrypt
├── Jwt.js # JWT creation and verification
├── package.json # Project metadata and dependencies
└── package-lock.json # Package lock file
