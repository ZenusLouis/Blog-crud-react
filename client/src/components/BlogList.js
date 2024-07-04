import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api';
import './css/BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get('/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  };

  const handleRemoveBlog = (id) => {
    axios.delete(`/api/blogs/${id}`)
      .then(() => {
        // Remove the deleted blog from the local state
        setBlogs(blogs.filter(blog => blog._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="blog-list">
      <h1>Blog List</h1>
      <button className="create-button">
        <Link to="/create">Create New Blog</Link>
      </button>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id} className="blog-item">
            <div>
              <h2>{blog.title}</h2>
              <p>{blog.content.slice(0, 100)}...</p>
              <div className="button-group">
                <button className="detail-button">
                  <Link to={`/blogs/${blog._id}`}>See Details</Link>
                </button>
                <button className="edit-button">
                  <Link to={`/edit/${blog._id}`}>Edit</Link>
                </button>
                <button className="delete-button" onClick={() => handleRemoveBlog(blog._id)}>
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
