import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Pages
import Home from '../pages/Home';
import BlogList from '../pages/BlogList';
import BlogPost from '../pages/BlogPost';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import ManagePosts from '../pages/admin/ManagePosts';
import ManageUsers from '../pages/admin/ManageUsers';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">{children}</main>
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