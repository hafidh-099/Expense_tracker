# Expense Tracker

A full-stack web-based Expense Tracker application that helps users manage their finances by tracking income and expenses, organizing transactions into categories, and visualizing financial data through interactive charts.

---

## Features

* User authentication using JWT
* Secure password hashing with bcrypt
* Create and manage income & expense transactions
* Create custom categories
* Financial overview dashboard
* Expense and income visualization using doughnut charts
* Responsive UI with Tailwind CSS
* State management with Redux
* Server state management with TanStack Query
* Form validation using Yup
* RESTful API architecture
* Monorepo project structure

---

## Tech Stack

### Frontend

* React
* Redux
* TanStack Query
* Tailwind CSS
* Yup
* Chart.js

### Backend

* Node.js
* Express.js
* MySQL
* Sequelize ORM
* JWT Authentication
* bcrypt

---

## Project Structure

```bash
expense-tracker/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone <your-repository-url>
cd expense-tracker
```

---

## Backend Setup

### Navigate to backend

```bash
cd backend
```

### Install dependencies

```bash
npm install
```

### Create environment variables

Create a `.env` file inside the backend folder:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=expense_tracker
DB_PORT=3306

JWT_SECRET=your_jwt_secret
```

### Start backend server

```bash
npm run dev
```

Backend server runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

### Navigate to frontend

```bash
cd frontend
```

### Install dependencies

```bash
npm install
```

### Start frontend server

```bash
npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

## Authentication

This project uses:

* JWT (JSON Web Token) for authentication
* bcrypt for password hashing and security

---

## Data Visualization

The dashboard includes financial charts powered by Chart.js to help users visualize:

* Total income
* Total expenses
* Spending distribution

---

## Validation & Security

### Backend

* JWT Authentication
* Password hashing with bcrypt

### Frontend

* Form validation using Yup

---

## Future Improvements

* Monthly budget planning
* Recurring transactions
* Export reports (PDF/CSV)
* Dark mode
* Multi-user support
* Notifications and reminders
* Advanced analytics dashboard

---

## Available Scripts

### Backend

```bash
npm run dev
```

Starts backend server using Nodemon.

### Frontend

```bash
npm start
```

Starts React development server.

---

## Author

Developed by [Hafidh Haji]

---

## License

This project is licensed under the MIT License.
