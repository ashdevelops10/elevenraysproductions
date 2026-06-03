// Centralised content for Eleven Rays Productions.
// Images are compressed high-quality WebP derivatives generated from production archives.

export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  /** layout span hint for the editorial grid */
  span?: "tall" | "wide" | "square";
};

const portfolio = (file: string) => `/images/portfolio/${file}`;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    no: "01",
    title: "Cinematography",
    blurb:
      "Motion shot like the golden age — deliberate light, deep contrast, every frame composed to last.",
    image: portfolio("bird-flight.webp"),
  },
  {
    no: "02",
    title: "Photography",
    blurb:
      "Stills with the weight of a portrait sitting. Texture, grain and presence over polish.",
    image: portfolio("editorial-red-coat.webp"),
  },
  {
    no: "03",
    title: "Art Direction",
    blurb:
      "Worlds built from nothing — a concept, a mood, a set dressed down to the last prop.",
    image: portfolio("pizza-craft-tableau.webp"),
  },
  {
    no: "04",
    title: "Creative Direction",
    blurb:
      "The throughline of a brand. We hold the vision from first idea to final cut.",
    image: portfolio("cookie-picnic-brand-story.webp"),
  },
  {
    no: "05",
    title: "Set Design & Styling",
    blurb:
      "Atmosphere is everything. We compose the room before the camera ever rolls.",
    image: portfolio("red-dessert-retro-set.webp"),
  },
  {
    no: "06",
    title: "Content Creation",
    blurb:
      "Stories cut for every screen — long-form drama to the scroll-stopping short.",
    image: portfolio("matcha-pour-cafe.webp"),
  },
] as const;

export type Collection = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  images: ImageAsset[];
};

