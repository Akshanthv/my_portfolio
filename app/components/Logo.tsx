interface LogoProps {
  size?: number;
  className?: string;
  title?: string;
}

/**
 * AK monogram.
 *
 * The A's right leg and the K's stem are the same vertical stroke, and the A's
 * crossbar runs through that stem to become the K's arms — so the whole mark
 * pivots on one junction at (13,17). Drawn in currentColor so it inherits.
 */
const Logo = ({ size = 34, className = "", title = "Akshanth V" }: LogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    role="img"
    aria-label={title}
    className={className}
  >
    {/* shared vertical: A's right leg + K's stem */}
    <path d="M13 4.6V27.4" stroke="currentColor" strokeWidth="2.4" />
    {/* A: left diagonal */}
    <path d="M3.2 27.4L13 4.6" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="miter" />
    {/* A: crossbar, continuing through the stem into the K */}
    <path d="M7.9 17H13" stroke="currentColor" strokeWidth="2.4" />
    {/* K: upper arm and lower leg, both springing from the same node */}
    <path d="M13 17L23.6 4.6" stroke="currentColor" strokeWidth="2.4" />
    <path d="M13 17L23.6 27.4" stroke="currentColor" strokeWidth="2.4" />
  </svg>
);

export default Logo;
