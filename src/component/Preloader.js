import React, { useState, useEffect } from "react";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Highly personalized engineering boot sequence
    const bootSequence = [
      "INIT_KERNEL: Custom BIOS v.2.4.1",
      "MOUNTING SYSTEM DRIVES... [OK]",
      "LOADING MODULE: UAV_Kinematics_Engine.dll",
      "LOADING MODULE: STM32_Firmware_Interface.sys",
      "SYS_WARN: HIGH VOLTAGE DETECTED ON PIN 4",
      "OVERRIDING LIMITS... [BYPASS SUCCESS]",
      "MEM_CHECK: Verifying routing tables...",
      "ESTABLISHING SECURE TELEMETRY LINK",
      "DECRYPTING USER PROFILE...",
      "USER IDENTIFIED: NURUL ISLAM NOMAN",
      "SYSTEM GRANTED. INITIALIZING UI..."
    ];

    let currentLine = 0;
    let currentProgress = 0;

    // 1. Prints the terminal lines one by one
    const lineInterval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
      }
    }, 250); // Speed of new lines appearing

    // 2. Randomly jumps the progress bar to simulate processing
    const progressInterval = setInterval(() => {
      // Jump by random amounts between 2 and 15
      currentProgress += Math.floor(Math.random() * 15) + 2; 
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        clearInterval(lineInterval);
        
        // Wait 1 second at 100% before fading out
        setTimeout(onComplete, 1000); 
      }
      setProgress(currentProgress);
    }, 120); 

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  // Generates random HEX codes for the memory scan visual
  const randomHex = () => "0x" + Math.random().toString(16).slice(2, 10).toUpperCase();

  // Generates the [████░░░] style progress bar
  const renderProgressBar = () => {
    const filledBlocks = Math.floor(progress / 4); // 25 blocks total
    const emptyBlocks = 25 - filledBlocks;
    return `[${'█'.repeat(filledBlocks)}${'░'.repeat(emptyBlocks)}] ${progress}%`;
  };

  return (
    <div className="preloader">
      <div className="scanlines"></div>
      
      <div className="terminal-box">
        {/* Render Boot Lines */}
        {lines.map((line, index) => (
          <div key={index} className="terminal-line">
            <span className="timestamp">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
            <span className="log-text"> {line}</span>
          </div>
        ))}

        {/* Render Active Memory Scan while loading */}
        {progress < 100 && (
          <div className="terminal-line memory-scan">
            <span className="timestamp">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
            <span className="log-text"> SCANNING RAM: {randomHex()} {randomHex()}</span>
          </div>
        )}

        {/* Render Progress Bar */}
        <div className="terminal-progress">
          <br />
          <div className="progress-bar">{renderProgressBar()}</div>
          {progress === 100 && <div className="blink-cursor">_</div>}
        </div>
      </div>
    </div>
  );
};

export default Preloader;