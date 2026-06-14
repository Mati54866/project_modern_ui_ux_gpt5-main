import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4 data-tooltip="✨ Demo only — no backend connected">Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>GPT-5 unlocks a new era of human-AI collaboration. From scientific research and creative writing to autonomous software engineering and medical diagnostics — the applications of GPT-5 extend far beyond what any previous model could achieve. The future is here.</p>
      <h4 data-tooltip="✨ Demo only — no backend connected">Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
