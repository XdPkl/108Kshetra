/**
 * Traditional sacred emblems (UXD v3.0) — ported verbatim from the approved
 * source export's Icons module; used by the header, footer and page templates.
 */

// Sacred Vaishnava Thiruman & Srichoornam (Urdhva Pundra)
export function ThirumanIcon({ className = 'w-6 h-8', size }) {
  return (
    <svg
      viewBox="0 0 40 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size * 1.25 } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      {/* Base Lotus Pedestal */}
      <path d="M10 44 C 15 47, 25 47, 30 44 C 28 41, 12 41, 10 44 Z" fill="#C99A2E" />
      <path d="M14 42 C 18 45, 22 45, 26 42 L 20 38 Z" fill="#96731F" />
      {/* White Outer Tiruman (Two wings) */}
      <path
        d="M10 8 C 12 18, 14 30, 18 38 C 16 33, 14 20, 16 8 C 14 7, 11 6, 10 8 Z"
        fill="#FFFDF7"
        stroke="#C99A2E"
        strokeWidth="1.2"
      />
      <path
        d="M30 8 C 28 18, 26 30, 22 38 C 24 33, 26 20, 24 8 C 26 7, 29 6, 30 8 Z"
        fill="#FFFDF7"
        stroke="#C99A2E"
        strokeWidth="1.2"
      />
      {/* Center Vermilion Srichoornam (Red line of Sri Mahalakshmi) */}
      <path d="M20 5 L 21.8 35 L 18.2 35 Z" fill="#A6261D" />
      {/* Yellow/Golden auspicious dot at bottom of Srichoornam */}
      <circle cx="20" cy="36" r="1.6" fill="#C99A2E" />
    </svg>
  );
}

// Temple Gopuram / Vimanam Kalasam Icon
export function TempleGopuramIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="2" r="1.2" fill="#E2C47C" />
      <path d="M10 3.8h4l-.4 2.4h-3.2L10 3.8z" fill="#C99A2E" />
      <path d="M8.2 6.8h7.6l-.5 3.2H8.7l-.5-3.2z" fill="#B34700" />
      <path d="M6.5 10.6h11l-.6 3.6H7.1l-.6-3.6z" fill="#C99A2E" />
      <path d="M4.8 14.8h14.4l-.7 4H5.5l-.7-4z" fill="#7A2E00" />
      <path d="M3.2 19.4h17.6v3.2H3.2z" fill="#571F00" />
      {/* Sannidhi entrance arch */}
      <path d="M10.2 19.4h3.6v3.2h-3.6z" fill="#FAF2E3" />
      <path d="M10.2 19.4 Q12 18 13.8 19.4 Z" fill="#C99A2E" />
    </svg>
  );
}

// Sudarshana Chakra
export function ChakraIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" stroke="#C99A2E" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#C99A2E" />
      {/* Flaming edges */}
      <path d="M12 3 L12 6" stroke="#B34700" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 18 L12 21" stroke="#B34700" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12 L6 12" stroke="#B34700" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 12 L21 12" stroke="#B34700" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.6 5.6 L7.8 7.8" stroke="#D95F0E" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16.2 16.2 L18.4 18.4" stroke="#D95F0E" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5.6 18.4 L7.8 16.2" stroke="#D95F0E" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M16.2 7.8 L18.4 5.6" stroke="#D95F0E" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

// Panchajanya Shanka (Divine Conch)
export function ShankaIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M12 3 C16 4 20 8 19 14 C18 18 14 21 11 21 C8 21 5 18 5 14 C5 10 9 6 12 3 Z"
        stroke="#C99A2E"
        fill="#FFFDF7"
        strokeWidth="1.5"
      />
      <path d="M12 3 C10 7 9 12 11 17" stroke="#96731F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15 7 C13 11 12 15 13 19" stroke="#96731F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11 21 L10 23 L12 23 Z" fill="#C99A2E" />
    </svg>
  );
}

// Sacred Brass Deepam (Oil Lamp)
export function DeepamIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      {/* Base Stand */}
      <path d="M8 21 C 8 20, 16 20, 16 21 L 18 22 L 6 22 Z" fill="#96731F" />
      <path d="M11 18 L 13 18 L 12.5 21 L 11.5 21 Z" fill="#C99A2E" />
      {/* Lamp Bowl */}
      <path d="M5 14 C 5 18, 19 18, 19 14 C 20 13, 21 12.5, 21.5 12 L 2.5 12 C 3 12.5, 4 13, 5 14 Z" fill="#C99A2E" />
      <path d="M2.5 12 C 7 13.5, 17 13.5, 21.5 12 Z" fill="#E2C47C" />
      {/* Sacred Flame */}
      <path
        d="M12 2 C 14 6, 15 9, 13.5 11 C 12.5 12.2, 11.5 12.2, 10.5 11 C 9 9, 10 6, 12 2 Z"
        fill="#D95F0E"
      />
      <path
        d="M12 4.5 C 13.2 7, 13.5 9, 12.8 10.2 C 12.2 11, 11.8 11, 11.2 10.2 C 10.5 9, 10.8 7, 12 4.5 Z"
        fill="#FFDF78"
      />
    </svg>
  );
}

// Sacred Lotus Flower
export function LotusIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      {/* Center petal */}
      <path d="M12 3 C10 8 10 14 12 18 C14 14 14 8 12 3 Z" fill="#B34700" />
      {/* Left petals */}
      <path d="M12 18 C8 17 4 13 5 9 C8 10 11 14 12 18 Z" fill="#D95F0E" opacity="0.9" />
      <path d="M12 18 C9 18 3 17 2 13 C5 12 9 15 12 18 Z" fill="#C99A2E" opacity="0.8" />
      {/* Right petals */}
      <path d="M12 18 C16 17 20 13 19 9 C16 10 13 14 12 18 Z" fill="#D95F0E" opacity="0.9" />
      <path d="M12 18 C15 18 21 17 22 13 C19 12 15 15 12 18 Z" fill="#C99A2E" opacity="0.8" />
      {/* Bottom stem / leaf */}
      <path d="M8 20 C10 19 14 19 16 20 C14 21 10 21 8 20 Z" fill="#96731F" />
    </svg>
  );
}
