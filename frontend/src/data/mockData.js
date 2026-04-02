// mockData.js
export const initialUsers = [
  {
    id: "user_1",
    firstName: "Admin",
    lastName: "User",
    email: "admin@floura.com",
    password: "password123", // mocked validation
    role: "admin",
    savedPosts: []
  },
  {
    id: "user_2",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "password123",
    role: "user",
    savedPosts: ["post_2"]
  }
];

export const initialCategories = [
  'Home & Living', 'Wellness', 'Travel', 'Personal Stories', 'Food'
];

export const initialTags = ['Minimalism', 'Self Care', 'Nature', 'Interior', 'Botanical'];

export const initialPosts = [
  {
    id: "post_1",
    title: "Bringing the Outdoors Inside",
    slug: "bringing-the-outdoors-inside",
    author: { name: "Jane Doe", id: "user_1", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" },
    category: "Home & Living",
    tags: ["Interior", "Botanical"],
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop",
    content: "<p>Learn how to seamlessly integrate botanical elements into your living spaces for a calmer atmosphere. Start with low-maintenance plants like snake plants, and slowly introduce vines along bookshelves.</p><p>Bringing green into your workspace also improves concentration and mental wellbeing.</p>",
    date: "Oct 10, 2023",
    featured: true
  },
  {
    id: "post_2",
    title: "The Art of Slow Mornings",
    slug: "the-art-of-slow-mornings",
    author: { name: "Jane Doe", id: "user_1", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" },
    category: "Wellness",
    tags: ["Self Care", "Minimalism"],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    content: "<p>Discover morning rituals that set a peaceful tone for your entire day, grounded in mindfulness. Ditch the phone for the first hour of your day.</p> <h3>Brew your coffee mindfully</h3> <p>Take time to listen to the sounds of morning.</p>",
    date: "Oct 12, 2023",
    featured: true
  },
  {
    id: "post_3",
    title: "Hidden Botanical Gardens",
    slug: "hidden-botanical-gardens",
    author: { name: "Alice Springs", id: "user_3", avatar: "https://images.unsplash.com/photo-1507238692062-71c1f582daee?q=80&w=100&auto=format&fit=crop" },
    category: "Travel",
    tags: ["Nature", "Travel"],
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop",
    content: "<p>A photographic journey through some of the world's most breathtaking and secluded floral preserves.</p>",
    date: "Oct 15, 2023",
    featured: true
  },
  {
    id: "post_4",
    title: "Mindful Eating Aesthetics",
    slug: "mindful-eating-aesthetics",
    author: { name: "David Chef", id: "user_4", avatar: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=100&auto=format&fit=crop" },
    category: "Food",
    tags: ["Self Care"],
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?q=80&w=800&auto=format&fit=crop",
    content: "<p>Eating isn't just about nutrition, it's about the aesthetic of the plate. Enjoy every bite.</p>",
    date: "Oct 18, 2023",
    featured: false
  }
];
