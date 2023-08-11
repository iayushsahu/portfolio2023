import React from "react";
// import jsonData from "../../static/data/about.json";

const About = () => {
  return (
    <div id="about-section-container">
      <div id="about-section-wrapper">
        <div id="about-section-row">
          <div className="about-coloumns">
            <div className="about-simple">
              <div className="about-logo">
                <span>
                  <img
                    src="https://github.com/iayushsahu/portfolio2023/blob/main/src/components/static/images/about/bhrish_logo.png?raw=true"
                    alt="img"
                  />
                </span>
              </div>
              <div className="about-name">
                <div className="about-title">
                  <span>Bhrish Labs</span>
                </div>
                <div className="about-position">
                  <span>software engineer</span>
                </div>
              </div>
            </div>
            <div className="about-hover">
              <div className="about-summary">
                <span>
                  As a software engineer at Bhrish, my role will entail
                  architecting, developing, and implementing sophisticated
                  frontend solutions using ReactJS, along with backend solutions
                  leveraging Java, Apache Camel, and Groovy. My primary duties
                  encompass:
                </span>
              </div>
              <div className="about-description">
                <ol type="i">
                  <li>
                    Collaborating closely with clients and stakeholders to gain
                    a comprehensive understanding of their requirements and
                    needs.
                  </li>
                  <li>
                    Devising and implementing viable solutions that optimize
                    customer experiences and streamline business processes.
                  </li>
                  <li>
                    Pioneering cutting-edge technologies, such as chatbots and
                    virtual assistants, to elevate customer satisfaction and
                    bolster productivity.
                  </li>
                  <li>
                    Crafting and executing intuitive and intelligent solutions
                    that seamlessly integrate into existing business ecosystems.
                  </li>
                  <li>
                    Harnessing my expertise in ReactJS and Java to proficiently
                    develop and maintain top-tier code that aligns with business
                    requirements and adheres to industry standards
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* ............... */}
        {/* <div id="about-section-row">
          {jsonData.map((item) => (
            <div className="about-coloumns" key={item.id}>

              <div className="about-simple">
                
                <div className="about-logo">
                  <span>
                    <img src={item.logo} alt={item.title} />
                  </span>
                </div>
                <div className="about-name">
                <div className="about-title">
                  <span>{item.title}</span>
                </div>
                <div className="about-position">
                  <span>{item.position}</span>
                </div>
              </div>
              </div>
              <div className="about-hover">
                <div className="about-summary">
                  <span>{item.summary}</span>
                </div>
                <div className="about-description">
                  <ol type="i">
                    {item.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default About;
