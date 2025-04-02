import React, { useState, useEffect } from "react";
import "./cursor.scss";

const FlameCursor = () => {
  const [particles, setParticles] = useState([]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  
  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      for (let i = 0; i < 5; i++) { 
        createParticle(e.clientX + Math.random() * 10 - 5, e.clientY + Math.random() * 10 - 5);
      }
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  
  const createParticle = (x, y) => {
    const newParticle = {
      id: Math.random(),
      x,
      y,
      size: Math.random() * 20 + 10, 
      opacity: 1,
    };

    setParticles((prev) => [...prev, newParticle]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 900); 
  };

  return (
    <div className="flame-cursor">
     
      <div
        className="custom-pointer"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      />
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