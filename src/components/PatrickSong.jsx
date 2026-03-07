import React from "react";

export default function PatrickSong() {
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
        🎂 Patrick’s Birthday Song
      </h2>

      <p style={{ marginBottom: 16, opacity: 0.9 }}>
        A special song written and recorded by Tom Butler for his son Patrick.
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,.35)",
          border: "1px solid rgba(255,255,255,.12)",
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
            border: 0
          }}
        />
      </div>
    </section>
  );
}
