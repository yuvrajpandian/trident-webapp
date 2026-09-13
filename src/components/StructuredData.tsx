import { site } from "@/lib/site";

/* LocalBusiness structured data — helps Google show your business with rich
   details (address, phone, hours) in search results. */
export function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.fullName,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    areaServed: "Dubai, United Arab Emirates",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
