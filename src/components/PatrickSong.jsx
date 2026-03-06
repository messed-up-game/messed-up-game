import React from "react";

export default function PatrickSong() {
  return (
    <section style={{ textAlign: "center", padding: "40px" }}>
      <h2>🎵 A Song for My Son Patrick</h2>

      <p>
        Written and recorded by Tom Butler
      </p>

      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          maxWidth: "800px",
          margin: "20px auto"
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/aDt89DKRaL8"
          title="Patrick Song"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        ></iframe>
      </div>
    </section>
  );
}
