import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

const ManageUsers = () => {
  const { usersDb, deleteUser } = useAuth();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Link to="/admin" className="text-sm font-bold text-nature-600 hover:underline block mb-2">&larr; Back to Dashboard</Link>
        <h1 className="text-3xl md:text-4xl font-serif text-nature-900">Manage Users</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-nature-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-nature-50 border-b border-nature-100 text-gray-600 text-sm font-bold uppercase tracking-widest text-left">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Saved</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersDb.map(user => (
              <tr key={user.id} className="border-b border-nature-50 hover:bg-nature-50/50 transition">
                <td className="p-4 font-medium text-nature-900">{user.firstName} {user.lastName}</td>
                <td className="p-4 text-sm text-gray-600">{user.email}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs uppercase tracking-widest ${user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-green-100 text-green-700'}`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-600">{user.savedPosts?.length || 0}</td>
                <td className="p-4 text-right">
                  <button onClick={() => deleteUser(user.id)} disabled={user.role === 'admin'} className={`transition ${user.role === 'admin' ? 'text-gray-300 cursor-not-allowed' : 'text-red-400 hover:text-red-600'}`}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManageUsers;