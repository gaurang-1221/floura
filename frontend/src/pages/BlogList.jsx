import { useState, useEffect } from 'react';
import { ArrowRight, Filter, Search } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { Helmet } from 'react-helmet-async';

const BlogList = () => {
  const { posts, categories } = useBlog();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filteredPosts = posts.filter(post => {
    const matchCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-32 pt-40 animate-fade-in">
      <Helmet>
        <title>Journal | Floura Lifestyle Blog</title>
        <meta name="description" content="Explore our collection of thoughts, insights, and stories celebrating nature, design, and thoughtful living." />
      </Helmet>
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif mb-8 text-nature-950 font-black">Our Journal</h1>
        <p className="text-xl text-gray-600 leading-relaxed font-light">Explore our collection of thoughts, insights, and stories celebrating nature, design, and thoughtful living.</p>
      </div>
      
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-nature-200">
        <div className="flex items-center space-x-6 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto">
           <span 
              onClick={() => { setActiveCategory('All'); setSearchParams({}); }}
              className={`text-sm font-bold uppercase tracking-widest cursor-pointer transition whitespace-nowrap ${activeCategory === 'All' ? 'text-nature-900 border-b-2 border-nature-900 pb-1' : 'text-gray-400 hover:text-nature-600'}`}
           >All</span>
           {categories.map(cat => (
             <span 
               key={cat}
               onClick={() => { setActiveCategory(cat); setSearchParams({ category: cat }); }}
               className={`text-sm font-bold uppercase tracking-widest cursor-pointer transition whitespace-nowrap ${activeCategory === cat ? 'text-nature-900 border-b-2 border-nature-900 pb-1' : 'text-gray-400 hover:text-nature-600'}`}
             >{cat}</span>
           ))}
        </div>
        
        <div className="relative mt-4 md:mt-0 w-full md:w-64">
           <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
           <input 
             type="text" 
             placeholder="Search posts..."
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="w-full bg-nature-50 border border-nature-200 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-nature-500"
           />
        </div>
      </div>

      {filteredPosts.length === 0 ? (
         <div className="text-center py-20 text-gray-500">
            No posts found matching your criteria.
         </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="group flex flex-col h-full cursor-pointer">
              <div className="h-72 rounded-3xl overflow-hidden mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500 relative">
                 <div className="absolute inset-0 bg-nature-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="flex-grow px-2 flex flex-col">
                <span className="text-[10px] font-bold text-nature-500 uppercase tracking-widest mb-3 block">{post.category}</span>
                <h3 className="text-2xl font-serif text-nature-900 group-hover:text-nature-600 transition-colors font-bold mb-3 leading-snug">{post.title}</h3>
                <div className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <div className="flex items-center pt-4 mt-auto border-t border-gray-100">
                   <div className="w-8 h-8 rounded-full bg-nature-200 overflow-hidden mr-3">
                     <img src={post.author?.avatar || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"} className="w-full h-full object-cover" alt="Author" />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">{post.author?.name || "Floura Author"}</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{post.date}</p>
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;