import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nature-900 text-nature-50 pt-20 pb-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-serif text-4xl mb-6 font-bold tracking-tight">Floura.</h3>
            <p className="text-nature-200 text-sm leading-relaxed max-w-sm mb-8 font-light tracking-wide">
               Embracing a refined, nature-inspired lifestyle. Subscribe to our garden of thoughts to receive weekly insights, styling tips, and wellness articles.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="p-2 bg-nature-800 rounded-full hover:bg-nature-700 transition-colors text-white"><Instagram size={18} /></a>
               <a href="#" className="p-2 bg-nature-800 rounded-full hover:bg-nature-700 transition-colors text-white"><Twitter size={18} /></a>
               <a href="#" className="p-2 bg-nature-800 rounded-full hover:bg-nature-700 transition-colors text-white"><Facebook size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/blog" className="hover:text-nature-300 transition-colors">Our Blog</Link></li>
              <li><Link to="/about" className="hover:text-nature-300 transition-colors">About Floura</Link></li>
              <li><Link to="/contact" className="hover:text-nature-300 transition-colors">Contact Us</Link></li>
              <li><Link to="/pricing" className="hover:text-nature-300 transition-colors">Membership</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Legal</h4>
             <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-nature-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-nature-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-nature-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wider text-nature-300">
           <p>&copy; {new Date().getFullYear()} Floura Blog. All rights reserved.</p>
           <p className="mt-4 md:mt-0 opacity-70">Designed with passion and nature.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;