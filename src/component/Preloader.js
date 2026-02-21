import React, { useState, useEffect } from "react";
import "./Preloader.css";

const fullText = `[BOOT] SYSTEM STATUS: ONLINE
[AUTH] USER: NURUL ISLAM NOMAN // ACCESS GRANTED

> WELCOME TO THE PORTFOLIO ENGINE v002`;

const Preloader = ({ onComplete }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
        // Wait slightly longer after it finishes so the user can read the final line
        setTimeout(onComplete, 1200); 
      }
    }, 20); // Snappier typing speed

    return () => clearInterval(typing);
  }, [onComplete]);

  return (
    <div className="preloader">
      {/* Adds a retro monitor overlay effect */}
      <div className="scanlines"></div> 
      <div className="terminal-box">
        <p className="terminal-text">
          {text}
          <span className="cursor">█</span>
        </p>
      </div>
    </div>
  );
};

export default Preloader;