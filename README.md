# LMS (Learning Management System)

A full-stack Learning Management System where teachers pay to subscribe, create courses, and manage student access.

## Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB

## How It Works

1. **Teachers** sign up and pay to access the platform
2. **Teachers** create courses with videos and text content
3. **Teachers** add students who can then login and access their courses
4. **Students** can only login - they are added by teachers (cannot sign up themselves)

## Project Structure

```
apps/
├── web/        # React frontend (Tailwind CSS)
├── backend/    # Express.js backend (MongoDB)

docker/         # Docker configurations
docs/           # Architecture documentation
.github/        # CI/CD workflows
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

### Running Locally

#### Backend

```bash
cd apps/backend
npm install
# Configure .env file (see .env.example)
npm run dev
```

#### Frontend

```bash
cd apps/web
npm install
npm run dev
```

### Running with Docker

```bash
# Start all services
docker-compose -f docker/docker-compose.yml up

# Start specific service
docker-compose -f docker/docker-compose.yml up backend
docker-compose -f docker/docker-compose.yml up web
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Landing page with login options |
| `/manager/sign-in` | Manager login |
| `/manager/sign-up` | Manager signup (with payment) |
| `/manager` | Manager dashboard |
| `/student/sign-in` | Student login |
| `/student` | Student dashboard |

## Features

- Course management (create, edit, delete)
- Video and text content
- Student enrollment
- Progress tracking
- Payment integration (Midtrans)

## License

[MIT](LICENSE)
