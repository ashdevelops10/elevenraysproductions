// Centralised content for Eleven Rays Productions.
// Swap the `src` values for your own high-res footage/photography when ready.
// Images use picsum (grayscale-capable) as classic monochrome stand-ins.

export type ImageAsset = {
  id: string;
  src: string;
  alt: string;
  /** layout span hint for the editorial grid */
  span?: "tall" | "wide" | "square";
};

const pic = (id: number, w: number, h: number) =>
  `https://picsum.photos/id/${id}/${w}/${h}`;

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
    image: pic(1062, 1200, 1500),
  },
  {
    no: "02",
    title: "Photography",
    blurb:
      "Stills with the weight of a portrait sitting. Texture, grain and presence over polish.",
    image: pic(1025, 1200, 1500),
  },
  {
    no: "03",
    title: "Art Direction",
    blurb:
      "Worlds built from nothing — a concept, a mood, a set dressed down to the last prop.",
    image: pic(1074, 1200, 1500),
  },
  {
    no: "04",
    title: "Creative Direction",
    blurb:
      "The throughline of a brand. We hold the vision from first idea to final cut.",
    image: pic(1080, 1200, 1500),
  },
  {
    no: "05",
    title: "Set Design & Styling",
    blurb:
      "Atmosphere is everything. We compose the room before the camera ever rolls.",
    image: pic(1084, 1200, 1500),
  },
  {
    no: "06",
    title: "Content Creation",
    blurb:
      "Stories cut for every screen — long-form drama to the scroll-stopping short.",
    image: pic(1059, 1200, 1500),
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
    id: "film",
    kicker: "Reel 01",
    title: "Film",
    description:
      "Narrative and commercial motion — lit, framed and graded for the big screen.",
    images: [
      { id: "f1", src: pic(1043, 1100, 1500), alt: "Cinematic portrait in shadow", span: "tall" },
      { id: "f2", src: pic(1039, 1600, 1000), alt: "Wide establishing landscape", span: "wide" },
      { id: "f3", src: pic(1015, 1100, 1100), alt: "Still life from a film set", span: "square" },
      { id: "f4", src: pic(1011, 1100, 1500), alt: "Dramatic figure study", span: "tall" },
    ],
  },
  {
    id: "portrait",
    kicker: "Reel 02",
    title: "Portrait",
    description:
      "Faces, presence, character — the human story told in a single frame.",
    images: [
      { id: "p1", src: pic(1005, 1100, 1500), alt: "Studio portrait", span: "tall" },
      { id: "p2", src: pic(1062, 1100, 1100), alt: "Close character study", span: "square" },
      { id: "p3", src: pic(338, 1600, 1000), alt: "Environmental portrait", span: "wide" },
      { id: "p4", src: pic(823, 1100, 1500), alt: "Dramatic lit portrait", span: "tall" },
    ],
  },
  {
    id: "places",
    kicker: "Reel 03",
    title: "Places",
    description:
      "Location and architecture — the stage on which every story is set.",
    images: [
      { id: "l1", src: pic(164, 1600, 1000), alt: "Architectural scene", span: "wide" },
      { id: "l2", src: pic(142, 1100, 1500), alt: "Interior with dramatic light", span: "tall" },
      { id: "l3", src: pic(180, 1100, 1100), alt: "Textural detail", span: "square" },
      { id: "l4", src: pic(110, 1600, 1000), alt: "Wide cinematic vista", span: "wide" },
    ],
  },
];

export const STUDIO = {
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
