import React from "react";

export default function UtahsAlright() {
  return (
    <section
      style={{
        margin: "22px 0",
        padding: 16,
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,.12)",
        background: "rgba(255,255,255,.03)",
        boxShadow: "0 10px 24px rgba(0,0,0,.25)",
        textAlign: "center"
      }}
    >
      <h2 style={{ margin: "0 0 10px", fontSize: "1.5rem", fontWeight: 900 }}>
        🎿 Utah’s Alright – Olympic Song
      </h2>

      <p style={{ marginBottom: 16, opacity: 0.9 }}>
        Written and recorded by Tom Butler for the 2002 Winter Olympics in Salt Lake City.
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,.35)",
          border: "1px solid rgba(255,255,255,.12)"
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/gLs7eegiTF0"
          title="Utah's Alright Olympic Song"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
        />
      </div>

      <p style={{ marginTop: 12 }}>
        <a
          href="https://youtu.be/gLs7eegiTF0"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 14px",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: 900,
            background: "#22c55e",
            color: "#041b0a"
          }}
        >
          Watch on YouTube
        </a>
      </p>
    </section>
  );
}
