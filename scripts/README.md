# LMS Scripts

This folder contains utility scripts for running the LMS project locally or with Docker.

## Scripts

### Docker Scripts

#### `docker.sh`
Manages Docker containers for the LMS application.

```bash
# Start all services
./scripts/docker.sh up-bg

# View logs
./scripts/docker.sh logs

# Stop services
./scripts/docker.sh down

# See all commands
./scripts/docker.sh
```

### Local Scripts

#### `local.sh`
Manages local development without Docker.

```bash
# Install dependencies
./scripts/local.sh install

# Start both servers
./scripts/local.sh dev

# Start only backend
./scripts/local.sh dev-be

# Start only web
./scripts/local.sh dev-web

# Build for production
./scripts/local.sh build
```

### `install.sh`
Installs all dependencies for both backend and web.

### `dev.sh`
Starts both backend and web development servers simultaneously.

## Requirements

- Node.js
- Docker & Docker Compose (for docker scripts)
- MongoDB (either local or via Docker)
