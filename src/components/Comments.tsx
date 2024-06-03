// src/components/Comments.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comments: React.FC = () => {
  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/comments', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setComments(response.data.data);
    };
    fetchComments();
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
