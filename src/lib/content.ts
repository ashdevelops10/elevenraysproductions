// Centralised content for Eleven Rays Productions.
// Images are compressed high-quality WebP derivatives generated from production archives.

export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "square";
};

const portfolio = (file: string) => `/images/portfolio/${file}`;

export const HERO = {
  tagline: "Every ray of light tells a story.",
  headline: "Eleven Rays Productions",
  subline:
    "We photograph spaces, food, objects and people — one frame at a time, with the patience light demands.",
  cta: "View the Work",
} as const;

export const PHILOSOPHY = {
  eyebrow: "Every frame, crafted with intention.",
  heading: "We don't chase the light. We wait for it.",
  paragraphs: [
    "Photography is a study in patience. The right ray of light on the right surface — that is not luck. It is preparation, timing and a refusal to settle for less.",
    "We bring that discipline to every project, from a single product shot to a full interior campaign.",
  ],
} as const;

export const SERVICES_INTRO = {
  heading: "What we photograph.",
  subHeading: "Four disciplines. One visual language.",
} as const;

export const WORK_INTRO = {
  heading: "Selected Work",
  subHeading: "An archive of frames — shot with purpose, arranged to be seen.",
  metaStart: "Shot with purpose",
  metaEnd: "Arranged to be seen",
} as const;

export const CONTACT_CONTENT = {
  heading: "Let's find the right light for your work.",
  subText: "Tell us what you're building. We'll tell you how it should look.",
  cta: "Get in Touch",
  inputPlaceholder: "hello@elevenraysproductions.com",
  newsletter: "New work, when it's ready. No noise.",
} as const;

export const FOOTER_CONTENT = {
  tagline: "Photography by Eleven Rays Productions",
  copyright: "© 2026 Eleven Rays Productions. All rights reserved.",
  location: "A PART OF ELEVEN RAYS",
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    no: "01",
    title: "Property",
    blurb:
      "Residential and commercial spaces photographed for scale, light and atmosphere. Every room is framed as a scene.",
    image: portfolio("property-commercial-lobby-long-view.webp"),
  },
  {
    no: "02",
    title: "Editorial",
    blurb:
      "Fashion and portrait work with movement, silhouette and character. Strong light, stronger story.",
    image: portfolio("editorial-gallery-wall.webp"),
  },
  {
    no: "03",
    title: "Food & Culinary",
    blurb:
      "Dishes, ingredients and dining stories styled for appetite and texture. Built to make people hungry.",
    image: portfolio("pizza-rustic-overhead.webp"),
  },
  {
    no: "04",
    title: "Product & Still Life",
    blurb:
      "Objects, brand compositions and cafe scenes. Detail-led work that earns the second look.",
    image: portfolio("product-story-red.webp"),
  },
] as const;

export type Collection = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  images: ImageAsset[];
  additionalRows?: ImageAsset[][];
};

export const COLLECTIONS: Collection[] = [
  {
    id: "property",
    kicker: "Property 01",
    title: "Property",
    description:
      "Spaces before they are lived in. Light caught at its most honest hour.",
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
    additionalRows: [
      [
        { id: "property-office-1", src: portfolio("property-commercial-lobby-marble.webp"), alt: "Marble commercial lobby with a sculptural wall", span: "wide" },
        { id: "property-office-2", src: portfolio("property-commercial-reception-art-wall.webp"), alt: "Reception desk and large textured art wall", span: "wide" },
        { id: "property-office-3", src: portfolio("property-commercial-reception-lounge.webp"), alt: "Bright reception lounge with chandeliers", span: "wide" },
        { id: "property-office-4", src: portfolio("property-commercial-terrace-dining.webp"), alt: "Outdoor terrace dining area at night", span: "wide" },
        { id: "property-office-5", src: portfolio("property-commercial-lounge-meeting.webp"), alt: "Commercial lounge and meeting table", span: "wide" },
        { id: "property-office-6", src: portfolio("property-commercial-boardroom-bright.webp"), alt: "Bright commercial boardroom with glass partitions", span: "wide" },
        { id: "property-office-7", src: portfolio("property-commercial-executive-office.webp"), alt: "Executive office with desk and patterned wall light", span: "wide" },
        { id: "property-office-8", src: portfolio("property-commercial-turnstile-entry.webp"), alt: "Turnstile entry corridor in a commercial lobby", span: "wide" },
        { id: "property-office-9", src: portfolio("property-commercial-lobby-corridor.webp"), alt: "Long commercial lobby corridor with seating", span: "wide" },
        { id: "property-office-10", src: portfolio("property-commercial-lobby-long-view.webp"), alt: "Long view through the warm commercial lobby", span: "wide" },
      ],
    ],
  },
  {
    id: "editorial",
    kicker: "Editorial 02",
    title: "Editorial",
    description:
      "Silhouette, shadow and the in-between moments that make a story.",
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
    id: "food",
    kicker: "Food & Culinary 03",
    title: "Food & Culinary",
    description:
      "Every dish is a set. Every ingredient, a prop. Every plate, a frame.",
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
    id: "product-still-life",
    kicker: "Product & Still Life 04",
    title: "Product & Still Life",
    description: "Objects that speak when they are allowed to be quiet.",
    images: [
      { id: "ps1", src: portfolio("still-life-table.webp"), alt: "Overhead styled tabletop still life", span: "wide" },
      { id: "ps2", src: portfolio("product-story-red.webp"), alt: "Product still life with red accents", span: "tall" },
      { id: "ps3", src: portfolio("coffee-beans-flatlay.webp"), alt: "Coffee cup and beans flat lay", span: "wide" },
      { id: "ps4", src: portfolio("single-serve-platter.webp"), alt: "Single serve platter on a smoky set", span: "square" },
      { id: "ps5", src: portfolio("layered-iced-coffee.webp"), alt: "Layered iced coffee against brick", span: "wide" },
      { id: "ps6", src: portfolio("yellow-lemonade-still-life.webp"), alt: "Lemonade still life on a yellow set", span: "wide" },
      { id: "ps7", src: portfolio("baking-table-flatlay.webp"), alt: "Baking table flat lay with cookies and twine", span: "wide" },
      { id: "ps8", src: portfolio("cookies-window-reading.webp"), alt: "Cookies by a window with an open book", span: "wide" },
      { id: "ps9", src: portfolio("cookies-telephone-window.webp"), alt: "Cookies and vintage telephone by a bright window", span: "wide" },
      { id: "ps10", src: portfolio("pastry-writing-desk.webp"), alt: "Pastry and writing desk flat lay", span: "wide" },
    ],
  },
];

export const STUDIO = {
  label: "Studio Intro",
  title: "Light is the only ingredient that matters.",
  image: {
    src: portfolio("studio-texture-dark.webp"),
    alt: "Dark studio texture from production footage",
  },
  paragraphs: [
    "A part of Eleven Rays. Built on the same obsession with light.",
    "We work across property, editorial, food and product. Every category, the same standard: composed with intention, lit with restraint, and finished to last.",
  ],
  location:
    "A part of Eleven Rays Productions. Built on the same obsession with light.",
} as const;

export const SITE = {
  name: "Eleven Rays Productions",
  short: "Eleven Rays",
  email: "hello@elevenraysproductions.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
} as const;
