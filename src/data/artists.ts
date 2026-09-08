/**
 * Resident artist roster, carried over from the live Wix site
 * (thecraftboxporthcawl.co.uk/artist-directory) as of Sept 2026.
 *
 * NOTE: on the live site several bios are still the Wix placeholder text
 * ("Short bio placeholder text for this artist...") and several artists have
 * no photo uploaded. Those are replicated as-is below (`hasBio: false`) --
 * this is a straight content port, not a rewrite. Getting real bios/photos
 * from Mason for the flagged artists is a follow-up task, not done here.
 */
export interface Artist {
  slug: string
  name: string
  studio?: string
  bio: string
  hasBio: boolean
}

export const artists: Artist[] = [
  {
    slug: 'amanda-adams',
    name: 'Amanda Adams',
    studio: 'South Wales Seaglass',
    bio: 'Our founder and seaglass extraordinaire. Amanda creates beautiful crafts made from seaglass collected from the local area.',
    hasBio: true,
  },
  {
    slug: 'jo-stanford',
    name: 'Jo Stanford',
    studio: 'Jo Stanford Studios',
    bio: 'Expressive painter Jo creates moody and emotive paintings of the coast. She excellently captures the movement and essence of the sea.',
    hasBio: true,
  },
  {
    slug: 'troy-clark',
    name: 'Troy Clark',
    studio: 'Troy Clark Fine Art',
    bio: 'Capturing moments of reflection and contemplation. Intuitive and process-led, Troy focuses on introspection and the power of art to capture emotion. Troy also supports brand development and local creative marketing.',
    hasBio: true,
  },
  {
    slug: 'julie-davies',
    name: 'Julie Davies',
    studio: 'Ty Eglwys Art',
    bio: 'Julie Davies is a self-taught artist capturing everyday life through detailed drawings and vibrant, story-led paintings. Inspired by local landscapes and Welsh heritage, her work celebrates community, place, and memory.',
    hasBio: true,
  },
  {
    slug: 'caroline-limbert',
    name: 'Caroline Limbert',
    studio: 'Salud Ceramics',
    bio: 'Caroline is a ceramic artist creating hand-thrown and hand-painted pieces that blend function with playful, decorative detail. Her work brings warmth, character, and individuality to functional pottery. As well as creating beautiful ceramics, Caroline explores the therapeutic potential of the arts in supporting wellbeing.',
    hasBio: true,
  },
  {
    slug: 'julie-pickin',
    name: 'Julie Pickin',
    studio: 'Cariad Earth',
    bio: "Julie founded the Cariad Earth brand for her fabulous range of candles, soaps & beauty products all hand made with pure & natural ingredients. Overflowing with creativity, Julie also makes handmade wreaths and has recently turned her hand to resin objet d'arts.",
    hasBio: true,
  },
  {
    slug: 'niaomi-miller',
    name: 'Niaomi Miller',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'andrew-collier',
    name: 'Andrew Collier',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'steven-john',
    name: 'Steven John',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'stephanie-davies',
    name: 'Stephanie Davies',
    studio: 'DAMPAPIER',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'jacqueline-jenkins',
    name: 'Jacqueline Jenkins',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'elize',
    name: 'Elize',
    studio: 'Without A Clasp',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'julie',
    name: 'Julie',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'rhian',
    name: 'Rhian',
    studio: 'Material Girl',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'andrea-wojcikowski',
    name: 'Andrea Wojcikowski',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'carol-howells',
    name: 'Carol Howells',
    studio: 'C.S Jewellery design',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
  {
    slug: 'tanya',
    name: 'Tanya',
    studio: 'Hiraeth Silver Ltd',
    bio: 'Short bio placeholder text for this artist. Share a brief overview of their creative journey and unique style here.',
    hasBio: false,
  },
]
