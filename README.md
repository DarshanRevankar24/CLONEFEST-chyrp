##🌟 CLONEFEST: Modified Chyrp Blogging Platform

A modern, lightweight blogging platform with dynamic categories, theme switching, and easy scalability. Built using React (frontend) and Node.js/Express (backend).

✅ Frontend Deployed on Vercel:[ Live Demo](https://chyrp-frontend-ygdv-375q5eojg-sharvaris-projects-06121a6f.vercel.app/)

✅ Backend & Database Hosted on Railway: [API Endpoint](https://chyrp.up.railway.app/docs)


#📚 Table of Contents

Project Overview
Features ✨
Tech Stack 🛠️
Frontend Structure 🖥️
Backend Structure ⚙️
Installation & Setup 🚀
Usage 🖱️
Data Flow & Architecture 🔄
Future Improvements 🔮

#📝 Project Overview

CLONEFEST: Modified Chyrp is a full-stack blogging platform designed for modern web usage:

🗂️ Dynamic Categories: Technology, Geography, Lifestyle, etc.
🌗 Theme Switcher: Toggle between light & dark modes.
🔗 API Driven: Posts & categories fetched dynamically from backend.
🚀 Scalable: Add new posts, categories, or features easily.
🌐 Deployed & Accessible Online: Frontend on Vercel, backend & database on Railway.

This project emphasizes user experience, responsiveness, and simplicity, perfect for judges evaluating functionality and design.

#✨ Features

✅ Responsive UI: Works on mobile & desktop
📰 Dynamic Posts: Fetch posts from backend API
🏷️ Category Organization: Posts auto-assign to categories
🌗 Theme Switcher: Light & dark modes
🖼️ Placeholder Categories: Pre-designed boxes for empty categories
⚡ Scalable Backend: REST API ready for expansion
🌐 Deployed Online: No local setup needed to explore

#🛠️ Tech Stack

| Layer      | Technology                           | Description                      |
| ---------- | ------------------------------------ | -------------------------------- |
| Frontend   | React + Tailwind                     | Dynamic UI, responsive design    |
| Backend    | Node.js + Express                    | API server, RESTful endpoints    |
| Database   | Railway-hosted DB                    | Storing posts, categories, users |
| Hosting    | Vercel (frontend), Railway (backend) | Deployment & hosting             |
| Versioning | Git & GitHub                         | Source control                   |

#🖥️ Frontend Structure

frontend/
│
├── src/
│   ├── components/      # Reusable UI components (ThemeSwitcher, PostCard)
│   ├── pages/           # Pages like Home, Themes, About
│   ├── utils/           # API calls (listPosts, listCategories)
│   ├── App.jsx          # Main component
│   └── index.js         # ReactDOM render
│
├── tailwind.config.js   # Tailwind CSS config
└── package.json         # Frontend dependencies

Highlights:

🌗 ThemeSwitcher: Toggle light/dark mode
📰 PostCard: Reusable component for posts
🏷️ Dynamic Categories: API-driven rendering with placeholders

#⚙️ Backend Structure

backend/
│
├── routes/              # API endpoints (posts.js, categories.js)
├── controllers/         # Logic for each route
├── models/              # DB models for Posts & Categories
├── app.js               # Express app configuration
└── package.json         # Backend dependencies

Endpoints Example:

GET /api/posts → Fetch all posts

GET /api/categories → Fetch all categories

POST /api/posts → Add new post

Backend is ready to expand for authentication, comments, analytics, and more.

#🚀 Installation & Setup

Note: You can explore the deployed version without local setup.

Prerequisites

Node.js (v18+)

npm / yarn

Git

Local Setup Steps

Clone repo:

git clone https://github.com/DarshanRevankar24/CLONEFEST-chyrp.git
cd CLONEFEST-chyrp


Setup Backend:

cd backend
npm install
npm run dev

Runs backend on http://localhost:5000

Setup Frontend:

cd frontend
npm install
npm run dev

Runs frontend on http://localhost:5173

⚡ Make sure backend is running before frontend for API calls

🖱️ Usage

Visit the frontend URL: [Vercel Demo](https://chyrp-frontend-ygdv-375q5eojg-sharvaris-projects-06121a6f.vercel.app/)
Browse posts by category or scroll for all posts
Toggle light/dark mode with ThemeSwitcher
Admins can add posts via API
Placeholder categories auto-adjust when new posts are added

#🔄 Data Flow & Architecture

flowchart TD
    A[User 👤] -->|Requests Posts| B[Frontend React 🖥️]
    B -->|API Call| C[Backend Express ⚙️]
    C -->|Fetch Data| D[Database 🗄️ (Railway)]
    D --> C
    C --> B
    B --> A

The frontend requests data from backend → backend queries database → sends response → frontend renders dynamically

#🔮 Future Improvements

🔑 Authentication & Admin Panel
💬 Commenting System
⚡ Real-time Updates via WebSockets
📊 Analytics Dashboard for posts & user engagement
🎨 UI Animations & Transitions for smoother UX

