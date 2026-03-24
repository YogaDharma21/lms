#!/bin/bash

echo "Local LMS Management Script"
echo "============================"
echo ""
echo "Usage: ./scripts/local.sh <command>"
echo ""
echo "Commands:"
echo "  install   - Install all dependencies"
echo "  dev       - Start both backend and web servers"
echo "  dev-be    - Start only backend server"
echo "  dev-web   - Start only web server"
echo "  build     - Build web for production"
echo "  clean     - Remove node_modules and build files"
echo ""

case "$1" in
  install)
    echo "Installing dependencies..."
    cd apps/backend && npm install
    cd ../web && npm install
    echo "Done!"
    ;;
  dev)
    echo "Starting backend and web..."
    cd apps/backend && npm run dev &
    cd ../web && npm run dev &
    echo ""
    echo "Backend: http://localhost:3000"
    echo "Web: http://localhost:5173"
    ;;
  dev-be)
    echo "Starting backend..."
    cd apps/backend && npm run dev
    ;;
  dev-web)
    echo "Starting web..."
    cd apps/web && npm run dev
    ;;
  build)
    echo "Building web..."
    cd apps/web && npm run build
    ;;
  clean)
    echo "Cleaning..."
    rm -rf apps/backend/node_modules apps/web/node_modules
    rm -rf apps/web/dist
    echo "Cleaned!"
    ;;
  *)
    echo "Unknown command: $1"
    exit 1
    ;;
esac
