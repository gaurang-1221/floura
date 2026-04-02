import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialUsers } from '../data/mockData';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [usersDb, setUsersDb] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('floura_users');
    if (!storedUsers) {
      localStorage.setItem('floura_users', JSON.stringify(initialUsers));
      setUsersDb(initialUsers);
    } else {
      setUsersDb(JSON.parse(storedUsers));
    }

    const token = localStorage.getItem('floura_token');
    const storedUser = localStorage.getItem('floura_user');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const foundUser = usersDb.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const u = { ...foundUser };
      delete u.password;
      setUser(u);
      localStorage.setItem('floura_token', 'mock_jwt_token_123');
      localStorage.setItem('floura_user', JSON.stringify(u));
      return true;
    }
    return false;
  };

  const register = (userData) => {
    const exists = usersDb.find(u => u.email === userData.email);
    if (exists) return false;

    const newUser = {
      ...userData,
      id: `user_${Date.now()}`,
      role: 'user',
      savedPosts: []
    };
    const updatedDb = [...usersDb, newUser];
    setUsersDb(updatedDb);
    localStorage.setItem('floura_users', JSON.stringify(updatedDb));
    
    // Auto login
    const u = { ...newUser };
    delete u.password;
    setUser(u);
    localStorage.setItem('floura_token', 'mock_jwt_token_123');
    localStorage.setItem('floura_user', JSON.stringify(u));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('floura_token');
    localStorage.removeItem('floura_user');
  };

  const deleteUser = (userId) => {
    const updatedDb = usersDb.filter(u => u.id !== userId);
    setUsersDb(updatedDb);
    localStorage.setItem('floura_users', JSON.stringify(updatedDb));
  }

  const savePost = (postId) => {
     if(!user) return;
     const updatedUser = { ...user, savedPosts: [...(user.savedPosts || []), postId] };
     setUser(updatedUser);
     localStorage.setItem('floura_user', JSON.stringify(updatedUser));
     
     const updatedDb = usersDb.map(u => u.id === user.id ? updatedUser : u);
     setUsersDb(updatedDb);
     localStorage.setItem('floura_users', JSON.stringify(updatedDb));
  }

  const unsavePost = (postId) => {
     if(!user) return;
     const updatedUser = { ...user, savedPosts: (user.savedPosts || []).filter(id => id !== postId) };
     setUser(updatedUser);
     localStorage.setItem('floura_user', JSON.stringify(updatedUser));

     const updatedDb = usersDb.map(u => u.id === user.id ? updatedUser : u);
     setUsersDb(updatedDb);
     localStorage.setItem('floura_users', JSON.stringify(updatedDb));
  }

  return (
    <AuthContext.Provider value={{ user, usersDb, login, register, logout, deleteUser, savePost, unsavePost }}>
      {children}
    </AuthContext.Provider>
  );
};
