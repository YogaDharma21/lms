# LMS Website

A modern Learning Management System frontend built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI** - Clean, responsive interface built with Tailwind CSS
- **User Authentication** - Secure login and registration with encrypted token storage
- **Course Management** - Browse, search, and filter courses
- **Video Learning** - Integrated video player for course content
- **Rich Text Editor** - Create course content with React Quill
- **Payment Integration** - Midtrans-powered payment checkout
- **Student Dashboard** - Track enrolled courses and learning progress
- **Admin Dashboard** - Manage courses, students, and view analytics

## Tech Stack

| Technology                                                   | Purpose                 |
| ------------------------------------------------------------ | ----------------------- |
| [React](https://react.dev/)                                  | UI library              |
| [TypeScript](https://www.typescriptlang.org/)                | Type safety             |
| [Vite](https://vitejs.dev/)                                  | Build tool              |
| [Tailwind CSS](https://tailwindcss.com/)                     | Styling                 |
| [React Router](https://reactrouter.com/)                     | Client-side routing     |
| [React Query](https://tanstack.com/query/latest)             | Server state management |
| [React Hook Form](https://react-hook-form.com/)              | Form handling           |
| [Zod](https://zod.dev/)                                      | Form validation         |
| [Axios](https://axios-http.com/)                             | HTTP client             |
| [React Quill](https://www.npmjs.com/package/react-quill-new) | Rich text editor        |

## Prerequisites

- Node.js (v18+)
- Running LMS Backend API

## Installation

```bash
# Navigate to website directory
cd lms-website

# Install dependencies
npm install
```

## Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
# Backend API URL
VITE_API_URL=http://localhost:3000/api

# Secret key for encryption (min 32 characters)
VITE_SECRET_KEY=your_secret_key_here
```

## Running the Application

```bash
# Development mode with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will start on port 5173 by default.

## Key Features Explained

### Authentication

- JWT-based authentication with the backend
- Tokens stored securely using react-secure-storage (encrypted with AES)
- Automatic token refresh and logout on expiration

### Course Management

- Browse all available courses
- Search and filter courses by category
- View course details, syllabus, and pricing

### Learning Experience

- Video-based course content
- Rich text materials using React Quill
- Progress tracking for enrolled students

### Payment Flow

- Integration with Midtrans for secure payments
- Automatic enrollment after successful payment

## Project Structure

```
lms-website/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/           # Page components
│   ├── services/        # API service functions
│   │   ├── authService.ts
│   │   ├── courseService.ts
│   │   ├── studentService.ts
│   │   └── overviewService.ts
│   ├── utils/           # Utility functions
│   │   ├── axios.ts     # Axios instance with interceptors
│   │   ├── const.ts     # Application constants
│   │   ├── secureStorage.ts  # Encrypted storage
│   │   └── zodSchema.ts # Form validation schemas
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run lint`    | Run ESLint               |
| `npm run preview` | Preview production build |

## Recommended Images

For a complete documentation, consider adding these images:

1. **Screenshots** - `homepage-screenshot.png` - Homepage/landing page screenshot
2. **Dashboard** - `admin-dashboard-screenshot.png` - Admin dashboard view
3. **Course Page** - `course-detail-screenshot.png` - Course detail page
4. **Student Learning** - `student-learning-screenshot.png` - Student learning interface

## API Integration

The frontend communicates with the backend through RESTful APIs. The API service layer is located in `src/services/`:

- `authService.ts` - Authentication endpoints
- `courseService.ts` - Course management endpoints
- `studentService.ts` - Student management endpoints
- `overviewService.ts` - Dashboard statistics endpoints

All API calls use an Axios instance with interceptors for:

- Request authorization headers
- Response error handling
- Token refresh logic

## Security Features

- Encrypted token storage using AES encryption
- Automatic logout on token expiration
- Form validation using Zod schemas
- XSS protection through React's default escaping

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Related Projects

- [LMS Backend](https://github.com/YogaDharma21/lms-backend) - The backend API for this application
