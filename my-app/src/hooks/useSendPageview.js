import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

/* This is the hook which is called by pages to send pageview analytics */
const useSendPageview = (title) => {
  const location = useLocation();
  useEffect(() => {
    console.log(`location: ${location.pathname + location.search}`);
    console.log(`title: ${title}`);
    if (ReactGA.ga()) {
      console.log('sending pageview analytics');
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search, title: title });
    } else {
      console.log('analytics disabled');
    }
    // useSendPageview(location);
  }, [location.pathname, location.search, title]);

}

export default useSendPageview;
