import React, { useState } from 'react';
import './FAQ.css'; // Ensure you create this CSS file for styling

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    { question: 'What is this website about?', answer: 'This website is a demo for creating a React app with navigation and different pages.' },
    { question: 'How do I use the tabs?', answer: 'Click on the tabs to scroll to the respective content sections.' },
    { question: 'Can I add more tabs?', answer: 'Yes, you can add more tabs by creating new components and updating the navigation links.' },
    { question: 'Where can I find the source code?', answer: 'The source code is available on GitHub. Check the repository link provided in the project description.' },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleExpand(index)}
            >
              {faq.question}
              <span className="plus-sign">{expandedIndex === index ? '-' : '+'}</span>
            </button>
            {expandedIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
