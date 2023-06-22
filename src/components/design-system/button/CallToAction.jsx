import { useEffect, useRef } from 'react';
import './CallToAction.css';

const CallToAction = ({ children, className = '', onClick, href, type = 'primary', width, download }) => {
  const ref = useRef();

  useEffect(() => {}, []);

  return (
    <>
      <div className={`buttons ${className}`} ref={ref}>
        {href ? (
          <>
            <a
              className="blob-btn"
              href={href}
              download={download}
              target="_blank"
              onClick={() => onClick()}
              style={{ minWidth: `${width}px` }}
            >
              {children}
              <span className="blob-btn-inner">
                <span className="blob-btn-blobs">
                  <span className="blob-btn-blob"></span>
                  <span className="blob-btn-blob"></span>
                  <span className="blob-btn-blob"></span>
                  <span className="blob-btn-blob"></span>
                </span>
              </span>
            </a>
            <br />
          </>
        ) : (
          <>
            <button className="blob-btn" onClick={() => onClick()} style={{ minWidth: `${width}px` }}>
              {children}
              <span className="blob-btn-inner">
                <span className="blob-btn-blobs">
                  <span className="blob-btn-blob"></span>
                  <span className="blob-btn-blob"></span>
                  <span className="blob-btn-blob"></span>
                  <span className="blob-btn-blob"></span>
                </span>
              </span>
            </button>
            <br />
          </>
        )}

        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default CallToAction;
