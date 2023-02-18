import { useRef, useEffect } from 'React';

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  const drawDandelionSeed = (ctx) => {
    const X_START = 50;
    const Y_START = 50;

    let x = X_START;
    let y = Y_START;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.strokeStyle = '#D4D4D4';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    // const time = new Date();
    // ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());

    ctx.beginPath();
    // ctx.moveTo(40.5, 40);
    // ctx.lineTo(40.5, 20);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 20);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    // ctx.moveTo(40.5, 20);
    // ctx.lineTo(55, 13.5);
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x + 14.5, y - 26.5);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    // ctx.moveTo(40.5, 20);
    // ctx.lineTo(47, 8.75);
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x + 6.5, y - 31.25);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    // ctx.moveTo(40.5, 20);
    // ctx.lineTo(26, 13.5);
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x - 14.5, y - 26.5);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    // ctx.moveTo(40.5, 20);
    // ctx.lineTo(35, 8.75);
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x - 5.5, y - 31.25);
    ctx.closePath();
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    if (!!window) {
      // scale the canvas so the draw isn't blurry
      let dpi = window.devicePixelRatio;

      //the + prefix casts it to an integer
      //the slice method gets rid of "px"let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);//get CSS width
      let style_height = +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
      let style_width = +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);

      //scale the canvas
      canvas.setAttribute('height', style_height * dpi);
      canvas.setAttribute('width', style_width * dpi);
    }

    const renderCanvas = () => {
      drawDandelionSeed(context);
      animationFrameId = window.requestAnimationFrame(renderCanvas);
    };
    renderCanvas();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [drawDandelionSeed]);

  return <canvas id="hero-canvas" ref={canvasRef}></canvas>;
};

export default HeroCanvas;
