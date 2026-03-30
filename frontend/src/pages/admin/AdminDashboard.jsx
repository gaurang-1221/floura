const AdminDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif mb-8 text-nature-900">Admin Dashboard</h1>
      <div className="mb-8 flex space-x-4">
         <a href="/admin/posts" className="bg-nature-100 text-nature-800 px-4 py-2 rounded-md hover:bg- प्रकृति-200 transition font-medium">Manage Posts</a>
         <a href="/admin/users" className="bg-nature-100 text-nature-800 px-4 py-2 rounded-md hover:bg- प्रकृति-200 transition font-medium">Manage Users</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-xl border border-nature-100 text-center shadow-sm">
          <h3 className="text-lg font-medium text-gray-500 uppercase tracking-widest">Total Posts</h3>
          <p className="text-4xl font-serif text-nature-800 mt-4">12</p>
        </div>
        <div className="bg-white p-8 rounded-xl border border-nature-100 text-center shadow-sm">
          <h3 className="text-lg font-medium text-gray-500 uppercase tracking-widest">Total Users</h3>
          <p className="text-4xl font-serif text-nature-800 mt-4">45</p>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;