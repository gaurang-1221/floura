import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    const success = login(email, password);
    if (success) {
      navigate('/dashboard'); // Will be redirected to admin if admin by routing logic or layout, but simple here
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-24">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-nature-100">
        <h1 className="text-3xl font-serif mb-2 text-center text-nature-900">Welcome Back</h1>
        <p className="text-center text-gray-500 text-sm mb-8">Sign in to your Floura account</p>
        
        {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-nature-500" 
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-nature-500" 
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-nature-600 shadow-sm focus:border-nature-300 focus:ring focus:ring-nature-200 focus:ring-opacity-50" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-nature-600 hover:text-nature-800">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-nature-600 text-white rounded-md p-3 font-medium hover:bg-nature-700 transition">Sign In</button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account? <a href="/register" className="text-nature-600 font-medium hover:text-nature-800">Sign up</a>
        </div>
      </div>
    </div>
  );
};
export default Login;