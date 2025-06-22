import React, { useRef, useEffect } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const NUM_CIRCLES = 30;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const circles = [];

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    class Circle {
      constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.radius = random(2, 6);
        this.opacity = random(0.18, 0.24); 
        this.color = `rgba(189, 106, 255, ${this.opacity})`; // Glowing purple
        this.speedX = random(-0.3, 0.3);
        this.speedY = random(-0.3, 0.3);
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < -this.radius) this.x = width + this.radius;
        if (this.x > width + this.radius) this.x = -this.radius;
        if (this.y < -this.radius) this.y = height + this.radius;
        if (this.y > height + this.radius) this.y = -this.radius;

        this.draw();
      }
    }

    function init() {
      for (let i = 0; i < NUM_CIRCLES; i++) {
        circles.push(new Circle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      circles.forEach(circle => circle.update());
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent', // Allow gradient from page to show through
        pointerEvents: 'none', // Let UI elements be clickable
      }}
    />
  );
};

export default AnimatedBackground;
