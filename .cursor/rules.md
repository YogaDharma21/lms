# Cursor Rules for LMS Project

## Project Overview

This is a **Learning Management System (LMS)** built with a monorepo structure.

## Tech Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS (in `/apps/web`)
- **Backend**: Node.js + Express + MongoDB (in `/apps/backend`)

## Key Principles

1. **No Shared Code**: Each app in `/apps` is completely independent. Do NOT create shared components, utilities, or libraries across apps.

2. **Each App Lives Alone**: Every project in `/apps/*` should be self-contained with its own:
   - Package manager (npm)
   - Dependencies
   - Build system
   - Configuration files

3. **Current Apps**:
   - `/apps/web` - React frontend with Tailwind CSS
   - `/apps/backend` - Express.js backend with MongoDB

4. **Docker**: Use `/docker` folder for docker-compose files that orchestrate the apps.

## Working with Apps

- Frontend changes: Work in `/apps/web`
- Backend changes: Work in `/apps/backend`
- Do NOT assume shared dependencies exist between apps
- Tests live within each app, not at the root level

## Routes

- `/` - Landing page
- `/manager/*` - Manager dashboard routes (requires manager login)
- `/student/*` - Student dashboard routes (requires student login)
- `/manager/sign-in` - Manager login
- `/manager/sign-up` - Manager signup (with payment)
- `/student/sign-in` - Student login (students are added by managers)

## Important Notes

- This is an LMS where teachers pay to subscribe, then create courses and add students
- Students cannot sign up themselves - they are registered by managers
- The landing page is the entry point with login options for both roles
