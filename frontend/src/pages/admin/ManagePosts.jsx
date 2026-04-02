import { useState } from 'react';
import { useBlog } from '../../context/BlogContext';
import { Link } from 'react-router-dom';
import { Trash2, Edit, Plus } from 'lucide-react';

const ManagePosts = () => {
  const { posts, deletePost, addPost } = useBlog();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', slug: '', category: 'Lifestyle', content: '', date: new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'}), image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800' });

  const handleAdd = (e) => {
    e.preventDefault();
    addPost({ ...newPost, tags: [] });
    setShowAddForm(false);
    setNewPost({ title: '', slug: '', category: 'Lifestyle', content: '', date: new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'}), image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link to="/admin" className="text-sm font-bold text-nature-600 hover:underline block mb-2">&larr; Back to Dashboard</Link>
          <h1 className="text-3xl md:text-4xl font-serif text-nature-900">Manage Posts</h1>
        </div>
        <button onClick={() => setShowAddForm(!showAddForm)} className="flex items-center bg-nature-800 text-white px-4 py-2 rounded hover:bg-nature-900 transition text-sm font-medium">
          <Plus size={16} className="mr-2" /> Add Post
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-nature-50 p-6 rounded-lg mb-8 border border-nature-200 shadow-sm space-y-4">
          <h2 className="text-xl font-serif text-nature-900 font-bold mb-4">Create New Post</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Title</label><input required type="text" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, '-')})} className="w-full p-2 border rounded" /></div>
            <div><label className="block text-sm font-medium mb-1">Category</label><input required type="text" value={newPost.category} onChange={e => setNewPost({...newPost, category: e.target.value})} className="w-full p-2 border rounded" /></div>
            <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Image URL</label><input required type="text" value={newPost.image} onChange={e => setNewPost({...newPost, image: e.target.value})} className="w-full p-2 border rounded" /></div>
            <div className="md:col-span-2"><label className="block text-sm font-medium mb-1">Content Format HTML</label><textarea required rows={4} value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} className="w-full p-2 border rounded" /></div>
          </div>
          <button type="submit" className="bg-nature-600 text-white px-6 py-2 rounded hover:bg-nature-700 transition">Save Post</button>
          <button type="button" onClick={() => setShowAddForm(false)} className="ml-4 text-gray-500 hover:underline">Cancel</button>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-nature-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-nature-50 border-b border-nature-100 text-gray-600 text-sm font-bold uppercase tracking-widest text-left">
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} className="border-b border-nature-50 hover:bg-nature-50/50 transition">
                <td className="p-4">
                  <div className="font-medium text-nature-900">{post.title}</div>
                  <div className="text-xs text-gray-500">{post.slug}</div>
                </td>
                <td className="p-4"><span className="bg-nature-100 text-nature-700 px-2 py-1 rounded text-xs">{post.category}</span></td>
                <td className="p-4 text-sm text-gray-600">{post.date}</td>
                <td className="p-4 text-right">
                  <button className="text-gray-400 hover:text-nature-600 mr-4 transition"><Edit size={16} /></button>
                  <button onClick={() => deletePost(post.id)} className="text-red-400 hover:text-red-600 transition"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ManagePosts;