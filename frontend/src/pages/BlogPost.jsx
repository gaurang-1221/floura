const BlogPost = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-10 text-center">
        <span className="text-nature-600 uppercase text-xs font-bold tracking-widest mb-4 block">Lifestyle</span>
        <h1 className="text-4xl md:text-5xl font-serif text-nature-900 mb-6 leading-tight">Sample Blog Post Title for Floura Reader</h1>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-nature-300 mr-2"></div>
            <span className="font-medium text-gray-700">Jane Doe</span>
          </div>
          <span>•</span>
          <span>Oct 10, 2023</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </header>
      <div className="h-80 md:h-[450px] bg-nature-200 w-full rounded-xl mb-12 shadow-sm"></div>
      <div className="prose lg:prose-xl max-w-none text-gray-800 prose-headings:font-serif prose-a:text-nature-600 hover:prose-a:text-nature-800 focus:outline-none">
        <p>This is a placeholder for the blog post content. The typography relies on a clean Lato sans-serif font for readability, paired perfectly with the classical serif headings.</p>
        <h3>Embracing the Journey</h3>
        <p>Content goes here. It flows wonderfully across the page.</p>
      </div>
    </article>
  );
};

export default BlogPost;