export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect x="1" y="1" width="30" height="30" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 9 H15 a7 7 0 0 1 0 14 H9 Z"
          fill="currentColor"
        />
        <path
          d="M19 9 L23 16 L19 23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="26" cy="6" r="2" fill="#00FF94" className="glow-pulse" />
      </svg>
      <span className="text-[17px] tracking-[-0.02em] font-medium">
        DeepXlab
      </span>
    </span>
  );
}
