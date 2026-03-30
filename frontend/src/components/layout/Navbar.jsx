import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <span className="text-3xl font-serif font-black tracking-tight text-nature-900 group-hover:text-nature-700 transition-colors">
              Floura<span className="text-nature-500">.</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Blog', 'About', 'Contact'].map(item => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className={`text-sm font-semibold uppercase tracking-widest transition-colors hover:text-nature-600 ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-nature-700 border-b-2 border-nature-500 pb-1' : 'text-gray-600'}`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-500 hover:text-nature-700 transition">
              <Search size={20} strokeWidth={2} />
            </button>
            <Link to="/login" className="flex items-center text-gray-500 hover:text-nature-700 transition">
               <User size={20} strokeWidth={2} className="mr-2" />
               <span className="text-sm font-semibold uppercase tracking-widest">Sign In</span>
            </Link>
            <Link to="/register" className="bg-nature-800 text-white hover:bg-nature-600 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-nature-800 focus:outline-none">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;