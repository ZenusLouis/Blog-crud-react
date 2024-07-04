import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../api';
import './css/BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`/api/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>Author: {blog.author}</p>
      <p>Date: {new Date(blog.createdAt).toLocaleDateString()}</p>
      <button className="edit-button">
        <Link to={`/edit/${blog._id}`}>Edit</Link>
      </button>
      <button className="back-button">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default BlogDetail;
