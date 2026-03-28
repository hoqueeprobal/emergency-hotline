# 🚨 Emergency Service Directory

A responsive and interactive web application that simulates an emergency service directory. Built using **HTML, CSS (Tailwind + DaisyUI) and JavaScript (ES6)**. This project allows users to quickly access emergency numbers, simulate calls, copy contact details and track user interactions.

## 🔗 Live Demo

Check out the live project here: [Emergency Service Directory](https://hoqueeprobal.github.io/emergency-hotline/)

---


## 🌟 Features

### 📞 Call System
- Simulates calling emergency services
- Each call costs **20 coins**
- Prevents calls if balance is insufficient

### 🪙 Coin Management
- Initial balance: **100 coins**
- Coins are deducted per call
- Click the **coin button** to add coins to your balance
- Coins spent on calls are refunded when the call history is cleared

### 📋 Copy to Clipboard
- Copy any service number instantly using the Clipboard API
- Tracks total copy actions
- Click the **copy button** to increase the copy count

### ❤️ Favorite Counter
- Click the **heart icons** on the cards to increase the favorite count
- Provides interactive UI feedback

### 🕒 Call History
- Logs every call with:
  - Service name
  - Phone number
  - Timestamp (real-time)
- Clear history option available

### 🧹 Clear History
- Removes all call records
- Restores all spent coins

---

## 🛠️ Tech Stack

- HTML5  
- Tailwind CSS  
- DaisyUI  
- JavaScript (ES6)  
- Font Awesome  

---

## 📂 Project Structure

```plaintext
emergency-hotline/
├── index.html         # Home page
├── js/
│   └── app.js         # JavaScript functionality
├── assets/            # Images and icons
└── README.md