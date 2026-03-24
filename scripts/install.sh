#!/bin/bash

echo "Installing dependencies..."

echo "Installing backend dependencies..."
cd apps/backend
npm install
cd ../..

echo "Installing web dependencies..."
cd apps/web
npm install
cd ../..

echo "All dependencies installed successfully!"
