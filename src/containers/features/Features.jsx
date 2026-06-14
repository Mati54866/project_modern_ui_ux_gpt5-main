import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Next-Level Language Understanding',
    text: 'GPT-5 comprehends context, tone, and intent with superhuman precision, enabling nuanced conversations, document analysis, and creative generation at an entirely new level.',
  },
  {
    title: 'Real-Time Knowledge & Reasoning',
    text: 'Unlike its predecessors, GPT-5 combines up-to-date world knowledge with chain-of-thought reasoning to deliver accurate, well-grounded responses in dynamic environments.',
  },
  {
    title: 'Code Generation & Debugging',
    text: 'GPT-5 writes, reviews, and debugs complex code across dozens of programming languages, accelerating software development and dramatically reducing time-to-production.',
  },
  {
    title: 'Multimodal Capabilities',
    text: 'GPT-5 processes text, images, audio, and structured data simultaneously, making it the world\'s most versatile AI model for real-world applications.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p data-tooltip="✨ Demo only — no backend connected">Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
