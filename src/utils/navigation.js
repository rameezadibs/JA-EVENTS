// Route normalization and navigation helper
export function getRouteInfo() {
  const rawPath = window.location.pathname || '/';
  const decodedPath = decodeURIComponent(rawPath).trim().toLowerCase().replace(/\/+$/, '') || '/';
  const rawHash = (window.location.hash || '').toLowerCase();

  const isUpcoming = 
    decodedPath === '/upcoming events' ||
    decodedPath === '/upcoming-events' ||
    decodedPath === '/upcoming_events' ||
    decodedPath === '/upcoming' ||
    rawHash === '#upcoming' ||
    rawHash === '#upcoming-events';

  const isPrivacy = 
    decodedPath === '/privacy' ||
    decodedPath === '/privacy-policy' ||
    rawHash === '#privacy' ||
    rawHash === '#privacy-policy';

  let page = 'home';
  if (isUpcoming) page = 'upcoming';
  else if (isPrivacy) page = 'privacy';

  return {
    page,
    pathname: decodedPath,
    hash: rawHash
  };
}

export function navigateTo(url) {
  if (!url) return;

  // External links
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('mailto:') ||
    url.startsWith('tel:') ||
    url.startsWith('//')
  ) {
    window.location.href = url;
    return;
  }

  const { page: currentPage } = getRouteInfo();

  // If link is an anchor on the same page (e.g. #contact while on home)
  if (url.startsWith('#')) {
    if (currentPage === 'home') {
      window.location.hash = url;
      const el = document.querySelector(url);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    } else {
      // Return to home page with hash
      window.history.pushState({}, '', '/' + url);
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        const el = document.querySelector(url);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, 100);
      return;
    }
  }

  // If link is /#section from another page or home
  if (url.startsWith('/#')) {
    const hash = url.substring(1);
    window.history.pushState({}, '', url);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }, 100);
    return;
  }

  // Normal path navigation (e.g. /upcoming-events, /privacy, /)
  window.history.pushState({}, '', url);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'instant' });
}
