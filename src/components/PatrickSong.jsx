import React from "react";

export default function PatrickSong() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "40px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
        color: "white"
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
        🎵 Songs From Tom Butler
      </h2>

      <p style={{ fontSize: "1.1rem", marginBottom: "40px" }}>
        Family, fun, and original music from Wildman Tom B.
      </p>

      <div
        style={{
          background: "#0b1220",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "18px",
          padding: "24px",
          marginBottom: "40px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)"
        }}
      >
        <h3 style={{ fontSize: "1.6rem", marginBottom: "10px" }}>
          🎂 Patrick’s Birthday Song
        </h3>

        <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
          A special song written and recorded by Tom Butler for his son Patrick.
        </p>

        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/aDt89DKRaL8"
            title="Patrick Birthday Song"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "12px"
            }}
          ></iframe>
        </div>
      </div>

      <div
        style={{
          background: "#0b1220",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "18px",
          padding: "24px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.25)"
        }}
      >
        <h3 style={{ fontSize: "1.6rem", marginBottom: "10px" }}>
          😄 Crazy Funny Man – Wildman Tom B
        </h3>

        <p style={{ marginBottom: "20px", lineHeight: "1.6" }}>
          A fun original song by Tom Butler about life, family, and the Wildman Tom B spirit.
        </p>

        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/8m1hPXCz414"
            title="Crazy Funny Man Wildman Tom B"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "12px"
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
