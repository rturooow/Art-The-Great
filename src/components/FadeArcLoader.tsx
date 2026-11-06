import { useId } from "react";

export default function FadeArcLoader() {
  const id = useId().replace(/:/g, "");

  return (
    <svg className="loading-fade-arc" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-first`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={`${id}-second`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <path d="M12 3a9 9 0 0 1 8.66 6.55" stroke={`url(#${id}-first)`} />
      <path d="M20.66 9.55A9 9 0 0 1 12 21" stroke={`url(#${id}-second)`} />
    </svg>
  );
}