export const COLLECTIONS: Collection[] = [
  {
    id: "residential-property",
    kicker: "Property 01",
    title: "Residential Property",
    description:
      "A warm apartment story arranged room by room: bedrooms, kitchen, dining and lounge details.",
    images: [
      { id: "rp1", src: portfolio("property-apartment-bedroom-wide.webp"), alt: "Wide view of a warm apartment bedroom", span: "wide" },
      { id: "rp2", src: portfolio("property-apartment-bedroom-tv.webp"), alt: "Apartment bedroom with television and vanity wall", span: "wide" },
      { id: "rp3", src: portfolio("property-apartment-vanity-wall.webp"), alt: "Vanity wall and media unit in the bedroom", span: "wide" },
      { id: "rp4", src: portfolio("property-apartment-bedroom-corner.webp"), alt: "Bedroom corner with curtains and warm paneling", span: "wide" },
      { id: "rp5", src: portfolio("property-apartment-media-wall.webp"), alt: "Bedroom media wall with desk and mirror", span: "wide" },
      { id: "rp6", src: portfolio("property-apartment-kitchen-entry.webp"), alt: "Glass entry into a white modular kitchen", span: "wide" },
      { id: "rp7", src: portfolio("property-apartment-kitchen-low.webp"), alt: "Low angle view of a white apartment kitchen", span: "wide" },
      { id: "rp8", src: portfolio("property-apartment-kitchen-wide.webp"), alt: "Wide view of the apartment kitchen counter", span: "wide" },
      { id: "rp9", src: portfolio("property-apartment-second-bedroom.webp"), alt: "Second bedroom with grey curtains and vanity", span: "wide" },
      { id: "rp10", src: portfolio("property-apartment-glass-kitchen-entry.webp"), alt: "Kitchen entry framed by display shelves", span: "wide" },
      { id: "rp11", src: portfolio("property-apartment-display-cabinet.webp"), alt: "Display cabinet and hallway storage", span: "wide" },
      { id: "rp12", src: portfolio("property-apartment-dining-warm.webp"), alt: "Warm dining area with orange chairs", span: "wide" },
      { id: "rp13", src: portfolio("property-apartment-living-blue-detail.webp"), alt: "Blue sofa lounge detail with marble table", span: "wide" },
      { id: "rp14", src: portfolio("property-apartment-dining-marble.webp"), alt: "Marble dining table in the apartment", span: "wide" },
    ],
  },
  {
    id: "commercial-property",
    kicker: "Property 02",
    title: "Commercial Property",
    description:
      "Lobby, reception, office and terrace spaces photographed for scale, finish and atmosphere.",
    images: [
      { id: "cp1", src: portfolio("property-commercial-lobby-marble.webp"), alt: "Marble commercial lobby with a sculptural wall", span: "wide" },
      { id: "cp2", src: portfolio("property-commercial-reception-art-wall.webp"), alt: "Reception desk and large textured art wall", span: "wide" },
      { id: "cp3", src: portfolio("property-commercial-reception-lounge.webp"), alt: "Bright reception lounge with chandeliers", span: "wide" },
      { id: "cp4", src: portfolio("property-commercial-terrace-dining.webp"), alt: "Outdoor terrace dining area at night", span: "wide" },
      { id: "cp5", src: portfolio("property-commercial-lounge-meeting.webp"), alt: "Commercial lounge and meeting table", span: "wide" },
      { id: "cp6", src: portfolio("property-commercial-boardroom-bright.webp"), alt: "Bright commercial boardroom with glass partitions", span: "wide" },
      { id: "cp7", src: portfolio("property-commercial-executive-office.webp"), alt: "Executive office with desk and patterned wall light", span: "wide" },
      { id: "cp8", src: portfolio("property-commercial-turnstile-entry.webp"), alt: "Turnstile entry corridor in a commercial lobby", span: "wide" },
      { id: "cp9", src: portfolio("property-commercial-lobby-corridor.webp"), alt: "Long commercial lobby corridor with seating", span: "wide" },
      { id: "cp10", src: portfolio("property-commercial-lobby-long-view.webp"), alt: "Long view through the warm commercial lobby", span: "wide" },
    ],
  },
  {
    id: "motion-nature",
    kicker: "Reel 03",
    title: "Motion & Nature",
    description:
      "Birds, texture and atmosphere framed with the restraint of a moving image.",
    images: [
      { id: "mn2", src: portfolio("shore-birds-light.webp"), alt: "Birds crossing a hazy shoreline", span: "wide" },
      { id: "mn1", src: portfolio("bird-portrait.webp"), alt: "Perched bird study against a clean backdrop", span: "tall" },
      { id: "mn3", src: portfolio("shore-birds-shadow.webp"), alt: "Muted shoreline birds in a dark frame", span: "wide" },
      { id: "mn4", src: portfolio("feather-texture.webp"), alt: "Close textured feather detail", span: "square" },
    ],
  },
  {
    id: "editorial",
    kicker: "Reel 04",
    title: "Editorial",
    description:
      "Fashion-led frames with movement, silhouette and strong character.",
    images: [
      { id: "ed5", src: portfolio("editorial-red-train.webp"), alt: "Red editorial train arranged across the floor", span: "wide" },
      { id: "ed1", src: portfolio("editorial-dress-motion.webp"), alt: "Editorial dress movement on a pale set", span: "tall" },
      { id: "ed2", src: portfolio("editorial-fan-portrait.webp"), alt: "Editorial portrait with a black fan", span: "square" },
      { id: "ed3", src: portfolio("editorial-black-look.webp"), alt: "Model in a black editorial look", span: "tall" },
      { id: "ed4", src: portfolio("editorial-train-detail.webp"), alt: "Long red and black editorial train detail", span: "tall" },
      { id: "ed6", src: portfolio("editorial-gallery-wall.webp"), alt: "Editorial figure framed against a gallery wall", span: "wide" },
    ],
  },
  {
    id: "culinary",
    kicker: "Reel 05",
    title: "Culinary",
    description:
      "Food stories styled with appetite, texture and a strong sense of place.",
    images: [
      { id: "cu4", src: portfolio("pizza-rustic-overhead.webp"), alt: "Rustic overhead pizza with ingredients", span: "wide" },
      { id: "cu1", src: portfolio("pesto-pasta-plate.webp"), alt: "Pesto pasta plated on a white dish", span: "tall" },
      { id: "cu2", src: portfolio("cream-pasta-spotlight.webp"), alt: "Cream pasta isolated in a dramatic spotlight", span: "tall" },
      { id: "cu3", src: portfolio("margherita-pizza-oven.webp"), alt: "Margherita pizza pulled from the oven", span: "wide" },
      { id: "cu5", src: portfolio("pizza-menu-tableau.webp"), alt: "Pizza styled with an Italian menu board", span: "tall" },
      { id: "cu6", src: portfolio("pizza-ingredient-flatlay.webp"), alt: "Pizza and ingredients arranged on a dark table", span: "square" },
      { id: "cu7", src: portfolio("pizza-slice-overhead.webp"), alt: "Overhead pizza slice composition", span: "square" },
      { id: "cu8", src: portfolio("pizza-slice-overhead-alt.webp"), alt: "Alternate overhead pizza slice composition", span: "square" },
      { id: "cu9", src: portfolio("pizza-slices-grid.webp"), alt: "Pizza slices arranged in a graphic grid", span: "tall" },
      { id: "cu10", src: portfolio("sandwich-newspaper-still-life.webp"), alt: "Sandwich still life on newspaper", span: "square" },
    ],
  },
  {
    id: "cafe-product",
    kicker: "Reel 06",
    title: "Cafe & Product",
    description:
      "Cafe scenes, dessert worlds and brand-led product compositions.",
    images: [
      { id: "cf1", src: portfolio("coffee-beans-flatlay.webp"), alt: "Coffee cup and beans flat lay", span: "wide" },
      { id: "cf2", src: portfolio("layered-iced-coffee.webp"), alt: "Layered iced coffee against brick", span: "wide" },
      { id: "cf3", src: portfolio("yellow-lemonade-still-life.webp"), alt: "Lemonade still life on a yellow set", span: "wide" },
      { id: "cf4", src: portfolio("single-serve-platter.webp"), alt: "Single serve platter on a smoky set", span: "square" },
      { id: "cf5", src: portfolio("pastry-writing-desk.webp"), alt: "Pastry and writing desk flat lay", span: "wide" },
      { id: "cf6", src: portfolio("red-dessert-retro-set.webp"), alt: "Red dessert on a retro tabletop set", span: "tall" },
      { id: "cf7", src: portfolio("baking-table-flatlay.webp"), alt: "Baking table flat lay with cookies and twine", span: "wide" },
      { id: "cf8", src: portfolio("cookies-window-reading.webp"), alt: "Cookies by a window with an open book", span: "wide" },
      { id: "cf9", src: portfolio("cookies-telephone-window.webp"), alt: "Cookies and vintage telephone by a bright window", span: "wide" },
    ],
  },
  {
    id: "object-studies",
    kicker: "Reel 07",
    title: "Still Life",
    description:
      "Objects, tableaus and tactile details composed for atmosphere.",
    images: [
      { id: "os3", src: portfolio("still-life-table.webp"), alt: "Overhead styled tabletop still life", span: "wide" },
      { id: "os1", src: portfolio("guitar-study-01.webp"), alt: "Minimal guitar study on black", span: "wide" },
      { id: "os2", src: portfolio("guitar-study-02.webp"), alt: "Suspended guitar study on black", span: "wide" },
      { id: "os4", src: portfolio("product-story-red.webp"), alt: "Product still life with red accents", span: "tall" },
    ],
  },
];

export const STUDIO = {
  image: {
    src: portfolio("studio-texture-dark.webp"),
    alt: "Dark studio texture from production footage",
  },
  paragraphs: [
    "Eleven Rays Productions is an independent storytelling studio built on an obsession with light, restraint and the long-held frame.",
    "We build worlds and tell original stories. Every project begins with a single idea — a concept developed from nothing — and is carried through cinematography, photography, art direction and set design.",
    "Our work is monochrome at heart: timeless, dramatic, made with the patience of old Hollywood and the speed of the modern screen.",
  ],
  location: "Based in Mumbai. Available worldwide.",
};

export const SITE = {
  name: "Eleven Rays Productions",
  short: "Eleven Rays",
  email: "hello@elevenraysproductions.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
};
