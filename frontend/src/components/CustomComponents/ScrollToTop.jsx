import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0); // Delay for UI update
    }, [location.pathname]);
  
    return null;
}

export default ScrollToTop;
