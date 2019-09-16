import React, { useEffect } from 'react';

const canvasOrbit = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas-element');
    const context = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const circle = function (color, r) {
      context.fillStyle = color;
      context.beginPath();
      context.arc(0, 0, r, 0, 2 * Math.PI, true);
      context.closePath();
      context.fill();
    };

    let increment = 0;
    const redraw = function () {
      context.save();
      context.fillStyle = 'blue';
      context.fillRect(0, 0, width, height);
      context.translate(width / 2, height / 2);
      circle('yellow', 20);
      context.rotate(increment / 100);
      context.translate(100, 0);
      circle('green', 10);
      context.restore();
      increment += 2;
      console.log('increment', increment);
      window.requestAnimationFrame(redraw);
    };

    window.requestAnimationFrame(redraw);
  }, []);
  return <canvas id="canvas-element"></canvas>;
};

export default canvasOrbit;
