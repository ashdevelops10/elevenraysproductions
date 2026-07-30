// Centralised content for Work By Suri.
// Images are compressed high-quality WebP derivatives generated from production archives.

export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  span?: "tall" | "wide" | "square";
};

const portfolio = (file: string) => `/images/portfolio/${file}`;

export const HERO = {
  tagline: "Photography with purpose, character and impact.",
  headline: "Work By Suri",
  subline:
    "Commercial and creative photography for brands, artists, agencies, products, food, spaces and industry. Based in Chandigarh Tricity. Available for projects across India.",
  cta: "View Portfolio",
  secondaryCta: "Discuss a Project",
} as const;

export const PHILOSOPHY = {
  eyebrow: "Every idea needs a direction.",
  heading: "Every idea starts with a clear intent and grows from there.",
  paragraphs: [
    "That is the thought behind Work By Suri: a clear point of intent, shaped into content that keeps moving outward.",
  ],
} as const;

export const SERVICES_INTRO = {
  heading: "Services",
  subHeading: "Photography built around your objective.",
  cta: "Know Shoot Prices",
  ctaUrl: "https://wa.me/918219641613?text=Hi%2C%20I%27d%20like%20to%20know%20the%20shoot%20prices.",
} as const;

export const WORK_INTRO = {
  heading: "Selected Work",
  subHeading:
    "A selection of commercial campaigns, artist portraits, products, food, interiors, travel and live experiences.",
  cta: "Explore All Work",
} as const;

export type Collaborator = {
  name: string;
  logo: string;
  /** CSS object-position for the crop, e.g. "center 20%". Defaults to "center top". */
  focus?: string;
};

export const COLLABORATIONS = {
  eyebrow: "Collaborations",
  heading: "Trusted by brands, artists and creative teams.",
  subHeading: "Selected work and collaborations include:",
  brands: [
    { name: "Muricha Beauty", logo: "/brands/Mrucha.png" },
    { name: "Urban Theka", logo: "/brands/urban theka.png" },
    { name: "North East on Wheels", logo: "/brands/North East on Wheels.png" },
    { name: "Events VYTL", logo: "/brands/vytl.jpeg" },
  ] satisfies Collaborator[],
  artists: [
    { name: "Deepak Rathore Project", logo: "/brands/deepak-rathore.webp" },
    { name: "Riar Saab", logo: "/brands/Riar Saab.jpg", focus: "55% 20%" },
    { name: "Amulya Rattan", logo: "/brands/Amulya Rattan.JPG", focus: "35% 30%" },
  ] satisfies Collaborator[],
} as const;

export const VYTL_EVENTS_INTRO = {
  eyebrow: "Events VYTL",
  heading: "Live from the last VYTL show.",
  subHeading: "Stage, lights and crowd — captured as it happened.",
} as const;

export const VYTL_EVENTS: ImageAsset[] = [
  { id: "vytl-1", src: portfolio("vytl-event-dj-booth-teal.webp"), alt: "VYTL stage branding lit up behind the DJ booth at dusk" },
  { id: "vytl-2", src: portfolio("vytl-event-chroma-stage-lights.webp"), alt: "Chroma stage screen glowing above the rig at night" },
  { id: "vytl-3", src: portfolio("vytl-event-backlit-dj-portrait.webp"), alt: "Backlit portrait of a performer at the decks" },
  { id: "vytl-4", src: portfolio("vytl-event-crowd-wide.webp"), alt: "Wide view of the crowd at the VYTL event" },
  { id: "vytl-5", src: portfolio("vytl-event-stage-performance.webp"), alt: "Performer on stage under moving lights" },
  { id: "vytl-6", src: portfolio("vytl-event-night-crowd.webp"), alt: "Crowd gathered under the stage lights at night" },
  { id: "vytl-7", src: portfolio("vytl-event-dj-silhouette.webp"), alt: "Silhouette of a DJ set against stage lighting" },
  { id: "vytl-8", src: portfolio("vytl-event-closeup-performer.webp"), alt: "Close-up of a performer mid-set" },
];

export const RIAR_SAAB_INTRO = {
  eyebrow: "Riar Saab",
  heading: "On location with Riar Saab.",
  subHeading: "Portraits shot on a working farm, unpolished and direct.",
} as const;

