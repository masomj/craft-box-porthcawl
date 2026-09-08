/**
 * Resident artist roster, carried over from the live Wix site
 * (thecraftboxporthcawl.co.uk/artist-directory) as of Sept 2026.
 *
 * NOTE: several artists on the live site still have Wix placeholder bio text
 * and no photo uploaded, so they've been omitted here rather than replicated.
 * Getting real bios/photos from Mason for those artists is a follow-up task.
 */
export interface Artist {
  slug: string
  name: string
  studio?: string
  bio: string
  /** Path under /public. Omitted where the live site has no photo for this artist. */
  photo?: string
}

export const artists: Artist[] = [
  {
    slug: 'amanda-adams',
    name: 'Amanda Adams',
    studio: 'South Wales Seaglass',
    bio: 'Our founder and seaglass extraordinaire. Amanda creates beautiful crafts made from seaglass collected from the local area.',
    photo: '/artists/amanda-adams.jpg',
  },
  {
    slug: 'jo-stanford',
    name: 'Jo Stanford',
    studio: 'Jo Stanford Studios',
    bio: 'Expressive painter Jo creates moody and emotive paintings of the coast. She excellently captures the movement and essence of the sea.',
  },
  {
    slug: 'troy-clark',
    name: 'Troy Clark',
    studio: 'Troy Clark Fine Art',
    bio: 'Capturing moments of reflection and contemplation. Intuitive and process-led, Troy focuses on introspection and the power of art to capture emotion. Troy also supports brand development and local creative marketing.',
  },
  {
    slug: 'julie-davies',
    name: 'Julie Davies',
    studio: 'Ty Eglwys Art',
    bio: 'Julie Davies is a self-taught artist capturing everyday life through detailed drawings and vibrant, story-led paintings. Inspired by local landscapes and Welsh heritage, her work celebrates community, place, and memory.',
    photo: '/artists/julie-davies.jpg',
  },
  {
    slug: 'caroline-limbert',
    name: 'Caroline Limbert',
    studio: 'Salud Ceramics',
    bio: 'Caroline is a ceramic artist creating hand-thrown and hand-painted pieces that blend function with playful, decorative detail. Her work brings warmth, character, and individuality to functional pottery. As well as creating beautiful ceramics, Caroline explores the therapeutic potential of the arts in supporting wellbeing.',
    photo: '/artists/caroline-limbert.jpg',
  },
  {
    slug: 'julie-pickin',
    name: 'Julie Pickin',
    studio: 'Cariad Earth',
    bio: "Julie founded the Cariad Earth brand for her fabulous range of candles, soaps & beauty products all hand made with pure & natural ingredients. Overflowing with creativity, Julie also makes handmade wreaths and has recently turned her hand to resin objet d'arts.",
    photo: '/artists/julie-pickin.png',
  },
]
