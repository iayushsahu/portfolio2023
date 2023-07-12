import React, { useState, useEffect } from "react";
import Logo from "../static/images/logo.png"
import BGPicture1 from "../static/images/blurBg.png";
import BGPicture2 from "../static/images/computer-img.jpeg";

const Navbar = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    // body background color 
    body.style.backgroundColor = isNightMode ? "#000" : "#fff";

    // body font color 
    body.style.color = isNightMode ? "#fff" : "#000";


    // background picture 
    const BGPicture = isNightMode ? BGPicture1 : BGPicture2;
    document.getElementById(
      "main-section"
    ).style.background = `url(${BGPicture}) 100% / cover no-repeat `;
  }, [isNightMode]);

  const handleToggle = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <div id="nav-bar">
      <ul id="nav-list">
        <li id="logo">
          <img src={Logo} alt="logo" />
        </li>
        <li id="resume-download">Download Resume</li>
        <li id="color-switch">
          <button onClick={handleToggle}>
            {isNightMode ? (
              <span className="material-symbols-outlined">dark_mode</span>
            ) : (
              <span className="material-symbols-outlined">light_mode</span>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
