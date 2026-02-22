import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // We use refs for coordinates to bypass React re-renders for max performance
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    // 1. Instantly update the dot and store target coordinates
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    // 2. Smoothly move the ring towards the dot (Lerp physics)
    const animateRing = () => {
      // 0.15 is the friction. Lower = heavier/slower ring.
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        // We keep your rotation animation intact by applying it in CSS
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animateRing);
    };

    const updateHoverState = (e) => {
      if (e.target.closest('a, button, .portfolio-card, .achievement-card, input, textarea, .icon-btn, .tool-btn, .right_img_wrapper')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', updateHoverState);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    requestRef.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', updateHoverState);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="cursor-container">
      {/* The Trailing Radar Ring */}
      <div 
        ref={ringRef} 
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      >
        <div className="radar-spinner">
            <div className="crosshair-x"></div>
            <div className="crosshair-y"></div>
        </div>
      </div>

      {/* The Instant Sensor Dot */}
      <div 
        ref={dotRef} 
        className={`custom-cursor-dot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
      ></div>
    </div>
  );
};

export default CustomCursor;