import { Project } from "./types";

export const PORTFOLIO_OWNER = {
  name: "portfolio-songhee",
  koreanName: "이송희",
  title: "FREELANCE COLORIST",
  location: "Warsaw, Poland & Seoul",
  email: "thdgmldlsgh@naver.com",
  websiteUrl: "https://portfolio-songhee-260526.vercel.app/",
  instagramUrl: "https://instagram.com/zuzawozniczka",
  linkedinUrl: "https://linkedin.com",
  becomingText: "turning frames INTO EMOTIONS — grading commercial, narrative, and music video projects worldwide."
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "KUKU",
    category: "Commercial",
    description: "Atmospheric, high-contrast visual grading designed to accentuate tactile sensations and skin texture. Dominated by luxurious earthy tones.",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Commercial", "Color Grading", "DaVinci Resolve", "Fashion"],
    client: "KUKU Association",
    year: "2025",
    liveUrl: "#"
  },
  {
    id: "02",
    title: "Christmas 2025",
    category: "Narrative",
    description: "Deep, cozy holiday aesthetic with rich evergreen grading, golden warm glows, and dense cinematic shadows.",
    imageUrl: "https://images.unsplash.com/photo-1543589077-47d81606c1ad?auto=format&fit=crop&w=1200&q=80",
    tags: ["Holiday", "Warm Palettes", "Cinema Tech", "Film Print Emulation"],
    client: "Netflix Poland",
    year: "2025",
    liveUrl: "#"
  },
  {
    id: "03",
    title: "Skansen",
    category: "Documentary",
    description: "Cold, melancholic Nordic mood. Desaturated moss-greens and muted slate-blues illustrating solitary raw architectures.",
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    tags: ["Nordic Mood", "Desaturated", "Documentary Style", "HDR Grade"],
    client: "National Heritage Film",
    year: "2024",
    liveUrl: "#"
  },
  {
    id: "04",
    title: "Merito",
    category: "Commercial",
    description: "Modern, sleek corporate campaign grading. Dominated by precise cold-cyan values and highly polished metallic highlights.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    tags: ["Commercial", "Metallic Tones", "Teal & Orange", "Sharpness"],
    client: "Merito Banking Group",
    year: "2025",
    liveUrl: "#"
  },
  {
    id: "05",
    title: "X NATALIA SZROEDER",
    category: "Music Video",
    description: "Highly stylized music video grading with experimental split-toning, vibrant neon-red highlights and velvety deep blacks.",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    tags: ["Music Video", "Neon Contrast", "Split-Toning", "Kodak Look"],
    client: "Warner Music Poland",
    year: "2025",
    liveUrl: "#"
  },
  {
    id: "06",
    title: "Wspaniały świat",
    category: "Short Film",
    description: "Rich, nostalgic golden-hour drama. Soft contrast curves, creamy skin tones, and delicate highlight roll-offs mimicking 35mm film.",
    imageUrl: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1200&q=80",
    tags: ["Narrative Film", "35mm Emulation", "Nostalgia", "Soft Highlight"],
    client: "Studio Silesia",
    year: "2024",
    liveUrl: "#"
  },
  {
    id: "07",
    title: "Scheda Teaser",
    category: "Thriller Teaser",
    description: "Dark, moody suspense grading. Gritty textures, heavy film grain, with high-density green shadows.",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    tags: ["Thriller", "Heavy Grain", "Moody Green Shadows", "Gritty"],
    client: "Glow Filmhouse",
    year: "2025",
    liveUrl: "#"
  },
  {
    id: "08",
    title: "Basketball",
    category: "Commercial",
    description: "Energetic sports apparel grading. Heavy saturated warmth, sweat-glistening highlight controls, and highly dynamic color contrast.",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80",
    tags: ["Sports Campaign", "Dynamic Range", "Warm Glows", "High Saturation"],
    client: "Active Athletics",
    year: "2025",
    liveUrl: "#"
  }
];

export const SKILL_GROUPS = [
  {
    category: "Dynamic Tools",
    skills: ["DaVinci Resolve Studio", "BaseLight", "Premiere Pro", "After Effects", "Nuke Studio"]
  },
  {
    category: "Expertise Fields",
    skills: ["Film Print Emulation", "Commercial Campaigns", "HDR & Dolby Vision grading", "LUT Development", "Color Space Management"]
  }
];

export const PHILOSOPHY_LINES = [
  "TURNING FRAMES INTO EMOTIONS",
  "SELECTION / SELECTION",
  "COMMERCIALS & MUSIC VIDEOS",
  "FILM PRINT EMULATION",
  "DAVINCI RESOLVE SPECIALIST Check more"
];
