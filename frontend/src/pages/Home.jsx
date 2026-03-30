import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2070&auto=format&fit=crop" 
            alt="Nature Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-[#FCFAF8]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <span className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-nature-800 uppercase bg-white/60 backdrop-blur-md rounded-full shadow-sm border border-white/40">
            <Leaf size={14} className="mr-2" /> Lifestyle & Wellness
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-nature-950 mb-6 drop-shadow-sm font-black leading-tight">
            Cultivate a Beautiful,<br className="hidden sm:block"/>Grounded Life
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-10 opacity-90 font-medium leading-relaxed drop-shadow-sm">
            Embrace a fresh, elegant, and nature-inspired way of living with our carefully curated content, stories, and mindful guides.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/blog" className="inline-flex items-center bg-nature-800 text-white px-8 py-3.5 rounded-full hover:bg-nature-900 transition-all shadow-lg hover:shadow-xl font-bold tracking-widest uppercase text-xs transform hover:-translate-y-1">
              Read Our Stories
            </Link>
            <Link to="/about" className="inline-flex items-center bg-white/80 backdrop-blur-sm text-nature-900 border border-nature-200 px-8 py-3.5 rounded-full hover:bg-white hover:border-nature-300 transition-all shadow-sm hover:shadow-md font-bold tracking-widest uppercase text-xs transform hover:-translate-y-1">
              Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full relative z-20 -mt-10">
        <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-4xl font-serif text-nature-900 font-bold mb-2">Featured Stories</h2>
               <p className="text-gray-500 font-medium tracking-wide">Freshly picked insights for your daily growth.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center text-sm font-bold uppercase tracking-widest text-nature-600 hover:text-nature-800 transition-colors group">
                View All <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop", cat: "Lifestyle", title: "Bringing the Outdoors Inside", desc: "Learn how to seamlessly integrate botanical elements into your living spaces for a calmer atmosphere." },
            { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop", cat: "Wellness", title: "The Art of Slow Mornings", desc: "Discover morning rituals that set a peaceful tone for your entire day, grounded in mindfulness." },
            { img: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop", cat: "Travel", title: "Hidden Botanical Gardens", desc: "A photographic journey through some of the world's most breathtaking and secluded floral preserves." }
          ].map((post, i) => (
            <Link to="/blog/1" key={i} className="group bg-white rounded-2xl shadow-sm border border-nature-100 overflow-hidden hover:shadow-2xl hover:border-nature-200 transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-nature-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <span className="text-xs font-bold text-nature-600 uppercase tracking-widest mb-3 block">{post.cat}</span>
                <h3 className="text-2xl font-serif text-gray-900 group-hover:text-nature-700 transition-colors font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{post.desc}</p>
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-nature-800 group-hover:text-nature-600 transition-colors mt-auto">
                  Read Article <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-24 bg-white border-y border-nature-100 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif mb-12 text-nature-900 font-bold">Explore Our Garden</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Home & Living', 'Wellness & Mind', 'Sustainable Travel', 'Personal Stories', 'Nourishing Recipes'].map(cat => (
                <span key={cat} className="px-6 py-3 border border-nature-200 rounded-full text-nature-700 hover:bg-nature-50 hover:border-nature-400 hover:shadow-md cursor-pointer transition-all duration-300 text-sm font-bold uppercase tracking-wider transform hover:-translate-y-0.5">
                  {cat}
                </span>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;