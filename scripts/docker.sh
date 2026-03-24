#!/bin/bash

echo "Docker LMS Management Script"
echo "=============================="
echo ""
echo "Usage: ./scripts/docker.sh <command>"
echo ""
echo "Commands:"
echo "  up        - Start all services"
echo "  up-bg     - Start all services in background"
echo "  down      - Stop all services"
echo "  build     - Build all containers"
echo "  rebuild   - Rebuild all containers (no cache)"
echo "  logs      - View logs for all services"
echo "  logs-be   - View backend logs"
echo "  logs-web  - View web logs"
echo "  status    - Show container status"
echo "  clean     - Stop and remove all containers"
echo ""

case "$1" in
  up)
    echo "Starting all services..."
    docker-compose -f docker/docker-compose.yml up
    ;;
  up-bg)
    echo "Starting all services in background..."
    docker-compose -f docker/docker-compose.yml up -d
    echo "Services started!"
    echo "Web: http://localhost:5173"
    echo "Backend: http://localhost:3000"
    ;;
  down)
    echo "Stopping all services..."
    docker-compose -f docker/docker-compose.yml down
    ;;
  build)
    echo "Building containers..."
    docker-compose -f docker/docker-compose.yml build
    ;;
  rebuild)
    echo "Rebuilding containers (no cache)..."
    docker-compose -f docker/docker-compose.yml build --no-cache
    ;;
  logs)
    docker-compose -f docker/docker-compose.yml logs -f
    ;;
  logs-be)
    docker-compose -f docker/docker-compose.yml logs -f backend
    ;;
  logs-web)
    docker-compose -f docker/docker-compose.yml logs -f web
    ;;
  status)
    docker-compose -f docker/docker-compose.yml ps
    ;;
  clean)
    echo "Stopping and removing all containers..."
    docker-compose -f docker/docker-compose.yml down -v
    echo "Cleaned up!"
    ;;
  *)
    echo "Unknown command: $1"
    echo "Run 'docker.sh' without arguments to see available commands"
    exit 1
    ;;
esac
