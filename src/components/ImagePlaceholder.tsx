"use client";

/**
 * Honest image placeholder.
 *
 * Each instance marks a spot where a real image (photo, illustration, abstract
 * visual) will go later. The frame is clearly recognisable as a placeholder —
 * dashed border, soft elevated background, optional label — so visitors are not
 * misled and the team can spot every slot at a glance.
 *
 * When the real image is ready, swap this component for <Image> / <img> at the
 * same location. Keep the aspect ratio close to what the placeholder used so
 * the layout doesn't shift.
 */

type Variant = "lifestyle" | "abstract" | "illustration" | "photo";

const VARIANT_ICON: Record<Variant, React.ReactNode> = {
  lifestyle: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <circle cx="9" cy="9" r="2" />
      <path d="M3 17l5-5 4 4 3-3 6 6" />
    </svg>
  ),
  abstract: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="6" r="1.5" />
      <circle cx="19" cy="7" r="1.5" />
      <circle cx="6" cy="18" r="1.5" />
      <circle cx="18" cy="17" r="1.5" />
      <path d="M12 12L5 6M12 12l7-5M12 12l-6 6M12 12l6 5" />
    </svg>
  ),
  illustration: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 3l9 16H3L12 3z" />
      <circle cx="12" cy="13" r="2" />
    </svg>
  ),
  photo: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="3" y="6" width="18" height="14" rx="1" />
      <circle cx="12" cy="13" r="4" />
      <path d="M8 6l1.5-2h5L16 6" />
    </svg>
  ),
};

export default function ImagePlaceholder({
  label,
  variant = "lifestyle",
  aspect = "16/10",
  className = "",
  maxWidth,
  rounded = false,
}: {
  /** Short hint of what the real image will show (e.g. "Photo terrain — à venir"). */
  label: string;
  /** Visual hint for the type of asset expected. */
  variant?: Variant;
  /** CSS aspect-ratio value (default 16/10). Use "1/1" for square, "4/3" for landscape, etc. */
  aspect?: string;
  className?: string;
  /** Optional max width (e.g. "400px"). Defaults to no cap (fills parent). */
  maxWidth?: string;
  /** Slight rounding on the frame. Off by default to match the squared-off design system. */
  rounded?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden flex items-center justify-center text-center ${className}`}
      style={{
        aspectRatio: aspect,
        maxWidth,
        background: "var(--bg-elev)",
        border: "1px dashed var(--border-strong)",
        borderRadius: rounded ? "4px" : undefined,
      }}
      role="img"
      aria-label={label}
    >
      {/* Subtle diagonal pattern so the empty slot reads as deliberate */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--text) 0 1px, transparent 1px 14px)",
        }}
      />

      <div className="relative flex flex-col items-center gap-3 px-4 text-[var(--text-muted)]">
        {VARIANT_ICON[variant]}
        <span className="text-[10px] uppercase tracking-[0.25em] leading-tight max-w-[24ch]">
          {label}
        </span>
      </div>
    </div>
  );
}
