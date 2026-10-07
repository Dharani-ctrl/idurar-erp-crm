import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 *
 * Resets the main content area scroll position to the top whenever the route
 * changes. Without this, navigating between pages via the sidebar retains the
 * previous page's scroll position instead of starting at the top.
 *
 * Fixes: https://github.com/idurar/idurar-erp-crm/issues/1496
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Renders nothing — this is a behaviour-only component
  return null;
}

