# Docker Configuration

This folder contains Docker configurations for running the LMS application.

## Services

- **mongodb**: MongoDB database
- **backend**: Node.js Express API (port 3000)
- **web**: React frontend (port 5173)

## Quick Start

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## Environment Variables

Create a `.env` file in the project root with:

```env
JWT_SECRET=your-secret-key
MIDTRANS_SERVER_KEY=your-server-key
MIDTRANS_CLIENT_KEY=your-client-key
MIDTRANS_ENVIRONMENT=sandbox
```

## Usage

### Starting all services

```bash
docker-compose up -d
```

This will start:
- MongoDB on port 27017
- Backend API on port 3000
- Frontend on port 5173

### Starting specific service

```bash
docker-compose up -d backend
docker-compose up -d web
docker-compose up -d mongodb
```

### Viewing logs

```bash
docker-compose logs -f backend
docker-compose logs -f web
```

### Stopping services

```bash
docker-compose down
```

### Rebuilding containers

```bash
docker-compose build --no-cache
```

## URLs

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- MongoDB: localhost:27017

## Notes

- Data persists in Docker volumes
- Frontend proxy handles API calls to backend
- Hot reload enabled via volume mounts
