import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Mar 14, 2025" text="GPT-5 and OpenAI is the future. Let us explore how it is changing everything." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Apr 02, 2025" text="How GPT-5 is revolutionizing software development and automated coding workflows." />
        <Article imgUrl={blog03} date="Apr 18, 2025" text="GPT-5 multimodal capabilities: understanding images, audio, and video in real time." />
        <Article imgUrl={blog04} date="May 07, 2025" text="Building autonomous AI agents with GPT-5: possibilities and best practices." />
        <Article imgUrl={blog05} date="May 25, 2025" text="GPT-5 vs its predecessors: a deep dive into performance, reasoning, and accuracy." />
      </div>
    </div>
  </div>
);

export default Blog;
