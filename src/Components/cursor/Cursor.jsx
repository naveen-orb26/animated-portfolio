import React, { useState, useEffect } from "react";
import "./cursor.scss";

const FlameCursor = () => {
  const [particles, setParticles] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Update cursor position
  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      for (let i = 0; i < 3; i++) { // Generate multiple flame particles
        createParticle(e.clientX + Math.random() * 10 - 5, e.clientY + Math.random() * 10 - 5);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  // Generate flame particles
  const createParticle = (x, y) => {
    const newParticle = {
      id: Math.random(),
      x,
      y,
      size: Math.random() * 20 + 10, // Random size between 10px and 30px
      opacity: 1,
    };

    setParticles((prev) => [...prev, newParticle]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 900); // Flame effect lasts for 0.9s
  };

  return (
    <div className="flame-cursor">
      {/* Custom Circular Pointer */}
      <div
        className="custom-pointer"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />

      {/* Flame Effect */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="flame-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FlameCursor;