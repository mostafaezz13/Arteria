import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Global scroll manager:
// - Scroll to top on product/purchase pages when navigated via PUSH
// - Save per-path scroll positions and restore them on POP (back/forward)
const ScrollManager = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const positions = useRef<Record<string, number>>({});
  const currentScroll = useRef<number>(0);
  const prevPath = useRef<string>(location.pathname);

  useEffect(() => {
    const onScroll = () => (currentScroll.current = window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const pathname = location.pathname;

    // Restore saved position on POP (back/forward)
    if (navType === "POP") {
      const saved = positions.current[pathname];
      if (typeof saved === "number") {
        window.scrollTo(0, saved);
      } else {
        window.scrollTo(0, 0);
      }
    } else if (navType === "PUSH") {
      // For product/purchase pages we want to land at top immediately
      if (/^\/product(\/|$)|^\/purchase(\/|$)/.test(pathname)) {
        window.scrollTo(0, 0);
      } else {
        // Otherwise restore saved if exists, else top
        const saved = positions.current[pathname];
        if (typeof saved === "number") window.scrollTo(0, saved);
        else window.scrollTo(0, 0);
      }
    } else if (navType === "REPLACE") {
      window.scrollTo(0, 0);
    }

    // Save previous path scroll position
    positions.current[prevPath.current] = currentScroll.current;
    prevPath.current = pathname;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  return null;
};

export default ScrollManager;