export const RIAR_SAAB_PHOTOS: ImageAsset[] = [
  { id: "riar-1", src: portfolio("riar-saab-jeep-portrait-standing.webp"), alt: "Riar Saab standing in front of a vintage jeep" },
  { id: "riar-2", src: portfolio("riar-saab-jeep-portrait-wide.webp"), alt: "Wide portrait of Riar Saab beside the jeep" },
  { id: "riar-3", src: portfolio("riar-saab-farmyard-portrait.webp"), alt: "Riar Saab portrait in a farmyard setting" },
  { id: "riar-4", src: portfolio("riar-saab-outdoor-portrait-alt.webp"), alt: "Outdoor portrait of Riar Saab, alternate angle" },
  { id: "riar-5", src: portfolio("riar-saab-close-portrait.webp"), alt: "Close portrait of Riar Saab" },
  { id: "riar-6", src: portfolio("riar-saab-with-horse.webp"), alt: "Riar Saab standing with a horse on the farm" },
];

export const REELS_INTRO = {
  eyebrow: "On Instagram",
  heading: "Reels from recent shoots.",
} as const;

export const REELS = [
  { url: "https://www.instagram.com/reel/DUNq7ncDe0H/" },
  { url: "https://www.instagram.com/reel/DUIhMH8inqa/" },
  { url: "https://www.instagram.com/reel/DTpn20BEj8Z/" },
  { url: "https://www.instagram.com/reel/DTiBnY0Da-F/" },
  { url: "https://www.instagram.com/reel/DTc3hLuDTPU/" },
  { url: "https://www.instagram.com/reel/DTAiOK6Emik/" },
  { url: "https://www.instagram.com/reel/DS99f42DYMN/" },
  { url: "https://www.instagram.com/reel/DStwhqeEgzN/" },
  { url: "https://www.instagram.com/reel/DSUwx2VjQLy/" },
  { url: "https://www.instagram.com/reel/DK7R3Mxpllg/" },
  { url: "https://www.instagram.com/reel/DSZcarMja7Y/" },
  { url: "https://www.instagram.com/reel/DME8ONYoKrF/" },
] as const;

export const APPROACH = {
  eyebrow: "Approach",
  heading: "Clear process. Strong execution.",
  steps: [
    { no: "01", title: "Understand", blurb: "The objective, audience and intended use." },
    { no: "02", title: "Plan", blurb: "The concept, visual direction and shot list." },
    { no: "03", title: "Create", blurb: "A focused, collaborative and professionally managed shoot." },
    { no: "04", title: "Deliver", blurb: "Carefully edited images prepared for web, print and campaigns." },
  ],
} as const;

export const CONTACT_CONTENT = {
  heading: "Have a project in mind?",
  subText:
    "Whether it's a campaign, portrait, product, menu, property or industrial assignment—let's create images that give it a stronger presence.",
  cta: "Start a Conversation",
  secondaryCta: "Check Availability",
  whatsappLabel: "+91 8219641613",
  whatsappUrl: "https://wa.me/918219641613",
  newsletter: "Available on WhatsApp for project inquiries.",
} as const;

