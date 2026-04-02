import { Link } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { posts } = useBlog();
  const { usersDb } = useAuth();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif mb-8 text-nature-900">Admin Dashboard</h1>
      <div className="mb-8 flex space-x-4">
         <Link to="/admin/posts" className="bg-nature-100 text-nature-800 px-4 py-2 rounded-md hover:bg-nature-200 transition font-medium">Manage Posts</Link>
         <Link to="/admin/users" className="bg-nature-100 text-nature-800 px-4 py-2 rounded-md hover:bg-nature-200 transition font-medium">Manage Users</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-xl border border-nature-100 text-center shadow-sm">
          <h3 className="text-lg font-medium text-gray-500 uppercase tracking-widest">Total Posts</h3>
          <p className="text-4xl font-serif text-nature-800 mt-4">{posts.length}</p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-nature-100 text-center shadow-sm">
          <h3 className="text-lg font-medium text-gray-500 uppercase tracking-widest">Total Users</h3>
          <p className="text-4xl font-serif text-nature-800 mt-4">{usersDb.length}</p>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;