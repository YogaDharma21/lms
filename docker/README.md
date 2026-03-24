# Docker Configuration

This folder contains Docker configurations for running the LMS application.

## Services

- **backend**: Node.js Express API with MongoDB
- **web**: React frontend (Vite)

## Usage

### Starting all services

```bash
docker-compose -f docker/docker-compose.yml up
```

### Starting specific service

```bash
docker-compose -f docker/docker-compose.yml up backend
docker-compose -f docker/docker-compose.yml up web
```

### Stopping services

```bash
docker-compose -f docker/docker-compose.yml down
```

## Environment Variables

Each service requires environment variables defined in their respective `.env` files:
- `/apps/backend/.env` - Backend configuration (MongoDB, JWT, Midtrans, etc.)

## Notes

- The backend and web services communicate via internal Docker network
- Ports are exposed as defined in docker-compose.yml
- MongoDB can be either local or containerized
