// src/App.jsx — Featured video + Join button + Featured Links
import LiveCTA from "./components/LiveCTA";
import LinkGrid from "./components/LinkGrid";

export default function App() {
  // ——— editable constants ———
  const CHANNEL_ID = "UC5NKMIYPLcdvwzPF5ragDKw";
  const CHANNEL_URL = "https://www.youtube.com/@Messedupgame";
  const FEATURE_VIDEO_ID = "AgnyMhlyxBY"; // your requested featured video
  const STREAMYARD_GUEST_LINK = "https://streamyard.com/6u894xi3cw";

  const links = [
    { title: "Newsletter", href: "/newsletter/", desc: "Latest stories & show times" },
    { title: "Join Live on StreamYard", href: STREAMYARD_GUEST_LINK, desc: "First 9 get on camera" },
    { title: "Messed Up Game — Sign Up", href: "https://messedupgame.com", desc: "Free signup to play" },
    { title: "Got Backup Tom B", href: "https://gotbackuptomb.com", desc: "Cloud backup & storage", affiliate: true },
  ];

  // ——— simple styles ———
  const hero = {
    minHeight: "60vh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    background: "linear-gradient(180deg, #0b0b0b 0%, #111 60%, #181818 100%)",
    color: "white",
    textAlign: "center",
  };
  const h1 = { margin: "6px 0 0", fontSize: "clamp(28px, 5vw, 44px)", fontWeight: 900 };
  const p = { opacity: 0.9, marginTop: 6 };
  const btnRow = { marginTop: 14, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" };
  const btn = {
    display: "inline-block",
    padding: "12px 18px",
    borderRadius: 12,
    background: "#ffffff",
    color: "#111",
    textDecoration: "none",
    fontWeight: 800,
    boxShadow: "0 4px 12px rgba(0,0,0,.25)",
  };
  const btnGhost = {
    ...btn,
    background: "transparent",
    color: "#fff",
    border: "1px solid rgba(255,255,255,.5)",
  };
  const videoWrap = {
    width: "min(960px, 92vw)",
    aspectRatio: "16 / 9",
    margin: "16px auto 8px",
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "0 10px 24px rgba(0,0,0,.35)",
    background: "#000",
  };
  const iframe = { width: "100%", height: "100%", border: 0 };

  return (
    <main>
      {/* HERO: Featured video + CTAs */}
      <section style={hero}>
        <div style={{ width: "100%" }}>
          <h1 style={h1}>Messed Up Game — Live with Wildman Tom B</h1>
          <p style={p}>Up to 9 players join on camera. Family-friendly, fast, and hilarious.</p>

          {/* Featured YouTube video */}
          <div style={videoWrap}>
            <iframe
              style={iframe}
              src={`https://www.youtube.com/embed/${FEATURE_VIDEO_ID}?rel=0`}
              title="Featured video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Primary CTAs */}
          <div style={btnRow}>
            <a href={STREAMYARD_GUEST_LINK} target="_blank" rel="noopener noreferrer" style={btn}>
              Join Live on StreamYard
            </a>
            <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" style={btnGhost}>
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Optional extra CTA component (safe if it ignores props) */}
      <LiveCTA streamyardUrl={STREAMYARD_GUEST_LINK} channelUrl={CHANNEL_URL} />

      {/* Featured links grid */}
      <LinkGrid title="Featured Links" items={links} />
    </main>
  );
}
