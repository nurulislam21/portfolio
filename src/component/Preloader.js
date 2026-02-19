import React, { useState, useEffect } from "react";
import "./Preloader.css";

// PRO FIX: Moving the constant outside the component removes the ESLint warning!
const fullText = `[BOOT] SYSTEM STATUS: ONLINE
[AUTH] USER: NURUL ISLAM NOMAN // ACCESS GRANTED
[LOAD] INITIALIZING STM32 REAL-TIME KERNEL...
[PROC] CALIBRATING PID CONTROL LOOPS... OK
[DATA] FETCHING VTOL AERODYNAMIC TELEMETRY... 100%
[LINK] ESTABLISHING MULTI-LAYER PCB DATALINK... ACTIVE
[EXEC] RENDERING CAD GEOMETRY & SCHEMATICS...
[DONE] ALL SYSTEMS OPERATIONAL. 

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
        // Wait 800ms after typing finishes, then trigger the fade out
        setTimeout(onComplete, 800); 
      }
    }, 5); // Speed of the typing effect

    return () => clearInterval(typing);
  }, [onComplete]);

  return (
    <div className="preloader">
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