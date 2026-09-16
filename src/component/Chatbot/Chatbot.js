import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const INITIAL_CHIPS = [
  "Core Hardware Stack",
  "SN-21 VTOL Drone",
  "WRO Singapore Rover",
  "Custom PCB Designs",
  "Direct Contact"
];

const OXLIN_KNOWLEDGE = {
  "Core Hardware Stack": {
    reply: "Noman specializes in end-to-end hardware R&D: multi-layer PCB design (Altium Designer, KiCad), bare-metal STM32 C/C++ firmware, SOLIDWORKS kinematic modeling, and autonomous control pipelines (ROS/ArduPilot).",
    nextChips: ["SN-21 VTOL Drone", "Custom PCB Designs", "Direct Contact"]
  },
  "SN-21 VTOL Drone": {
    reply: "The SN-21 is an autonomous Transwing VTOL UAV designed with tilting wing kinematics for vertical lift and high-efficiency forward cruise, running an ArduPilot autonomous stack.",
    nextChips: ["WRO Singapore Rover", "Core Hardware Stack", "Direct Contact"]
  },
  "WRO Singapore Rover": {
    reply: "Represented Bangladesh at the World Robot Olympiad International Final in Singapore with Team Echo Drift, finishing 29th globally in the Future Engineers category.",
    nextChips: ["SN-21 VTOL Drone", "BUET Robocarnival", "Direct Contact"]
  },
  "BUET Robocarnival": {
    reply: "Led Team RoboMore to a double podium finish at BUET Robocarnival (2nd Place with 'RoboMore Nex' & 3rd Place with 'Dynamic Spark').",
    nextChips: ["Core Hardware Stack", "Direct Contact"]
  },
  "Custom PCB Designs": {
    reply: "Designed multi-layer, high-density PCBs including the ABHASH assistive audio/haptic system, high-current BTS7960 motor driver boards, and custom STM32 logic arrays.",
    nextChips: ["SN-21 VTOL Drone", "Core Hardware Stack", "Direct Contact"]
  },
  "Direct Contact": {
    reply: "You can reach Noman directly via email at noman1272003@gmail.com or leave your email here to connect.",
    nextChips: ["Send Message", "Core Hardware Stack"]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [activeChips, setActiveChips] = useState(INITIAL_CHIPS);
  const [showContactInput, setShowContactInput] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "System online. I am Oxlin, Noman's technical AI co-pilot. Ask me anything about his flight systems, PCB architectures, or robotics builds."
    }
  ]);

  const chatEndRef = useRef(null);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const handleSelectOption = (query) => {
    if (query === "Send Message") {
      setShowContactInput(true);
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: query },
        { sender: "bot", text: "Enter your email address below, and Noman will receive your inquiry directly:" }
      ]);
      return;
    }

    setMessages((prev) => [...prev, { sender: "user", text: query }]);
    setIsTyping(true);

    setTimeout(() => {
      const data = OXLIN_KNOWLEDGE[query] || {
        reply: "Telemetry received. You can connect with Noman directly at noman1272003@gmail.com.",
        nextChips: INITIAL_CHIPS
      };

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      setActiveChips(data.nextChips || INITIAL_CHIPS);
      setIsTyping(false);
    }, 400);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!userEmail.trim()) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userEmail },
      { sender: "bot", text: `Inquiry logged for [${userEmail}]. Noman will follow up with you shortly.` }
    ]);
    setUserEmail("");
    setShowContactInput(false);
    setActiveChips(INITIAL_CHIPS);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="chatbot-wrapper">
      <button
        className="chat-trigger-btn"
        onClick={toggleChat}
        aria-label="Toggle Oxlin Assistant"
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-robot"}`}></i>
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-avatar">OX</div>
            <div>
              <h3>Oxlin // Co-Pilot</h3>
              <span className="online-indicator">
                <span className="dot"></span> Telemetry Active
              </span>
            </div>
            <button className="close-btn" onClick={toggleChat} aria-label="Close Assistant">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble bot typing">
                <span></span><span></span><span></span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="chat-footer">
            {showContactInput ? (
              <form onSubmit={handleEmailSubmit} className="chat-email-form">
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Send Email">
                  <i className="far fa-paper-plane"></i>
                </button>
              </form>
            ) : (
              <>
                <p className="chip-label">QUERY OXLIN // SELECT TOPIC</p>
                <div className="chips-container">
                  {activeChips.map((chip, idx) => (
                    <button
                      key={idx}
                      className="chip-btn"
                      onClick={() => handleSelectOption(chip)}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;