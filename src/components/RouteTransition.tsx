"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import DiamondLoader from "@/components/DiamondLoader";

const minimumDisplayTime = 480;
const normalizePath = (path: string) => path.replace(/\/+$/, "") || "/";

export default function RouteTransition() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const startedAt = useRef(0);
  const timeout = useRef<number | null>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setLoading(false), minimumDisplayTime);
    return () => window.clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    const begin = () => {
      startedAt.current = Date.now();
      setLoading(true);
      if (timeout.current !== null) window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => setLoading(false), 8000);
    };

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!target || target.target === "_blank" || target.hasAttribute("download")) return;

      const destination = new URL(target.href, window.location.href);
      if (destination.origin !== window.location.origin || normalizePath(destination.pathname) === normalizePath(window.location.pathname)) return;
      begin();
    };

    const handlePopState = () => {
      if (normalizePath(window.location.pathname) !== normalizePath(pathname)) begin();
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState);
    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
      if (timeout.current !== null) window.clearTimeout(timeout.current);
    };
  }, [pathname]);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;

    const remaining = Math.max(0, minimumDisplayTime - (Date.now() - startedAt.current));
    const timer = window.setTimeout(() => {
      setLoading(false);
      if (timeout.current !== null) window.clearTimeout(timeout.current);
    }, remaining);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div className={`route-loader${loading ? " route-loader-active" : ""}`} role={loading ? "status" : undefined} aria-hidden={!loading}>
      <DiamondLoader />
      <span className="visually-hidden">Loading page</span>
    </div>
  );
}
