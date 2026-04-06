import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Pages - Lazy Loaded
const Home = lazy(() => import('../pages/Home'));
const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

// Admin Pages - Lazy Loaded
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const ManagePosts = lazy(() => import('../pages/admin/ManagePosts'));
const ManageUsers = lazy(() => import('../pages/admin/ManageUsers'));

const Loader = () => (
  <div className="flex h-[80vh] items-center justify-center">
    <div className="w-12 h-12 border-4 border-nature-200 border-t-nature-600 rounded-full animate-spin"></div>
  </div>
);

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>
    </main>
    <Footer />
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/blog" element={<Layout><BlogList /></Layout>} />
      <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      
      <Route path="/login" element={<Layout><Login /></Layout>} />
      <Route path="/register" element={<Layout><Register /></Layout>} />
      
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />

      {/* Admin */}
      <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} />
      <Route path="/admin/posts" element={<Layout><ManagePosts /></Layout>} />
      <Route path="/admin/users" element={<Layout><ManageUsers /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;