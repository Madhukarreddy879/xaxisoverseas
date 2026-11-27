export default function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill={dark ? '#fff' : '#0A192F'} />
        <path d="M16 16 48 48" stroke={dark ? '#0A192F' : '#fff'} strokeWidth="7" strokeLinecap="round" />
        <path d="M48 16 16 48" stroke="#C8102E" strokeWidth="7" strokeLinecap="round" />
        <circle cx="32" cy="32" r="4" fill="#C59B27" />
      </svg>
      <span className="leading-none">
        <span className={`block text-xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>
          X-AXIS
        </span>
        <span className={`block text-[10px] font-semibold tracking-[0.18em] mt-1 ${dark ? 'text-white/70' : 'text-crimson'}`}>
          OVERSEAS • UK SPECIALISTS
        </span>
      </span>
    </span>
  );
}
