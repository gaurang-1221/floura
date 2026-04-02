import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useBlog } from '../context/BlogContext';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout, unsavePost } = useAuth();
  const { posts } = useBlog();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Profile');
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  if (!user) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-serif text-nature-900 mb-6">Please log in to view your dashboard.</h2>
        <Link to="/login" className="bg-nature-600 text-white px-6 py-3 rounded-md hover:bg-nature-700 transition">Go to Login</Link>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleRazorpay = () => {
    // Dummy Razorpay Interaction
    alert("Opening Razorpay Modal... (Mock)");
    setTimeout(() => {
       setShowPaymentSuccess(true);
       setTimeout(() => setShowPaymentSuccess(false), 5000);
    }, 1500);
  }

  const savedPosts = posts.filter(p => user.savedPosts?.includes(p.id));

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-serif text-nature-900">User Dashboard</h1>
        <button onClick={handleLogout} className="text-sm font-medium text-red-600 border border-red-200 px-4 py-2 rounded hover:bg-red-50 transition">Log Out</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 border-r border-nature-200 pr-6">
           <ul className="space-y-4">
              <li 
                onClick={() => setActiveTab('Profile')} 
                className={`font-medium cursor-pointer transition ${activeTab === 'Profile' ? 'text-nature-900 font-bold' : 'text-gray-600 hover:text-nature-600'}`}
              >Profile</li>
              <li 
                onClick={() => setActiveTab('Saved')} 
                className={`font-medium cursor-pointer transition ${activeTab === 'Saved' ? 'text-nature-900 font-bold' : 'text-gray-600 hover:text-nature-600'}`}
              >Saved Posts ({user.savedPosts?.length || 0})</li>
              <li 
                onClick={() => setActiveTab('Premium')} 
                className={`font-medium cursor-pointer transition ${activeTab === 'Premium' ? 'text-nature-900 font-bold' : 'text-gray-600 hover:text-nature-600'}`}
              >Floura Premium</li>
           </ul>
        </div>
        
        <div className="md:col-span-3">
          {activeTab === 'Profile' && (
            <div className="bg-white p-8 rounded-xl border border-nature-100 shadow-sm">
              <h2 className="text-2xl font-serif mb-4 text-nature-900">Welcome back, {user.firstName}!</h2>
              <p className="text-gray-700 mb-6">Here you can manage your account details and view your reading history.</p>
              
              <div className="space-y-4">
                <div><span className="font-medium text-gray-700">Name:</span> {user.firstName} {user.lastName}</div>
                <div><span className="font-medium text-gray-700">Email:</span> {user.email}</div>
                <div><span className="font-medium text-gray-700">Role:</span> <span className="capitalize">{user.role}</span></div>
              </div>
              
              {user.role === 'admin' && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link to="/admin" className="inline-block bg-nature-800 text-white px-6 py-2 rounded-md hover:bg-nature-900 transition">Go to Admin Dashboard</Link>
                </div>
              )}
            </div>
          )}

          {activeTab === 'Saved' && (
            <div className="bg-white p-8 rounded-xl border border-nature-100 shadow-sm min-h-[300px]">
              <h2 className="text-2xl font-serif mb-6 text-nature-900">Your Saved Posts</h2>
              {savedPosts.length === 0 ? (
                <p className="text-gray-500">You haven't saved any posts yet. <Link to="/blog" className="text-nature-600 hover:underline">Explore the journal.</Link></p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {savedPosts.map(post => (
                     <div key={post.id} className="border border-nature-100 rounded-lg overflow-hidden flex flex-col hover:shadow-md transition">
                       <img src={post.image} alt={post.title} className="h-32 w-full object-cover" />
                       <div className="p-4 flex flex-col flex-grow">
                          <span className="text-xs font-bold text-nature-500 uppercase tracking-widest mb-1">{post.category}</span>
                          <h3 className="font-serif text-lg text-gray-900 mb-2 leading-tight">{post.title}</h3>
                          <div className="mt-auto flex justify-between items-center pt-3 border-t border-gray-50">
                            <Link to={`/blog/${post.slug}`} className="text-xs font-medium text-nature-600 hover:text-nature-800">Read Post</Link>
                            <button onClick={() => unsavePost(post.id)} className="text-xs text-red-500 hover:underline">Unsave</button>
                          </div>
                       </div>
                     </div>
                   ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'Premium' && (
             <div className="bg-gradient-to-br from-nature-50 to-nature-100 p-8 rounded-xl border border-nature-200 shadow-sm text-center">
               <h2 className="text-2xl font-serif mb-4 text-nature-900">Floura Premium (₹999/yr)</h2>
               <p className="text-nature-700 mb-8 max-w-md mx-auto">Support our writers and get access to exclusive ad-free content, early botanical guides, and premium photography.</p>
               
               {showPaymentSuccess ? (
                 <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                   Payment successful! Welcome to Floura Premium.
                 </div>
               ) : (
                 <button onClick={handleRazorpay} className="bg-nature-800 text-white font-bold tracking-widest uppercase text-sm px-8 py-4 rounded-full hover:bg-nature-900 transition shadow-lg transform hover:-translate-y-1">
                   Subscribe via Razorpay
                 </button>
               )}
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;