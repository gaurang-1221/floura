import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'glass py-3' : 'bg-transparent py-5'}`}>
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

          {/* Desktop Actions */}
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-nature-800 focus:outline-none transition-transform"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-nature-100 shadow-xl py-6 px-6 animate-fade-in flex flex-col space-y-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {['Home', 'Blog', 'About', 'Contact'].map(item => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className={`text-lg font-bold uppercase tracking-widest transition-colors ${location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'text-nature-700' : 'text-gray-600 hover:text-nature-600'}`}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="h-px w-full bg-nature-100 my-4"></div>
          <div className="flex flex-col space-y-4">
            <Link to="/login" className="flex items-center text-gray-600 hover:text-nature-700 transition font-semibold text-lg uppercase tracking-widest">
               <User size={20} strokeWidth={2} className="mr-3" /> Sign In
            </Link>
            <Link to="/register" className="bg-nature-800 text-white text-center hover:bg-nature-600 px-6 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all shadow-md">
              Subscribe Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;