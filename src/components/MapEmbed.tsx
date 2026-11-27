import { siteConfig } from '@/config/site';

export default function MapEmbed({ height = 320 }: { height?: number }) {
  return (
    <iframe
      title="X-Axis Overseas office location, KVR Enclave, Ameerpet"
      src={siteConfig.googleMapsEmbedUrl}
      width="100%"
      height={height}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-[260px] w-full rounded-xl border-0 sm:h-[320px] md:h-[380px]"
    />
  );
}
