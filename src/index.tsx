import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { OTraze } from "./screens/OTraze/OTraze";
import { PrivacyPolicy } from "./screens/PrivacyPolicy/PrivacyPolicy";
import { Impressum } from "./screens/Impressum/Impressum";
import { Manifesto } from "./screens/Manifesto/Manifesto";
import CookieConsent from "./components/ui/cookie-consent";

// Simple routing based on URL hash and pathname
const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname + window.location.hash);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };
    
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Check if cookie consent has been given
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowCookieBanner(false);
  };
  
  if (currentPath === '#privacy' || currentPath === '/privacy') {
    return (
      <>
        <PrivacyPolicy />
        {showCookieBanner && (
          <CookieConsent 
            privacyHref="#privacy"
            onAccept={handleAcceptCookies}
            onDecline={handleDeclineCookies}
          />
        )}
      </>
    );
  }
  
  if (currentPath === '#impressum' || currentPath === '/impressum') {
    return (
      <>
        <Impressum />
        {showCookieBanner && (
          <CookieConsent 
            privacyHref="#privacy"
            onAccept={handleAcceptCookies}
            onDecline={handleDeclineCookies}
          />
        )}
      </>
    );
  }
  
  if (currentPath === '/manifesto' || currentPath === '/why-we-built-otraze') {
    return (
      <>
        <Manifesto />
        {showCookieBanner && (
          <CookieConsent 
            privacyHref="#privacy"
            onAccept={handleAcceptCookies}
            onDecline={handleDeclineCookies}
          />
        )}
      </>
    );
  }
  
  return (
    <>
      <OTraze />
      {showCookieBanner && (
        <CookieConsent 
          privacyHref="#privacy"
          onAccept={handleAcceptCookies}
          onDecline={handleDeclineCookies}
        />
      )}
    </>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
