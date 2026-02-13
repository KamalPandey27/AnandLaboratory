# 🏥 Anand Diagnostic Laboratory

A modern, full-stack web application for a diagnostic laboratory that enables patients to book lab tests online, manage appointments, and allows administrators to efficiently manage tests and bookings. Built with React, Node.js, Express, and MongoDB.

![Anand Laboratory](https://via.placeholder.com/1200x600?text=Anand+Diagnostic+Laboratory)

## ✨ Features

### 👥 Patient Features

- **Browse Services** - View all available diagnostic tests and services
- **Online Booking** - Book lab tests with date and time selection
- **Secure OTP Verification** - One-Time Password verification for booking confirmation
- **Online Payments** - Integrated payment gateway for test payments
- **Appointment Scheduling** - Choose convenient time slots for sample collection
- **Responsive Design** - Seamless experience on desktop, tablet, and mobile devices

### 🔐 Admin Features

- **Secure Admin Login** - Protected authentication system
- **Manage Tests** - Add, edit, and remove diagnostic tests with pricing
- **View Bookings** - Monitor all patient appointments and bookings
- **Dashboard** - Overview of laboratory operations

## 🛠️ Tech Stack

### Frontend

| Technology           | Purpose                                 |
| -------------------- | --------------------------------------- |
| **React 19**         | UI library for building user interfaces |
| **Vite**             | Fast build tool and development server  |
| **Tailwind CSS 4**   | Utility-first CSS framework             |
| **React Router DOM** | Client-side routing and navigation      |
| **Axios**            | HTTP client for API requests            |
| **React Toastify**   | Toast notifications                     |
| **React Icons**      | Icon library                            |
| **Vercel Analytics** | Website analytics                       |

### Backend

| Technology        | Purpose                        |
| ----------------- | ------------------------------ |
| **Node.js**       | JavaScript runtime environment |
| **Express.js**    | Web framework for Node.js      |
| **MongoDB**       | NoSQL database                 |
| **Mongoose**      | MongoDB object modeling        |
| **JWT**           | JSON Web Token authentication  |
| **Bcrypt**        | Password hashing               |
| **Cloudinary**    | Image and media storage        |
| **Nodemailer**    | Email sending service          |
| **Cookie Parser** | Parse cookies in requests      |

## 📁 Project Structure

```
AnandLaboratory/
├── 📦 Backend/
│   ├── 📂 src/
│   │   ├── 🧩 controllers/       # Request handlers
│   │   │   ├── BookingTest.controllers.js
│   │   │   ├── Login.controller.js
│   │   │   ├── AddTest.controllers.js
│   │   │   └── Contact.controllers.js
│   │   │
│   │   ├── 📐 models/            # Database schemas
│   │   │   ├── BookTest.models.js
│   │   │   ├── Login.models.js
│   │   │   ├── AddTest.models.js
│   │   │   └── ContactUs.models.js
│   │   │
│   │   ├── 🛤️ routes/            # API routes
│   │   │   ├── BookTest.routes.js
│   │   │   ├── Login.routes.js
│   │   │   ├── AddTest.routes.js
│   │   │   └── Contact.routes.js
│   │   │
│   │   ├── 🧰 utils/             # Utility functions
│   │   │   ├── asyncHandler.js
│   │   │   ├── ApiError.js
│   │   │   ├── ApiResponse.js
│   │   │   ├── Cloudinary.js
│   │   │   └── SendMail.js
│   │   │
│   │   ├── 🔌 db/                # Database connection
│   │   │   └── index.js
│   │   │
│   │   ├── 📄 app.js             # Express app setup
│   │   └── 🚀 server.js          # Server entry point
│   │
│   ├── 📄 package.json
│   └── 🌍 .env                   # Environment variables
│
├── 💻 DiagnosticLabWebsite/
│   ├── 📂 src/
│   │   ├── 🧩 components/       # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── BookTest.jsx
│   │   │   ├── PaymentPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── AppointmentForm.jsx
│   │   │   ├── TestCard.jsx
│   │   │   └── ...
│   │   │
│   │   ├── 📄 pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── 👨‍💼 Admin/               # Admin dashboard
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── AdminNavbar.jsx
│   │   │   ├── AddTest.jsx
│   │   │   └── ManageTest.jsx
│   │   │
│   │   ├── 🖼️ assets/            # Static assets (images, icons)
│   │   │   ├── heroImage.png
│   │   │   ├── about1.jpg
│   │   │   └── ...
│   │   │
│   │   ├── 🔌 context/           # React context
│   │   │   └── TestContext.jsx
│   │   │
│   │   ├── 📄 App.jsx            # Main app component
│   │   ├── 📄 main.jsx           # Entry point
│   │   └── 📄 Layout.jsx         # Layout wrapper
│   │
│   ├── 📄 package.json
│   ├── 📄 vite.config.js
│   └── 🌍 .env                    # Environment variables
│
└── 📄 README.md
```

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **MongoDB** (local instance or MongoDB Atlas)
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/kamalpandey27/AnandLaboratory.git
   cd AnandLaboratory
   ```

2. **Setup Backend**

   ```bash
   cd Backend
   npm install
   ```

3. **Setup Frontend**

   ```bash
   cd DiagnosticLabWebsite
   npm install
   ```

4. **Configure Environment Variables**

   Create `.env` file in `Backend/`:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/anand_lab
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   ```

   Create `.env` file in `DiagnosticLabWebsite/`:

   ```env
   VITE_API_URL=http://localhost:5000/api/v1
   ```

5. **Start Development Servers**

   Terminal 1 (Backend):

   ```bash
   cd Backend
   npm run dev
   ```

   Terminal 2 (Frontend):

   ```bash
   cd DiagnosticLabWebsite
   npm run dev
   ```

6. **Access the Application**
   - Frontend: `https://diagnostic-lab-eight.vercel.app/`
   - Backend API: `https://diagnostic-lab.onrender.com`

## 📝 API Endpoints

### Authentication

| Method | Endpoint             | Description | Protected |
| ------ | -------------------- | ----------- | --------- |
| POST   | `/api/v1/auth/login` | Admin login | No        |

### Bookings

| Method | Endpoint                      | Description            | Protected |
| ------ | ----------------------------- | ---------------------- | --------- |
| POST   | `/api/v1/bookings/send-otp`   | Send OTP for booking   | No        |
| POST   | `/api/v1/bookings/verify-otp` | Verify OTP and confirm | No        |
| GET    | `/api/v1/bookings`            | Get all bookings       | Yes       |

### Tests

| Method | Endpoint            | Description   | Protected |
| ------ | ------------------- | ------------- | --------- |
| GET    | `/api/v1/tests`     | Get all tests | No        |
| POST   | `/api/v1/tests`     | Add new test  | Yes       |
| PUT    | `/api/v1/tests/:id` | Update test   | Yes       |
| DELETE | `/api/v1/tests/:id` | Delete test   | Yes       |

### Contact

| Method | Endpoint          | Description         | Protected |
| ------ | ----------------- | ------------------- | --------- |
| POST   | `/api/v1/contact` | Submit contact form | No        |

## 🖥️ Frontend Routes

| Route                | Component       | Description                    |
| -------------------- | --------------- | ------------------------------ |
| `/`                  | Home            | Landing page with hero section |
| `/about`             | About           | About the laboratory           |
| `/services`          | Services        | Available services             |
| `/contact`           | Contact         | Contact form                   |
| `/AppointmentForm`   | AppointmentForm | Book appointment               |
| `/BookTest/:id`      | BookTest        | Book specific test             |
| `/BookTest/payment`  | PaymentPage     | Payment processing             |
| `/LearnMore`         | LearnMore       | Learn more about lab           |
| `/admin`             | AdminLayout     | Admin dashboard                |
| `/admin/manage-test` | ManageTest      | Manage tests                   |

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - Bcrypt for password security
- **OTP Verification** - 6-digit OTP for booking confirmation
- **Protected Routes** - Admin routes require authentication
- **Input Validation** - Server-side validation
- **CORS Configuration** - Controlled cross-origin requests

## 🎨 Design Highlights

- **Modern UI** - Clean, professional design with Tailwind CSS
- **Responsive Layout** - Mobile-first approach
- **Smooth Animations** - Transition effects and hover states
- **Loading States** - Loader component for async operations
- **Toast Notifications** - User feedback for actions
- **Error Handling** - User-friendly error messages

## 📱 Pages Overview

### Home Page

- Hero section with call-to-action buttons
- Opening hours and emergency information
- About section with experience highlights
- Services overview
- Testimonials section

### Admin Dashboard

- Add new diagnostic tests
- Manage existing tests
- View and manage bookings

### Booking Flow

1. Select test from services
2. Fill patient details
3. Choose date and time
4. Send OTP for verification
5. Verify OTP
6. Proceed to payment
7. Confirmation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Developer

**Your Name**

- GitHub: [@kamalpandey27](https://github.com/kamalpandey27)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Vite Documentation](https://vitejs.dev/)

---

⭐ If you found this project helpful, please consider giving it a star!

📧 For inquiries, contact: your.email@example.com
