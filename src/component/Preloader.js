import React, { useState, useEffect } from "react";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Personalized Engineering Boot Sequence
    const bootSequence = [
      "INIT_KERNEL: Custom BIOS v.2.4.1",
      "MOUNTING SOLIDWORKS 3D RENDER ENGINE... [OK]",
      "LOADING MODULE: STM32_Firmware_Interface.sys",
      "CALIBRATING SN21 VTOL FLIGHT DYNAMICS... [OK]",
      "ESTABLISHING SECURE TELEMETRY LINK TO SINGAPORE...",
      "DECRYPTING ALTIUM PCB SCHEMATICS...",
      "USER IDENTIFIED: NURUL ISLAM NOMAN",
      "システム起動 // INITIALIZING UI..."
    ];

    let currentLine = 0;
    let currentProgress = 0;

    const lineInterval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
      }
    }, 300); 

    const progressInterval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 2; 
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        clearInterval(lineInterval);
        setTimeout(onComplete, 1200); 
      }
      setProgress(currentProgress);
    }, 150); 

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const randomHex = () => "0x" + Math.random().toString(16).slice(2, 10).toUpperCase();

  const renderProgressBar = () => {
    const filledBlocks = Math.floor(progress / 4); 
    const emptyBlocks = 25 - filledBlocks;
    return `[${'█'.repeat(filledBlocks)}${'░'.repeat(emptyBlocks)}] ${progress}%`;
  };

  return (
    <div className="preloader">
      <div className="scanlines"></div>
      
      <div className="terminal-box">
        {lines.map((line, index) => (
          <div key={index} className="terminal-line">
            <span className="timestamp">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
            <span className="log-text"> {line}</span>
          </div>
        ))}

        {progress < 100 && (
          <div className="terminal-line memory-scan">
            <span className="timestamp">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
            <span className="log-text"> SCANNING RAM: {randomHex()} {randomHex()}</span>
          </div>
        )}

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