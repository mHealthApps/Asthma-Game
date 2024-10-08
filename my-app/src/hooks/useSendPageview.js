import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* This is the hook which is called by pages to send pageview analytics */
const useSendPageview = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(`location: ${location.pathname + location.search}`);
    if (typeof window.ga === 'function') {
      console.log('analytics is initialized');
    } else {
      console.log('analytics disabled');
    }
    // useSendPageview(location);
  }, [location.pathname, location.search]);

}

export default useSendPageview;
