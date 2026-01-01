import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "nodejs"; // Explicitly use Node.js runtime for Cloudflare
export const dynamic = "force-dynamic";

const titles: Record<string, Record<string, string>> = {
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "home";
  const locale = searchParams.get("locale") || "en";

  const pageData = titles[page] || titles.home;
  const title = pageData[locale] || pageData.en;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #18181b 0%, #09090b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" fill="#18181b" />
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            <path
              d="M8 13C8 13 10 10 12 10C14 10 16 13 16 13"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8 16C8 16 10 13 12 13C14 13 16 16 16 16"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#ffffff",
              marginLeft: 20,
              letterSpacing: "-0.02em",
            }}
          >
            JARWATER
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: page === "home" ? 64 : 56,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 1000,
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#a1a1aa",
            marginTop: 24,
          }}
        >
          Motion Studio
        </div>

        {/* Accent line */}
        <div
          style={{
            width: 120,
            height: 4,
            background: "#6366f1",
            marginTop: 40,
            borderRadius: 2,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );
}
