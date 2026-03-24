#!/bin/bash

echo "Starting development servers..."

echo "Starting backend..."
cd apps/backend
npm run dev &
BACKEND_PID=$!
cd ../..

echo "Starting web..."
cd apps/web
npm run dev &
WEB_PID=$!
cd ../..

echo ""
echo "Servers started!"
echo "Backend: http://localhost:3000"
echo "Web: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop all servers"

trap "kill $BACKEND_PID $WEB_PID 2>/dev/null" EXIT

wait
