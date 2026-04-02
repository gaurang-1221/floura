import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialPosts, initialCategories, initialTags } from '../data/mockData';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(initialCategories);
  const [tags, setTags] = useState(initialTags);

  useEffect(() => {
    const storedPosts = localStorage.getItem('floura_posts');
    if (!storedPosts) {
      localStorage.setItem('floura_posts', JSON.stringify(initialPosts));
      setPosts(initialPosts);
    } else {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const addPost = (post) => {
    const newPost = { ...post, id: `post_${Date.now()}` };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('floura_posts', JSON.stringify(updatedPosts));
  };

  const updatePost = (id, updatedData) => {
    const updatedPosts = posts.map(p => p.id === id ? { ...p, ...updatedData } : p);
    setPosts(updatedPosts);
    localStorage.setItem('floura_posts', JSON.stringify(updatedPosts));
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter(p => p.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('floura_posts', JSON.stringify(updatedPosts));
  };

  const getPost = (id) => {
     return posts.find(p => p.id === id) || posts.find(p => p.slug === id);
  }

  return (
    <BlogContext.Provider value={{ posts, categories, tags, addPost, updatePost, deletePost, getPost }}>
      {children}
    </BlogContext.Provider>
  );
};
