export default function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex flex-col items-start leading-none">
      <img
        src={dark ? '/logo-dark.png' : '/logo.png'}
        alt="X-Axis Overseas"
        width={394}
        height={88}
        decoding="async"
        className="h-7 w-auto sm:h-8"
      />
      <span
        className={`mt-1 text-[9px] font-semibold tracking-[0.2em] ${
          dark ? 'text-white/75' : 'text-navy/70'
        }`}
      >
        OVERSEAS • UK SPECIALISTS
      </span>
    </span>
  );
}
