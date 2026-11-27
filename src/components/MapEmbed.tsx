import { siteConfig } from '@/config/site';

export default function MapEmbed({ tall = false }: { tall?: boolean }) {
  return (
    <iframe
      title="X-Axis Overseas office location, KVR Enclave, Ameerpet"
      src={siteConfig.googleMapsEmbedUrl}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`w-full rounded-xl border-0 ${tall ? 'h-[280px] sm:h-[360px] md:h-[420px]' : 'h-[260px] sm:h-[320px]'}`}
    />
  );
}
