# Floura Website Management & Deployment Guide

This guide will help you understand how to manage, deploy, and maintain your Floura Lifestyle Blog.

## 1. Project Structure
- **`frontend/`**: Contains the React.js (Vite) application. This handles everything the user sees.
- **`backend/`**: Contains the Node.js + Express backend, along with MongoDB models and routes to manage the blog posts, users, and authentication.

## 2. Managing Content (Admin Panel)

1. **Log in as Administrator:** Navigate to `/login` and enter your configured admin credentials.
2. **Dashboard Access:** Once logged in, go to `/dashboard`. As an admin, you'll see a button leading to the **Admin Dashboard**.
3. **Manage Posts:** 
   - From the Admin Dashboard, click **Manage Posts**.
   - Here you can create a new post with a title, category, tags, cover image URL, and content (HTML format supported).
   - You can also edit or delete existing posts.
4. **Manage Users:**
   - From the Admin Dashboard, click **Manage Users** to view registered users and their details.

## 3. SEO & Sitemaps

Your website utilizes `react-helmet-async` for dynamic Meta Titles and Descriptions.
- All primary routes dynamically inject matching `<title>` tags for SEO.
- A dynamic sitemap XML is generated on the backend at `/api/sitemap.xml`. You should submit `https://your-backend-production-url.onrender.com/api/sitemap.xml` to Google Search Console to index all your dynamic blog posts.

## 4. Deployment Instructions

### A. Deploying the Backend (Render)
1. Push your code to a GitHub repository.
2. Go to [Render](https://render.com/) and create a new **Web Service**.
3. Connect your GitHub repository and select the `backend` folder as the Root Directory.
4. Set the Build Command: `npm install`
5. Set the Start Command: `node server.js`
6. Add Environment Variables:
   - `PORT=5000`
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://your-frontend-vercel-url.vercel.app` (Update this once your frontend is deployed)
   - `MONGO_URI=your_mongodb_atlas_connection_string`

### B. Deploying the Frontend (Vercel)
1. Go to [Vercel](https://vercel.com/) and create a new project from your connected GitHub repository.
2. During setup, configure the **Framework Preset** as `Vite`.
3. Set the **Root Directory** to `frontend`.
4. Ensure the **Build Command** is `npm run build` and **Output Directory** is `dist`.
5. Add Environment Variables (if your Vite build requires `VITE_API_URL`):
   - `VITE_API_URL=https://your-backend-production-url.onrender.com/api`
6. Deploy! Vercel handles the routing automatically via the provided `vercel.json`.

## 5. Local Development

If you wish to run the project locally for future bug fixes:

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
npm install
node server.js
```

Ensure you have a `.env` file in your `backend/` directory with `NODE_ENV=development` and your MongoDB connection URI.
