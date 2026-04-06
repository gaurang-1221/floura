import { useParams, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { useAuth } from '../context/AuthContext';
import { Facebook, Twitter, Instagram, Linkedin, Bookmark, BookmarkCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { slug } = useParams();
  const { getPost, posts } = useBlog();
  const { user, savePost, unsavePost } = useAuth();
  
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <Helmet>
          <title>Post Not Found | Floura</title>
        </Helmet>
        <h2 className="text-3xl font-serif text-nature-900 mb-4">Post not found</h2>
        <Link to="/blog" className="text-nature-600 hover:underline">Return to Journal</Link>
      </div>
    );
  }

  const isSaved = user?.savedPosts?.includes(post.id);

  const handleSaveToggle = () => {
    if (!user) {
      alert("Please log in to save posts.");
      return;
    }
    if (isSaved) {
      unsavePost(post.id);
    } else {
      savePost(post.id);
    }
  };

  const relatedPosts = posts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <article className="animate-fade-in">
      <Helmet>
        <title>{post.title} | Floura Blog</title>
        <meta name="description" content={post.content.replace(/<[^>]+>/g, '').substring(0, 160) + '...'} />
      </Helmet>
      <header className="max-w-4xl mx-auto px-4 py-16 text-center">
        <span className="text-nature-600 uppercase text-xs font-bold tracking-widest mb-4 block cursor-pointer hover:text-nature-800 transition">
          <Link to={`/blog?category=${post.category}`}>{post.category}</Link>
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-nature-950 mb-6 leading-tight font-black">{post.title}</h1>
        
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-8">
          <div className="flex items-center">
            <img src={post.author?.avatar} alt={post.author?.name} className="w-10 h-10 rounded-full object-cover mr-3" />
            <span className="font-medium text-gray-700">{post.author?.name}</span>
          </div>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        {/* Share & Save Actions */}
        <div className="flex justify-center items-center space-x-4">
           <button onClick={handleSaveToggle} className="flex items-center text-sm font-medium border border-nature-200 px-4 py-2 rounded-full hover:bg-nature-50 transition">
             {isSaved ? <><BookmarkCheck size={16} className="mr-2 text-nature-600" /> Saved</> : <><Bookmark size={16} className="mr-2" /> Save Post</>}
           </button>
           <div className="h-4 w-px bg-gray-300"></div>
           <div className="flex space-x-3 text-gray-400">
             <a href="#" className="hover:text-[#25D366] transition" aria-label="Share on WhatsApp"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></a>
             <a href="#" className="hover:text-[#1877F2] transition" aria-label="Share on Facebook"><Facebook size={20} /></a>
             <a href="#" className="hover:text-[#1DA1F2] transition" aria-label="Share on Twitter"><Twitter size={20} /></a>
             <a href="#" className="hover:text-[#E4405F] transition" aria-label="Share on Instagram"><Instagram size={20} /></a>
           </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 mb-16">
         <img src={post.image} alt={post.title} className="w-full h-80 md:h-[500px] object-cover rounded-2xl shadow-md" />
      </div>

      <div className="max-w-3xl mx-auto px-4 mb-20">
         <div className="prose lg:prose-xl max-w-none text-gray-800 prose-headings:font-serif prose-headings:text-nature-950 prose-a:text-nature-600 hover:prose-a:text-nature-800 focus:outline-none" dangerouslySetInnerHTML={{ __html: post.content }}>
         </div>

         <div className="mt-12 flex flex-wrap gap-2">
           {post.tags?.map(tag => (
             <span key={tag} className="px-3 py-1 bg-nature-50 text-nature-700 text-xs font-bold uppercase tracking-widest rounded-full">{tag}</span>
           ))}
         </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-nature-50 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-serif text-nature-900 mb-10 text-center">More from {post.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(rp => (
                <Link to={`/blog/${rp.slug}`} key={rp.id} className="group bg-white rounded-2xl shadow-sm border border-nature-100 overflow-hidden hover:shadow-xl transition">
                  <div className="h-48 overflow-hidden">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover transform group-hover:scale-105 transition" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-serif text-gray-900 mb-2 group-hover:text-nature-600 transition">{rp.title}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{rp.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};

export default BlogPost;