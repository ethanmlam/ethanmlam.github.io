import React, { useEffect } from 'react';

const GoogleAnalytics: React.FC = () => {
  useEffect(() => {
    // Include the gtag.js library
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-E7JHH5RZTG';
    script.async = true;

    // Initialize dataLayer and define gtag function
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag() {
      (window as any).dataLayer.push(arguments);
    }

    // Append the script to the document
    document.head.appendChild(script);

    const handleScriptLoad = () => {
      // Configure Google Analytics
      gtag('js', new Date());
      gtag('config', 'G-E7JHH5RZTG');
    };

    // Listen for the script's load event
    script.addEventListener('load', handleScriptLoad);

    return () => {
      // Cleanup script tag and event listener on component unmount
      document.head.removeChild(script);
      script.removeEventListener('load', handleScriptLoad);
    };
  }, []);

  return <></>; // This component doesn't render anything
};

export default GoogleAnalytics;
