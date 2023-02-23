import variantOne from '../../assets/dandelion-seed-var-1.svg';
import variantTwo from '../../assets/dandelion-seed-var-2.svg';
import variantThree from '../../assets/dandelion-seed-var-3.svg';
import variantFour from '../../assets/dandelion-seed-var-4.svg';
import variantFive from '../../assets/dandelion-seed-var-5.svg';

import { useRef, useEffect, useState } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef();

  // variant bank
  // draw bank -- x, y, seed variant
  // cleanup draw bank function -- once x hits a certain width, remove from bank
  // draw should pull from draw bank

  function dandelionSeed(x, y, variantSrc, ctx) {
    this.x = x;
    this.y = y;
    const dandelion_seed = new Image();
    dandelion_seed.src = variantSrc;

    this.dx = Math.random() * 1.3 + 0.05;
    this.dy;

    this.draw = function () {
      ctx.drawImage(dandelion_seed, this.x, this.y);
    };

    this.animate = function () {
      if (this.dx > 0.4) {
        this.dx -= 0.0002;
      }

      if (this.x > ctx.canvas.width) {
        this.x = -30;
      }

      this.x += this.dx;

      this.draw();
    };
  }

  const dandelionSeedVariantSources = [variantOne, variantTwo, variantThree, variantFour, variantFive];

  const populateSeedBank = (ctx) => {
    let tempSeedBank = [];
    for (let seed = 0; seed < 50; seed++) {
      let x = Math.floor(Math.random() * -500) - 30;
      let y = Math.floor(Math.random() * (ctx.canvas.height - 50));
      let variantSrc = dandelionSeedVariantSources[Math.floor(Math.random() * 5)];
      tempSeedBank.push(new dandelionSeed(x, y, variantSrc, ctx));
    }
    return tempSeedBank;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    if (!!window) {
      //the + prefix casts it to an integer
      //the slice method gets rid of "px" let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);//get CSS width
      let style_height = +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
      let style_width = +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);

      //scale the canvas
      canvas.setAttribute('height', style_height);
      canvas.setAttribute('width', style_width);
    }

    let dandelionSeedBank = populateSeedBank(context);

    const renderCanvas = () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      for (let seed of dandelionSeedBank) {
        seed.animate();
      }
      animationFrameId = window.requestAnimationFrame(renderCanvas);
    };

    renderCanvas();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="hero-canvas" ref={canvasRef}></canvas>;
};

export default HeroCanvas;
