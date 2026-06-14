import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-5" text="GPT-5 is OpenAI's fifth-generation large language model, representing a quantum leap in artificial intelligence. It features advanced multimodal understanding, enhanced reasoning, real-time knowledge, and the ability to handle complex, multi-step tasks with remarkable accuracy." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Advanced Reasoning" text="GPT-5 tackles complex logical problems with near-human reasoning, excelling at math, coding, science, and multi-step decision making." />
      <Feature title="Multimodal Intelligence" text="GPT-5 seamlessly understands images, audio, video, and text — enabling richer, context-aware interactions across all media types." />
      <Feature title="Autonomous Agents" text="GPT-5 powers autonomous AI agents that can plan, execute tasks, browse the web, write code, and adapt dynamically to achieve complex goals." />
    </div>
  </div>
);

export default WhatGPT3;
