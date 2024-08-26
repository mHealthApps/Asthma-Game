import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import React, { useCallback, useEffect, useRef } from 'react';
import BulletPointText from './BulletPointText';

const ResponsiveText = ({ text, height, initialSize }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const adjustCardFontSize = useCallback(() => {
    console.log(`window.innerHeight: ${window.innerHeight}`);
    const container = containerRef.current;
    const text = textRef.current;
    let fontSize = initialSize;
    text.style.fontSize = `${fontSize}px`;

    while (text.scrollHeight > container.clientHeight) {
      fontSize -= 0.1;
      text.style.fontSize = `${fontSize}px`;
    }
  }, [initialSize])

  useEffect(() => {
    adjustCardFontSize();
    window.addEventListener('resize', adjustCardFontSize);
    return () => window.removeEventListener('resize',adjustCardFontSize);
  }, [adjustCardFontSize])

  return (
    <div ref={containerRef}
         style={{
           width: '100%',
           height: height,
           overflow: 'hidden',
         }}
    >
      <div ref={textRef} className="vertical-center" style={{textAlign: 'center'}}>
        {/*<BulletPointText text={text} />*/}
        {text}
      </div>
    </div>
  );
}

export default ResponsiveText;
