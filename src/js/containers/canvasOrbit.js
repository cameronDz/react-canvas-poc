import React, { useEffect } from 'react';

/**
 * Provides a simple circle orbit example.
 */
const canvasOrbit = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas-element');
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const circle = (color = 'black', radius = 0, fill = true) => {
      context.lineWidth = '1';
      context.fillStyle = color;
      context.beginPath();
      context.arc(0, 0, radius, 0, 2 * Math.PI, true);
      context.closePath();
      if (fill) {
        context.fill();
      } else {
        context.stroke();
      }
    };

    let increment = 0;
    const circleRadius = width / 5;
    const redraw = () => {
      context.save();
      context.fillStyle = 'aqua';
      context.fillRect(0, 0, width, height);
      context.translate(width / 2, height / 2);
      circle('black', 10);
      circle('black', circleRadius, false);
      context.rotate((increment * Math.PI) / 180);

      // put a circle at 12 oclock
      context.translate(0, -circleRadius);
      if (increment > 0 && increment < 360) {
        circle('white', 10);
      }

      // reset x/y then put circle at 9 oclock
      context.translate(-circleRadius, circleRadius);
      if (increment > 90 && increment < 450) {
        circle('white', 10);
      }

      // reset x/y then put a circle at 6 oclock
      context.translate(circleRadius, circleRadius);
      if (increment > 180 && increment < 540) {
        circle('white', 10);
      }

      // reset x/y then put a circle at 3 oclock
      context.translate(circleRadius, -circleRadius);
      if (increment > 270 && increment < 630) {
        circle('white', 10);
      }

      context.restore();
      increment += 1;
      if (increment <= 630) {
        window.requestAnimationFrame(redraw);
      }
    };

    window.requestAnimationFrame(redraw);
  }, []);

  return <canvas id="canvas-element" style={{ width: '800px', height: '400px' }}></canvas>;
};

export default canvasOrbit;
