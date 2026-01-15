# <img src="/client/public/favicon.svg" alt="QuickShow Logo" width="40"/>uickShow - Ticket Booking Platform

<div align="center">
  <img src="/client/src/assets/logo.svg" alt="QuickShow Logo" width="400"/>
  <br><br>
  <img src="https://img.shields.io/badge/⭐-Star_This_Repo-FFD700?logo=github&logoColor=white" alt="Star">
</div>

## 🎬 Modern Movie Ticket Booking Platform

<div align="center">
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.x-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/Prebuild_UI-Modern-000000?logo=ui&logoColor=white" alt="Prebuild UI">
  <img src="https://img.shields.io/badge/Clerk-Auth-FF69B4?logo=clerk&logoColor=white" alt="Clerk">
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white" alt="Vercel">
</div>

**QuickShow** is a production-ready full-stack ticket booking platform for movies and events. Users can browse showtimes, select seats interactively, complete secure bookings, and manage their tickets seamlessly.

## ✨ Key Features

- 🌟 **User Authentication** - Secure Clerk integration (Email, Google, Role-based access)
- 🎥 **Movie Discovery** - Rich listings with posters, theaters and timings
- 🎯 **Real-time Seat Selection** - Interactive seat maps with live availability
- 💳 **Payment Ready** - Stripe integration setup for secure transactions
- 📱 **Booking Management** - View, cancel, and get QR codes for tickets
- 👨‍💼 **Admin Dashboard** - Complete movie/show/user management
- 📱 **Mobile-First** - Responsive design with Tailwind + Prebuild UI
<!-- - 📧 **Notifications** - Email confirmations and booking reminders -->
- ⚡ **Performance** - 95+ Lighthouse scores with optimized loading

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|--------------|
| **Frontend** | <img src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white" alt="React"> <img src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" alt="Vite"> <img src="https://img.shields.io/badge/Tailwind-3.x-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind"> <img src="https://img.shields.io/badge/Prebuild_UI-Modern-000000?logo=ui&logoColor=white" alt="Prebuild UI"> |
| **State & API** | <img src="https://img.shields.io/badge/React_Query-5.x-FF4154?logo=tanstackquery&logoColor=white" alt="React Query"> <img src="https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white" alt="Axios"> <img src="https://img.shields.io/badge/React_Hook_Form-7.x-1F2937?logo=reacthookform&logoColor=white" alt="React Hook Form"> |
| **Backend** | <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js"> <img src="https://img.shields.io/badge/Express.js-4.x-404040?logo=express&logoColor=white" alt="Express"> <img src="https://img.shields.io/badge/Clerk-Auth-FF69B4?logo=clerk&logoColor=white" alt="Clerk"> |
| **Database** | <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB"> <img src="https://img.shields.io/badge/Mongoose-8.x-880000?logo=mongoose&logoColor=white" alt="Mongoose"> |
| **UI/UX** | <img src="https://img.shields.io/badge/Lucide-Icons-000000?logo=lucide&logoColor=white" alt="Lucide"> <img src="https://img.shields.io/badge/Framer_Motion-10.x-0055FF?logo=framer&logoColor=white" alt="Framer Motion"> <img src="https://img.shields.io/badge/React_Hot_Toast-2.x-FF6B35?logo=toast&logoColor=white" alt="React Hot Toast"> |

</div>

## 🚀 Live Demo

<div align="center">
  <a href="https://quickshow.vercel.app">
    <b>🌐 Live Demo →</b>
  </a>
  |
  <a href="https://github.com/AkbarMWaris/QuickShow">
    <b>📁 Source Code →</b>
  </a>
</div>

## 🎯 Quick Start

### Prerequisites
```bash
# Install Node.js 18+
node -v  # Should show v18.x.x or higher
npm install -g vercel  # Optional: Vercel CLI
```

## Clone and setup
```bash

# Clone the repo
git clone https://github.com/AkbarMWaris/QuickShow.git
cd QuickShow

# Install frontend dependencies
cd client
npm install
cp .env.example .env.local

# Install backend dependencies
cd ../server
npm install
cp .env.example .env
```
