import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const publicDir = join(rootDir, "public", "og");

const locales = [
  "en", "ja", "ko", "es", "pt-BR", "th", "id", "fr", "zh-CN", "ar", "de", "de-CH", "no", "da"
];

const titles = {
  home: {
    en: "Motion that moves.",
    ja: "動きで感動を。",
    ko: "움직임으로 감동을.",
    es: "Movimiento que conmueve.",
    "pt-BR": "Movimento que emociona.",
    th: "การเคลื่อนไหวที่สร้างแรงบันดาลใจ",
    id: "Gerakan yang menggerakkan.",
    fr: "Le mouvement qui émeut.",
    "zh-CN": "打动人心的动态设计。",
    ar: "حركة تُحرّك المشاعر.",
    de: "Bewegung, die bewegt.",
    "de-CH": "Bewegung, die bewegt.",
    no: "Bevegelse som beveger.",
    da: "Motion der bevæger.",
  },
  work: {
    en: "Featured Work",
    ja: "厳選作品",
    ko: "주요 작품",
    es: "Trabajos Destacados",
    "pt-BR": "Trabalhos em Destaque",
    th: "ผลงานเด่น",
    id: "Karya Unggulan",
    fr: "Travaux en Vedette",
    "zh-CN": "精选作品",
    ar: "أعمال مميزة",
    de: "Ausgewählte Arbeiten",
    "de-CH": "Ausgewählte Arbeiten",
    no: "Utvalgte Arbeider",
    da: "Udvalgte Arbejder",
  },
  contact: {
    en: "Start a Project",
    ja: "プロジェクトを始める",
    ko: "프로젝트 시작하기",
    es: "Iniciar un Proyecto",
    "pt-BR": "Iniciar um Projeto",
    th: "เริ่มโปรเจกต์",
    id: "Mulai Proyek",
    fr: "Démarrer un Projet",
    "zh-CN": "开始项目",
    ar: "ابدأ مشروعًا",
    de: "Projekt Starten",
    "de-CH": "Projekt Starten",
    no: "Start et Prosjekt",
    da: "Start et Projekt",
  },
  explainers: {
    en: "Animated Explainer Videos",
    ja: "アニメーション解説動画",
    ko: "애니메이션 설명 영상",
    es: "Videos Explicativos Animados",
    "pt-BR": "Vídeos Explicativos Animados",
    th: "วิดีโออธิบายแบบแอนิเมชั่น",
    id: "Video Explainer Animasi",
    fr: "Vidéos Explicatives Animées",
    "zh-CN": "动画解说视频",
    ar: "فيديوهات توضيحية متحركة",
    de: "Animierte Erklärvideos",
    "de-CH": "Animierte Erklärvideos",
    no: "Animerte Forklaringsvideoer",
    da: "Animerede Forklaringsvideoer",
  },
  "motion-graphics": {
    en: "Motion Graphics",
    ja: "モーショングラフィックス",
    ko: "모션 그래픽",
    es: "Motion Graphics",
    "pt-BR": "Motion Graphics",
    th: "โมชั่นกราฟิก",
    id: "Motion Graphics",
    fr: "Motion Graphics",
    "zh-CN": "动态图形",
    ar: "موشن جرافيكس",
    de: "Motion Graphics",
    "de-CH": "Motion Graphics",
    no: "Motion Graphics",
    da: "Motion Graphics",
  },
  "digital-ads": {
    en: "Digital Ads",
    ja: "デジタル広告",
    ko: "디지털 광고",
    es: "Anuncios Digitales",
    "pt-BR": "Anúncios Digitais",
    th: "โฆษณาดิจิทัล",
    id: "Iklan Digital",
    fr: "Publicités Digitales",
    "zh-CN": "数字广告",
    ar: "الإعلانات الرقمية",
    de: "Digitale Anzeigen",
    "de-CH": "Digitale Anzeigen",
    no: "Digitale Annonser",
    da: "Digitale Annoncer",
  },
};

const pages = Object.keys(titles);

function generateSVG(title, isHome) {
  const fontSize = isHome ? 64 : 56;
  const escapedTitle = title
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#18181b"/>
      <stop offset="100%" style="stop-color:#09090b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- Logo circle -->
  <circle cx="520" cy="220" r="33" fill="#18181b" stroke="#ffffff" stroke-width="1.5"/>
  <path d="M520 251C534.36 251 546 239.36 546 225C546 210.64 534.36 199 520 199C505.64 199 494 210.64 494 225C494 239.36 505.64 251 520 251Z" stroke="#ffffff" stroke-width="1.5" fill="none"/>
  <path d="M508 230C508 230 515 222 520 222C525 222 532 230 532 230" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  <path d="M508 238C508 238 515 230 520 230C525 230 532 238 532 238" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" fill="none"/>
  <!-- Logo text -->
  <text x="600" y="235" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="700" fill="#ffffff" letter-spacing="-0.02em">JARWATER</text>
  <!-- Title -->
  <text x="600" y="350" font-family="system-ui, -apple-system, sans-serif" font-size="${fontSize}" font-weight="600" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${escapedTitle}</text>
  <!-- Subtitle -->
  <text x="600" y="410" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#a1a1aa" text-anchor="middle">Motion Studio</text>
  <!-- Accent line -->
  <rect x="540" y="460" width="120" height="4" fill="#6366f1" rx="2"/>
</svg>`;
}

async function generateImages() {
  console.log("Generating OG images...");

  // Create output directory
  await mkdir(publicDir, { recursive: true });

  let count = 0;
  for (const page of pages) {
    for (const locale of locales) {
      const title = titles[page][locale] || titles[page].en;
      const svg = generateSVG(title, page === "home");
      const filename = `${page}-${locale}.svg`;
      const filepath = join(publicDir, filename);

      await writeFile(filepath, svg);
      count++;
    }
  }

  console.log(`Generated ${count} OG images in public/og/`);
}

generateImages().catch(console.error);
