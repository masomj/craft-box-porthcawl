// Site-wide structured data.
//
// One @graph with stable @id values, so Google and AI answer engines resolve a
// single business entity that the WebSite points back to, rather than
// unrelated objects. Page-level blocks (BreadcrumbList, etc.) reference
// `businessId` for the same reason.

export const SITE_ORIGIN = 'https://thecraftboxporthcawl.co.uk'

export const businessId = `${SITE_ORIGIN}/#business`
export const websiteId = `${SITE_ORIGIN}/#website`

export const siteSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${SITE_ORIGIN}/`,
      name: 'The Craft Box Porthcawl',
      inLanguage: 'en-GB',
      publisher: { '@id': businessId },
    },
    {
      // A physical shop selling locally-made craft/artwork -- Store covers the
      // retail side, ArtGallery the resident-artist showcase side.
      '@type': ['Store', 'ArtGallery', 'LocalBusiness'],
      '@id': businessId,
      name: 'The Craft Box Porthcawl',
      description:
        'A creative hub in Porthcawl showcasing handmade crafts and original artwork from local resident artists.',
      url: `${SITE_ORIGIN}/`,
      image: `${SITE_ORIGIN}/og-image.png`,
      logo: `${SITE_ORIGIN}/icon-512.png`,
      email: 'craftboxporthcawl@gmail.com',
      priceRange: '££',
      currenciesAccepted: 'GBP',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Porthcawl',
        addressRegion: 'South Wales',
        addressCountry: 'GB',
      },
      areaServed: { '@type': 'City', name: 'Porthcawl' },
      sameAs: [
        'https://www.facebook.com/profile.php?id=61584483924526',
        'https://www.instagram.com/craftboxporthcawl',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'craftboxporthcawl@gmail.com',
        areaServed: 'GB',
        availableLanguage: ['English'],
      },
    },
  ],
}
