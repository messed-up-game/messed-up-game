export default function SocialBar() {
  const socials = [
    { name: "X", url: "https://x.com/saveplanetusa", icon: "𝕏" },
    { name: "YouTube", url: "https://www.youtube.com/@Messedupgame", icon: "▶️" },
    { name: "Facebook", url: "https://www.facebook.com/messedupgametomb/", icon: "📘" },
    { name: "Instagram", url: "https://www.instagram.com/messed_up_game/", icon: "📸" },
    { name: "TikTok", url: "https://www.tiktok.com/@messedupgamelivewildman", icon: "🎵" },
    { name: "Threads", url: "https://www.threads.net/@messed_up_game", icon: "🧵" },
  ];

  return (
    <div style={{ marginTop: 16, textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 14px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 800,
              border: "2px solid rgba(255,255,255,0.3)",
              background: "rgba(0,0,0,0.15)",
              color: "#ffffff",
            }}
          >
            <span style={{ fontSize: 18 }}>{s.icon}</span>
            <span>{s.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