export const FOOTER_CONTENT = {
  tagline: "Commercial and creative photography for people, brands, products and spaces.",
  locations: "Chandigarh · Panchkula · Mohali · Available across India",
  copyright: "© 2026 Work By Suri. All rights reserved.",
  location: "A PART OF WORK BY SURI",
} as const;

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
] as const;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#studio" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    no: "01",
    title: "People & Artists",
    blurb:
      "Portraits, personal branding, portfolios, press kits and promotional campaigns.",
    inclusions: ["Portraits", "Personal branding", "Press kits"],
  },
  {
    no: "02",
    title: "Brands & Agencies",
    blurb:
      "Campaign photography, brand content and dependable creative-production support.",
    inclusions: ["Campaign photography", "Brand content", "Production support"],
  },
  {
    no: "03",
    title: "Products & Food",
    blurb:
      "E-commerce, advertising, menus, packaging and social-media imagery.",
    inclusions: ["E-commerce", "Menus & packaging", "Social imagery"],
  },
  {
    no: "04",
    title: "Architecture & Real Estate",
    blurb:
      "Interiors, hospitality, commercial properties and architectural projects.",
    inclusions: ["Interiors", "Hospitality", "Commercial properties"],
  },
  {
    no: "05",
    title: "Industrial & Corporate",
    blurb:
      "People, processes, facilities, machinery and workplace stories.",
    inclusions: ["Facilities", "Machinery", "Workplace stories"],
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
      "Spaces, surfaces and details arranged into a clear visual story.",
    images: [
      { id: "rp0", src: portfolio("property-commercial-lobby-marble.webp"), alt: "Marble commercial lobby with a sculptural wall", span: "wide" },
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
    additionalRows: [
      [
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
    ],
  },
  {
    id: "fashion",
    kicker: "Fashion 04",
    title: "Fashion",
    description:
      "Character, movement and mood — dressed for the frame.",
    images: [
      { id: "fa3", src: portfolio("fashion-green-jumpsuit-shutters.webp"), alt: "Portrait in a green jumpsuit against painted window shutters", span: "wide" },
      { id: "fa1", src: portfolio("fashion-alley-trench-sunglasses.webp"), alt: "Editorial portrait in a leather trench beneath a concrete overpass", span: "tall" },
      { id: "fa2", src: portfolio("fashion-alley-trench-back-view.webp"), alt: "Back view of the trench coat look on the same alley set", span: "tall" },
      { id: "fa4", src: portfolio("fashion-street-portrait-urban.webp"), alt: "Street style portrait against an urban backdrop", span: "tall" },
      { id: "fa5", src: portfolio("fashion-studio-portrait-neutral.webp"), alt: "Studio portrait in neutral tones", span: "tall" },
      { id: "fa6", src: portfolio("fashion-outdoor-portrait-stairs.webp"), alt: "Outdoor portrait on a stairway", span: "tall" },
      { id: "fa7", src: portfolio("fashion-editorial-pose-wall.webp"), alt: "Editorial pose against a textured wall", span: "wide" },
      { id: "fa8", src: portfolio("fashion-portrait-natural-light.webp"), alt: "Portrait lit with soft natural light", span: "tall" },
      { id: "fa9", src: portfolio("fashion-look-full-length.webp"), alt: "Full-length fashion look", span: "tall" },
      { id: "fa10", src: portfolio("fashion-detail-accessory.webp"), alt: "Detail shot of a styling accessory", span: "square" },
    ],
    additionalRows: [
      [
        { id: "fa11", src: portfolio("fashion-portrait-closeup.webp"), alt: "Close-up fashion portrait", span: "tall" },
        { id: "fa12", src: portfolio("fashion-look-outdoor.webp"), alt: "Outdoor fashion look", span: "square" },
        { id: "fa13", src: portfolio("fashion-studio-look-two.webp"), alt: "Studio fashion look", span: "tall" },
        { id: "fa14", src: portfolio("fashion-portrait-window-light.webp"), alt: "Portrait lit by window light", span: "square" },
        { id: "fa15", src: portfolio("fashion-look-three.webp"), alt: "Fashion look with layered styling", span: "square" },
        { id: "fa16", src: portfolio("fashion-portrait-profile.webp"), alt: "Profile fashion portrait", span: "tall" },
        { id: "fa17", src: portfolio("fashion-editorial-full-body.webp"), alt: "Full-body editorial fashion shot", span: "tall" },
        { id: "fa18", src: portfolio("fashion-portrait-soft-light.webp"), alt: "Portrait in soft directional light", span: "tall" },
        { id: "fa19", src: portfolio("fashion-look-four.webp"), alt: "Fashion look on location", span: "square" },
        { id: "fa20", src: portfolio("fashion-portrait-final.webp"), alt: "Fashion portrait with warm tones", span: "square" },
      ],
    ],
  },
];

export const STUDIO = {
  label: "About",
  title: "Behind the camera",
  image: {
    src: portfolio("suri-profile-camera.webp"),
    alt: "Suri reviewing a photo on his camera with a group of children",
  },
  paragraphs: [
    "I'm Suri, a commercial and creative photographer based in Chandigarh Tricity.",
    "My approach is simple: understand the subject, define the purpose and create photographs that feel distinctive, honest and useful. I work independently or alongside artists, agencies and in-house creative teams.",
  ],
  cta: "More About Me",
  location: "A part of Work By Suri.",
} as const;

export const SITE = {
  name: "Work By Suri",
  short: "Work By Suri",
  email: "hello@workbysuri.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
} as const;
