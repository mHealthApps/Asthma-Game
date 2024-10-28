import { useState, useEffect } from 'react';

/* This is the hook which, StackedCards, Quiz, etc. call to handle different formatting for orientation */
const useOrientation = () => {
  /* Handles screen orientation events */
  const [orientation, setOrientation] = useState('portrait');
  const adjustOrientationFormat = () => {
    const type = window.screen.orientation.type;
    const angle = window.screen.orientation.angle;
    console.log(`ScreenOrientation change: ${type}, ${angle} degrees.`);
    if (type.startsWith('portrait')) {
      setOrientation('portrait');
    } else {
      setOrientation('landscape');
    }
  }
  useEffect(() => {
    adjustOrientationFormat();
    window.screen.orientation.addEventListener('change', adjustOrientationFormat);
    return () => window.screen.orientation.removeEventListener('change',adjustOrientationFormat);
  }, [])

  return orientation;
}

export default useOrientation;
