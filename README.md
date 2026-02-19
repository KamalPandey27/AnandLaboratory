# Anand Laboratory - Diagnostic Lab Website

A full-stack diagnostic laboratory management system with a React frontend and Node.js/Express backend.

## 🚀 Project Overview

**Live Demo:** [Anand Laboratory Website](https://diagnostic-lab-eight.vercel.app/)

Anand Laboratory is a diagnostic center web application that provides:

- **At-home blood testing services** - Book lab tests online and have certified phlebotomists collect samples from your home
- **Online test booking** with OTP verification for patient authentication
- **Multiple payment options** - UPI, Card, Cash, Netbanking
- **Admin panel** for managing diagnostic tests and bookings
- **Email notifications** for booking confirmations and contact inquiries

### Statistics

- 7+ Years of Experience
- 10,000+ Tests Done
- 1ied Customers

### Partnered Labs,000+ Satisf

- Lal Path
- Thyrocare
- SRL
- Prognosis
- Modern

## 📁 Project Structure

```
AnandLaboratory/
├── Backend/                    # Node.js Express API
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   │   ├── BookingTest.controllers.js   # OTP & payment handling
│   │   │   ├── AddTest.controllers.js     # Test management
│   │   │   ├── Contact.controllers.js     # Contact form
│   │   │   └── Login.controller.js         # Admin authentication
│   │   ├── db/               # MongoDB connection
│   │   ├── models/           # Mongoose schemas
│   │   │   ├── BookTest.models.js   # Booking schema
│   │   │   ├── AddTest.models.js    # Test package schema
│   │   │   ├── ContactUs.models.js  # Contact schema
│   │   │   └── Login.models.js       # Admin user schema
│   │   ├── routes/           # API route definitions
│   │   ├── utils/            # Utility functions
│   │   │   ├── asyncHandler.js
│   │   │   ├── ApiError.js
│   │   │   ├── ApiResponse.js
│   │   │   └── SendMail.js   # Email service (Brevo)
│   │   ├── app.js            # Express app configuration
│   │   └── server.js         # Server entry point
│   └── package.json
│
└── DiagnosticLabWebsite/      # React Frontend (Vite)
    ├── src/
    │   ├── Admin/            # Admin panel
    │   │   ├── AddTest.jsx       # Add new test packages
    │   │   ├── ManageTest.jsx    # Edit/delete tests
    │   │   ├── AdminLayout.jsx
    │   │   └── AdminNavbar.jsx
    │   ├── assets/           # Images, videos, icons
    │   ├── components/       # Reusable React components
    │   │   ├── BookTest.jsx      # Booking with OTP verification
    │   │   ├── PaymentPage.jsx   # Payment selection
    │   │   ├── AppointmentForm.jsx
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   └── ...
    │   ├── context/          # React context
    │   │   └── TestContext.jsx
    │   ├── pages/
    │   │   ├── Home.jsx          # Hero, features, stats
    │   │   ├── About.jsx         # Vision, mission, portfolio
    │   │   ├── Services.jsx
    │   │   └── Contact.jsx
    │   └── App.jsx
    └── package.json
```

## 🛠️ Tech Stack

### Backend

| Technology | Purpose                       |
| ---------- | ----------------------------- |
| Node.js    | Runtime environment           |
| Express.js | Web framework                 |
| MongoDB    | Database                      |
| Mongoose   | ODM for MongoDB               |
| Nodemailer | Email sending (Brevo SMTP)    |
| CORS       | Cross-origin resource sharing |
| dotenv     | Environment variables         |

### Frontend

| Technology       | Purpose       |
| ---------------- | ------------- |
| React 19         | UI framework  |
| Vite             | Build tool    |
| Tailwind CSS     | Styling       |
| React Router DOM | Routing       |
| Axios            | HTTP client   |
| React Toastify   | Notifications |

## 🔌 API Endpoints

### Contact (`/api/v1/contact`)

| Method | Endpoint | Description         |
| ------ | -------- | ------------------- |
| POST   | `/`      | Submit contact form |

**Request Body:**

```json
{
  "name": "string",
  "email": "string",
  "phoneNumber": "string",
  "subject": "string",
  "message": "string"
}
```

### Booking (`/api/v1/booking`)

| Method | Endpoint      | Description                            |
| ------ | ------------- | -------------------------------------- |
| POST   | `/send-otp`   | Create booking and send OTP            |
| POST   | `/verify-otp` | Verify OTP and confirm booking         |
| POST   | `/payment`    | Process payment after OTP verification |

**Send OTP Request Body:**

```json
{
  "name": "string",
  "age": "number",
  "gender": "male|female|other",
  "email": "string",
  "phoneNumber": "string",
  "date": "date",
  "address": "string",
  "message": "string",
  "testId": "string"
}
```

**Payment Request Body:**

```json
{
  "bookingId": "string",
  "paymentMethod": "upi|card|cash|netbanking"
}
```

### Tests (`/api/v1/add-test`)

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| POST   | `/add-blood-test` | Add new test package |
| GET    | `/`               | Get all tests        |
| PATCH  | `/update-tests`   | Update test details  |

**Add Test Request Body:**

```json
{
  "title": "string",
  "price": "number",
  "tests": ["string", "string"]
}
```

### Authentication (`/api/v1/auth`)

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| POST   | `/login` | Admin login |

**Login Request Body:**

```json
{
  "email": "string",
  "password": "string"
}
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
BREVO_API_KEY=your_brevo_api_key
```

Start the backend server:

```bash
# Development
npm run dev

# Production
npm start
```

### Frontend Setup

```bash
cd DiagnosticLabWebsite
npm install
```

Create a `.env` file in the DiagnosticLabWebsite directory:

```env
VITE_API_URL=https://diagnostic-lab.onrender.com
```

Start the frontend development server:

```bash
npm run dev
```

## 📱 Features

### Patient Features

- Browse available diagnostic test packages
- Book appointments online with OTP verification
- Select payment method (UPI, Card, Cash, Netbanking)
- View test details, prices, and individual test names
- Contact the laboratory via contact form
- At-home sample collection

### Admin Features

- Login authentication
- Add new diagnostic test packages (title, price, individual tests)
- Edit existing test packages
- View all bookings
- Manage test inventory

## 📄 License

ISC

## 👨‍💻KAMAL

Anand Laboratory Team
