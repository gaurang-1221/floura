const Dashboard = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-serif mb-8 text-nature-900">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 border-r border-nature-200 pr-6">
           <ul className="space-y-4">
              <li className="font-medium text-nature-700 cursor-pointer">Profile</li>
              <li className="text-gray-600 hover:text-nature-600 cursor-pointer transition">Saved Posts</li>
              <li className="text-gray-600 hover:text-nature-600 cursor-pointer transition">Settings</li>
           </ul>
        </div>
        <div className="md:col-span-3">
          <div className="bg-white p-8 rounded-xl border border-nature-100 shadow-sm">
            <h2 className="text-2xl font-serif mb-4">Welcome back, Jane!</h2>
            <p className="text-gray-700">Here you can manage your account details and view your reading history.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;