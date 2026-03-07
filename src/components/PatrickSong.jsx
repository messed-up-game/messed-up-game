import React from "react";

export default function PatrickSong() {
  return (
    <section
      style={{
        padding: 16,
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,.12)",
        background: "rgba(255,255,255,.03)",
        boxShadow: "0 10px 24px rgba(0,0,0,.25)",
        textAlign: "center",
        height: "100%",
      }}
    >
      <h3 style={{ margin: "0 0 10px", fontSize: "1.3rem", fontWeight: 900 }}>
        🎂 Patrick’s Birthday Song
      </h3>

      <p style={{ marginBottom: 14, opacity: 0.9, lineHeight: 1.5 }}>
        A special song written and recorded by Tom Butler for Patrick.
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,.10)",
          boxShadow: "0 10px 24px rgba(0,0,0,.3)",
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/aDt89DKRaL8"
          title="Patrick Birthday Song"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>

      <a
        href="https://youtu.be/aDt89DKRaL8"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          marginTop: 12,
          padding: "10px 14px",
          borderRadius: 12,
          textDecoration: "none",
          fontWeight: 900,
          background: "#22c55e",
          color: "#041b0a",
        }}
      >
        Watch on YouTube
      </a>
    </section>
  );
}
