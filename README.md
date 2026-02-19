# Anand Laboratory - Diagnostic Lab Website

A full-stack diagnostic laboratory management system with a React frontend and Node.js/Express backend.

## 🚀 Project Overview

Anand Laboratory is a web application for managing a diagnostic center's operations, including:

- Patient test booking and appointments
- Test management for administrators
- Contact form submissions
- User authentication for admin access

## 📁 Project Structure

```
AnandLaboratory/
├── Backend/                    # Node.js Express API
│   ├── src/
│   │   ├── controllers/       # Request handlers
│   │   ├── db/               # Database connection
│   │   ├── middleware/       # Express middleware
│   │   ├── models/          # Mongoose schemas
│   │   ├── routes/          # API route definitions
│   │   ├── utils/           # Utility functions
│   │   ├── app.js           # Express app configuration
│   │   └── server.js        # Server entry point
│   └── package.json
│
└── DiagnosticLabWebsite/      # React Frontend (Vite)
    ├── src/
    │   ├── Admin/            # Admin panel components
    │   ├── assets/          # Images, videos, icons
    │   ├── components/      # Reusable React components
    │   ├── context/         # React context providers
    │   ├── pages/           # Page components
    │   └── App.jsx          # Main app component
    └── package.json
```

## 🛠️ Tech Stack

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT + bcrypt
- **Email:** Nodemailer (Brevo/SMTP)
- **Other:** CORS, dotenv

### Frontend

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Notifications:** React Toastify

## 🔌 API Endpoints

### Contact

- `POST /api/v1/contact` - Submit contact form

### Booking

- `GET /api/v1/booking/` - Get all bookings
- `POST /api/v1/booking/` - Create new booking
- `PUT /api/v1/booking/:id` - Update booking status
- `DELETE /api/v1/booking/:id` - Delete booking

### Tests

- `GET /api/v1/add-test/` - Get all tests
- `POST /api/v1/add-test/` - Add new test
- `PUT /api/v1/add-test/:id` - Update test
- `DELETE /api/v1/add-test/:id` - Delete test

### Authentication

- `POST /api/v1/auth/login` - Admin login
- `POST /api/v1/auth/register` - Register new admin

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
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
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
VITE_API_URL=http://localhost:3000/api/v1
```

Start the frontend development server:

```bash
npm run dev
```

## 📱 Features

### Patient Features

- Browse available diagnostic tests
- Book appointments online
- View test details and pricing
- Contact the laboratory

### Admin Features

- Dashboard for managing bookings
- Add/Edit/Delete diagnostic tests
- View and manage contact submissions
- Secure admin authentication

## 🔧 Available Scripts

### Backend

```bash
npm run dev    # Start with nodemon
npm start     # Start production server
```

### Frontend

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build
```

## 📄 License

ISC

## 👨‍💻 Author

Anand Laboratory Team
