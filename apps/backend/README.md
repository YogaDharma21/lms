# LMS Backend

A robust backend API for a Learning Management System built with Node.js, Express, and MongoDB.

## Features

- **User Authentication** - JWT-based authentication with secure password hashing using bcrypt
- **Course Management** - Create, read, update, and delete courses with file uploads (videos, images)
- **Student Management** - Manage student enrollments and profiles
- **Payment Integration** - Midtrans payment gateway integration for course purchases
- **Overview Dashboard** - Dashboard statistics and analytics
- **File Uploads** - Multer middleware for handling course materials and student avatars

## Tech Stack

| Technology                                     | Purpose                 |
| ---------------------------------------------- | ----------------------- |
| [Express.js](https://expressjs.com/)           | Web framework           |
| [MongoDB](https://www.mongodb.com/)            | Database                |
| [Mongoose](https://mongoosejs.com/)            | ODM for MongoDB         |
| [JSON Web Token (JWT)](https://jwt.io/)        | Authentication          |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | Password hashing        |
| [Midtrans](https://midtrans.com/)              | Payment gateway         |
| [Multer](https://www.npmjs.com/package/multer) | File uploads            |
| [Zod](https://zod.dev/)                        | Input validation        |
| [Nodemon](https://nodemon.io/)                 | Development auto-reload |

## Prerequisites

- Node.js (v18+)
- MongoDB (local or cloud instance)
- Midtrans account (for payment processing)

## Installation

```bash
# Navigate to backend directory
cd lms-backend

# Install dependencies
npm install
```

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
# Database connection string
DATABASE_URL=mongodb://localhost:27017/LMS-Database

# Midtrans payment gateway
MIDTRANS_URL=https://app.sandbox.midtrans.com/snap/v1/transactions
MIDTRANS_AUTH_STRING=your_midtrans_server_key

# JWT secret key (use a strong, unique key)
SECRET_KEY_JWT=your_secret_key_here

# Frontend URL for CORS and redirects
APP_URL=http://localhost:5173

# Course price (optional, for payment)
PRICE=280000
```

## Running the Application

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
node src/index.js
```

The server will start on port 3000 by default.

## API Endpoints

### Authentication

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register new user        |
| POST   | `/api/auth/login`    | User login               |
| GET    | `/api/auth/profile`  | Get current user profile |

### Courses

| Method | Endpoint                  | Description             |
| ------ | ------------------------- | ----------------------- |
| GET    | `/api/courses`            | Get all courses         |
| GET    | `/api/courses/:id`        | Get course details      |
| POST   | `/api/courses`            | Create new course       |
| PUT    | `/api/courses/:id`        | Update course           |
| DELETE | `/api/courses/:id`        | Delete course           |
| POST   | `/api/courses/:id/upload` | Upload course materials |

### Students

| Method | Endpoint                    | Description                    |
| ------ | --------------------------- | ------------------------------ |
| GET    | `/api/students`             | Get all students               |
| GET    | `/api/students/:id`         | Get student details            |
| POST   | `/api/students`             | Create new student             |
| PUT    | `/api/students/:id`         | Update student                 |
| DELETE | `/api/students/:id`         | Delete student                 |
| GET    | `/api/students/:id/courses` | Get student's enrolled courses |

### Payments

| Method | Endpoint                    | Description                  |
| ------ | --------------------------- | ---------------------------- |
| POST   | `/api/payment/create`       | Create payment transaction   |
| POST   | `/api/payment/notification` | Handle Midtrans notification |

### Overview

| Method | Endpoint              | Description              |
| ------ | --------------------- | ------------------------ |
| GET    | `/api/overview/stats` | Get dashboard statistics |

### Global

| Method | Endpoint                 | Description        |
| ------ | ------------------------ | ------------------ |
| GET    | `/api/global/categories` | Get all categories |
| POST   | `/api/global/upload`     | Upload files       |

## Project Structure

```
lms-backend/
├── src/
│   ├── routes/          # API route handlers
│   │   ├── authRoutes.js
│   │   ├── courseRoutes.js
│   │   ├── studentRoutes.js
│   │   ├── paymentRoutes.js
│   │   ├── overviewRoutes.js
│   │   └── globalRoutes.js
│   ├── utils/           # Utility functions
│   │   ├── database.js  # MongoDB connection
│   │   ├── multer.js    # File upload configuration
│   │   └── schema.js    # Zod validation schemas
│   └── index.js         # Application entry point
├── public/
│   └── uploads/         # Uploaded files storage
│       ├── courses/
│       └── students/
├── bruno/               # API testing collections
├── .env                 # Environment variables
├── .env.example         # Environment variables template
└── package.json
```

## Testing API

API collections for [Bruno](https://www.usebruno.com/) are included in the `bruno/` folder. Import them into Bruno to test the endpoints.

## Security Considerations

- Never commit `.env` file to version control
- Use strong, unique JWT secret keys
- Implement rate limiting in production
- Enable CORS restrictions for production
- Use HTTPS in production

## License

MIT License

## Author

YogaDharma21
