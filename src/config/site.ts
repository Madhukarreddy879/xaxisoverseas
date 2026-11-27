/**
 * SINGLE SOURCE OF TRUTH for contact details.
 * >>> Replace the phone / WhatsApp placeholders below with the real numbers. <<<
 */
export const siteConfig = {
  brandName: 'X-Axis',
  legalName: 'X-Axis Overseas Consultancy',
  domain: 'xaxisoverseas.com',
  siteUrl: 'https://xaxisoverseas.com',
  gaMeasurementId: 'G-J6ERLYDQX7',
  email: 'info@xaxisoverseas.com',
  // Contact phone & WhatsApp
  phoneDisplay: '+91 93462 14771',
  phoneRaw: '+919346214771',
  whatsappNumber: '919346214771',
  address: {
    line1: '1st Floor, KVR Enclave, above Bata showroom',
    line2: 'beside AAA theatre, Swathi Avenue, Ameerpet',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500016',
    country: 'India',
    full: '1st Floor, KVR Enclave, above Bata showroom, beside AAA theatre, Swathi Avenue, Ameerpet, Hyderabad, Telangana 500016',
    landmarkNote:
      'Near Ameerpet Metro Station — beside AAA Cinemas & above Bata Showroom',
  },
  officeHours: 'Mon – Sat: 10:00 AM – 7:00 PM IST',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=KVR%20Enclave,%20above%20Bata%20showroom,%20Ameerpet,%20Hyderabad,%20Telangana%20500016&t=&z=16&ie=UTF8&iwloc=&output=embed',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=KVR+Enclave+above+Bata+showroom+beside+AAA+theatre+Swathi+Avenue+Ameerpet+Hyderabad+500016',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
