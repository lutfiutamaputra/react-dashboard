// src/components/Posts.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/posts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setPosts(response.data.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
