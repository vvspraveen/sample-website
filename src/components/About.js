import React from 'react';
import './About.css'; // Make sure to create and include the CSS file for styling

const About = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">About</h1>
      <div className="about-content">
        <div className="about-column left">
          <img src="cat.jpg" alt="About" className="about-image" />
        </div>
        <div className="about-column right">
          <p className="about-text">
            This is some text about the topic. You can include details about your application, company, or whatever content is relevant.
          </p>
          <button className="about-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
