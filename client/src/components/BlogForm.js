import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';
import './css/BlogForm.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`/api/blogs/${id}`)
        .then(res => {
          setTitle(res.data.title);
          setContent(res.data.content);
          setAuthor(res.data.author);
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, content, author };

    if (id) {
      axios.put(`/api/blogs/${id}`, blog)
        .then(() => {
          window.location.href = `/blogs/${id}`;
        })
        .catch(err => console.log(err));
    } else {
      axios.post('/api/blogs', blog)
        .then(res => {
          window.location.href = `/blogs/${res.data._id}`;
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="blog-form">
      <h1>{id ? 'Edit Blog' : 'Create Blog'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button className="back-button">
        <a href="/">Back to Home</a>
      </button>
    </div>
  );
};

export default BlogForm;