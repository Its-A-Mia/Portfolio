import variantOne from '../../assets/dandelion-seed-var-1.svg';
import variantTwo from '../../assets/dandelion-seed-var-2.svg';
import variantThree from '../../assets/dandelion-seed-var-3.svg';
import variantFour from '../../assets/dandelion-seed-var-4.svg';
import variantFive from '../../assets/dandelion-seed-var-5.svg';

import { useRef, useEffect, useState } from 'React';

const HeroCanvas = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // variant bank
  // draw bank -- x, y, seed variant
  // cleanup draw bank function -- once x hits a certain width, remove from bank
  // draw should pull from draw bank

  function dandelionSeed(x, y, variantSrc, ctx) {
    this.x = x;
    this.y = y;
    const dandelion_seed = new Image();
    dandelion_seed.src = variantSrc;

    this.dx = Math.random() * 0.3 + 0.01;
    this.dy;

    this.draw = function () {
      ctx.drawImage(dandelion_seed, this.x, this.y);
    };

    this.animate = function () {
      this.x += this.dx;

      this.draw();
    };
  }

  const dandelionSeedVariantSources = [variantOne, variantTwo, variantThree, variantFour, variantFive];

  const populateSeedBank = (ctx) => {
    let tempSeedBank = [];
    for (let seed = 0; seed < 50; seed++) {
      let x = -50;
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
      // scale the canvas so the draw isn't blurry
      let dpi = window.devicePixelRatio;

      //the + prefix casts it to an integer
      //the slice method gets rid of "px" let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);//get CSS width
      let style_height = +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
      let style_width = +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);

      //scale the canvas
      canvas.setAttribute('height', style_height * dpi);
      canvas.setAttribute('width', style_width * dpi);

      // window.addEventListener('resize', setDimensions({ height: window.innerHeight, width: window.innerWidth }));
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
      // window.removeEventListener('resize', setDimensions({ height: window.innerHeight, width: window.innerWidth }));
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return <canvas id="hero-canvas" ref={canvasRef}></canvas>;
};

export default HeroCanvas;
