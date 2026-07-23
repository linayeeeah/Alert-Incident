import type { CSSProperties } from "react";

type CsroccLogoProps = {
  /** Choose the contrast version for the surface behind the logo. */
  surface?: "dark" | "light";
  /** Show the full formal name below the CSROCC wordmark. */
  lockup?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function CsroccLogo({
  surface = "dark",
  lockup = true,
  className,
  style,
}: CsroccLogoProps) {
  const file = lockup
    ? `csrocc-lockup-on-${surface}.svg`
    : `csrocc-wordmark-on-${surface}.svg`;

  return (
    <img
      src={`/brand/${file}`}
      alt="CSROCC — Cyber Service Resilience Operations Command Center"
      className={className}
      style={style}
    />
  );
}
