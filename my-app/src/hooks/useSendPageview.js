import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

/* This is the hook which is called by pages to send pageview analytics */
const useSendPageview = (title) => {
  const location = useLocation();
  useEffect(() => {
    console.log(`location: ${(location.pathname + location.search + location.hash)}`);
    console.log(`title: ${title}`);
    if (ReactGA.ga()) {
      console.log('sending pageview analytics');
      ReactGA.set({ page: (location.pathname + location.search) });
      ReactGA.send({ hitType: 'pageview', page: (location.pathname + location.search), title: title });

      // ReactGA.send({ hitType: 'pageview', page: '/resources', title: 'Resources' });

      // window.gtag('event', 'page_view', {
      //   page_path: location.pathname + location.search + location.hash,
      //   page_search: location.search,
      //   page_hash: location.hash,
      // });
    } else {
      console.log('analytics disabled');
    }
    // useSendPageview(location);
  }, [location, title]);

}

export default useSendPageview;
