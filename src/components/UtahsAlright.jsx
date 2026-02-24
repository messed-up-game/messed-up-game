export default function UtahsAlright() {
  const boxStyle = {
    maxWidth: 900,
    margin: "18px auto 22px",
    padding: 18,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(255,255,255,.05)",
    boxShadow: "0 10px 24px rgba(0,0,0,.25)",
  };

  const linkStyle = {
    color: "#7bdff6",
    textDecoration: "none",
    fontWeight: 900,
  };

  return (
    <section style={boxStyle}>
      <h2 style={{ margin: "0 0 8px", fontSize: "1.5rem", fontWeight: 900 }}>
        🎶 The Olympic Song Series
      </h2>

      <p style={{ margin: "0 0 10px", opacity: 0.95, lineHeight: 1.55 }}>
        “Utah’s Alright” was originally written for the{" "}
        <strong>2002 Winter Olympics in Salt Lake City</strong> as part of a documentary
        project produced by Butler Productions.
      </p>

      <p style={{ margin: "0 0 12px", opacity: 0.95, lineHeight: 1.55 }}>
        Today, that vision is expanding into an <strong>Olympic Song Series</strong> celebrating:
      </p>

      <ul style={{ margin: "0 0 12px", paddingLeft: 18, lineHeight: 1.65, opacity: 0.95 }}>
        <li>🇺🇸 <strong>LA 2028</strong> Summer Games</li>
        <li>❄️ <strong>Salt Lake City 2034</strong> Winter Games</li>
        <li>Stories of unity, perseverance, and community</li>
        <li>Original songs + documentary-style storytelling</li>
      </ul>

      <p style={{ margin: 0, opacity: 0.95, lineHeight: 1.55 }}>
        Interested in partnering, sponsoring, or featuring this project?{" "}
        <a href="mailto:tombutler@messedupgame.com" style={linkStyle}>
          tombutler@messedupgame.com
        </a>
        .
      </p>
    </section>
  );
}
