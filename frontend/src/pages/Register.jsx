const Register = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-20">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-nature-100">
        <h1 className="text-3xl font-serif mb-2 text-center text-nature-900">Join Floura</h1>
        <p className="text-center text-gray-500 text-sm mb-8">Create your account to save posts and read ad-free</p>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-nature-500" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-nature-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-nature-500" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full bg-nature-600 text-white rounded-md p-3 mt-4 hover:bg-nature-700 transition font-medium">Create Account</button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-nature-600 font-medium hover:text-nature-800">Sign in</a>
        </div>
      </div>
    </div>
  );
};
export default Register;