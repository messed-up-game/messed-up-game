export default function FeaturedVideos() {
  const videos = [
    {
      title: "🌿 The Woods 420 Song",
      id: "CzLkFmH2wMo",
    },
    {
      title: "😂 Elon Musk Roast",
      id: "ySkcD4M-QTw",
    },
    {
      title: "🎂 Patrick Birthday Song",
      id: "mLwoEIiM6XM",
    },
    {
      title: "🎉 Orson Wins The Messed Up Game",
      id: "ZDxGMx3tGDk",
    },
  ];

  return (
    <section
      style={{
        margin: "30px 0",
        padding: "24px",
        borderRadius: 18,
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.12)",
        boxShadow: "0 10px 24px rgba(0,0,0,.25)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: 10,
          color: "#facc15",
        }}
      >
        🎬 Featured Videos
      </h2>

      <p
        style={{
          textAlign: "center",
          opacity: 0.85,
          marginBottom: 24,
        }}
      >
        Music, comedy, family moments, and The Messed Up Game™
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              background: "rgba(255,255,255,.05)",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "177.78%",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
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

            <div
              style={{
                padding: 12,
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
