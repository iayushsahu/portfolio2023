import React from "react";
import jsonData from "../../static/data/about.json";

const About = () => {
  return (
    <div id="about-section-container">
      <div id="about-section-wrapper">
        <div id="about-section-row">
          {jsonData.map((item) => (
            <div className="about-coloumns" key={item.id}>
              <div className="about-logo">
                <span><img src={item.logo} alt={item.title}/></span>
              </div>
              <div className="about-title">
                <span>{item.title}</span>
              </div>
              <div className="about-position">
                <span>{item.position}</span>
              </div>
              <div className="about-summary">
                <span>{item.summary}</span>
                <ol className="about-description">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
