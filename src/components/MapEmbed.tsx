import { siteConfig } from '@/config/site';

export default function MapEmbed({ height = 360 }: { height?: number }) {
  return (
    <iframe
      title="X-Axis Overseas office location, KVR Enclave, Ameerpet"
      src={siteConfig.googleMapsEmbedUrl}
      width="100%"
      height={height}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-xl border-0"
    />
  );
}
