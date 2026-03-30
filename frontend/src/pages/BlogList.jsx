import { ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-32 pt-40 animate-fade-in">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif mb-8 text-nature-950 font-black">Our Journal</h1>
        <p className="text-xl text-gray-600 leading-relaxed font-light">Explore our collection of thoughts, insights, and stories celebrating nature, design, and thoughtful living.</p>
      </div>
      
      {/* Filters (Placeholder) */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-nature-200">
        <div className="flex items-center space-x-6 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto">
           <span className="text-sm font-bold uppercase tracking-widest text-nature-900 border-b-2 border-nature-900 pb-1 cursor-pointer">All</span>
           <span className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-nature-600 cursor-pointer transition">Lifestyle</span>
           <span className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-nature-600 cursor-pointer transition">Wellness</span>
           <span className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-nature-600 cursor-pointer transition">Travel</span>
        </div>
        <button className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-nature-700 bg-nature-50 px-4 py-2 rounded-lg hover:bg-nature-100 transition">
          <Filter size={16} className="mr-2" /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
            { img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop", cat: "Travel", title: "Wandering Through the Woods" },
            { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop", cat: "Lifestyle", title: "Ocean Breezes and Calm Spaces"},
            { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", cat: "Wellness", title: "Meditation in Nature"},
            { img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop", cat: "Lifestyle", title: "Bringing the Outdoors Inside"},
            { img: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?q=80&w=800&auto=format&fit=crop", cat: "Wellness", title: "Mindful Eating Aesthetics"},
            { img: "https://images.unsplash.com/photo-1507238692062-71c1f582daee?q=80&w=800&auto=format&fit=crop", cat: "Travel", title: "Cabin Retreats for Healing"}
        ].map((post, i) => (
          <Link to={`/blog/${i}`} key={i} className="group flex flex-col h-full cursor-pointer">
            <div className="h-72 rounded-3xl overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500 relative">
               <div className="absolute inset-0 bg-nature-900/10 group-hover:bg-transparent transition-colors z-10"></div>
               <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="flex-grow px-2">
              <span className="text-[10px] font-bold text-nature-500 uppercase tracking-widest mb-3 block">{post.cat}</span>
              <h3 className="text-2xl font-serif text-nature-900 group-hover:text-nature-600 transition-colors font-bold mb-3 leading-snug">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">Embrace the beauty of the outdoors with this deep dive into {post.cat.toLowerCase()} aesthetics and mindfulness techniques that will transform your day-to-day experience.</p>
              
              <div className="flex items-center pt-4 mt-auto border-t border-gray-100">
                 <div className="w-8 h-8 rounded-full bg-nature-200 overflow-hidden mr-3">
                   <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover" alt="Author" />
                 </div>
                 <div>
                    <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">Jane Doe</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Oct 10, 2023</p>
                 </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;